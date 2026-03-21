<script setup>
import { ref, reactive, computed, nextTick, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { buildFilesystem, getPathString } from '../terminal/filesystem.js'
import { executeCommand, tabComplete } from '../terminal/commands.js'
import { formatWelcome } from '../terminal/formatters.js'
import { downloadCV, viewCV } from '../layout/untils.js'
import '../terminal/terminal.scss'

const store = useStore()
const i18n = useI18n()
const { t } = i18n

// ── state ────────────────────────────────────────────────────────────
const outputLines = ref([])
const currentInput = ref('')
const commandHistory = ref([])
const historyIndex = ref(-1)
const outputRef = ref(null)
const inputRef = ref(null)
let lineIdCounter = 0

const fsState = reactive({
  root: buildFilesystem(t),
  currentPath: ['~', 'portfolio'],
  previousPath: null
})

const uniColor = computed(() => store.state.uniColor)
const isDark = computed(() => store.state.dark)

const prompt = computed(() => {
  const path = getPathString(fsState.currentPath)
  return `charlot@portfolio:${path}$ `
})

const terminalClass = computed(() => ({
  'terminal-container': true,
  'terminal-dark': isDark.value,
  'terminal-light': !isDark.value
}))

// ── lifecycle ────────────────────────────────────────────────────────
onMounted(() => {
  showWelcome()
  focusInput()
})

// rebuild filesystem when language changes
watch(
  () => i18n.locale.value,
  () => {
    fsState.root = buildFilesystem(t)
  }
)

// ── helpers ──────────────────────────────────────────────────────────
function pushLines(lines) {
  lines.forEach((l) => {
    outputLines.value.push({ ...l, id: lineIdCounter++ })
  })
  scrollToBottom()
}

function scrollToBottom() {
  nextTick(() => {
    if (outputRef.value) {
      outputRef.value.scrollTop = outputRef.value.scrollHeight
    }
  })
}

function focusInput() {
  nextTick(() => {
    inputRef.value?.focus()
  })
}

function showWelcome() {
  pushLines(formatWelcome(t))
}

// ── command submission ───────────────────────────────────────────────
const isProcessing = ref(false)

function submitCommand() {
  if (isProcessing.value) return

  const input = currentInput.value
  currentInput.value = ''
  historyIndex.value = -1

  // echo the command
  pushLines([{ text: prompt.value + escapeHtml(input), type: 'command' }])

  if (input.trim()) {
    commandHistory.value.push(input.trim())
  }

  const ctx = {
    fs: fsState,
    store,
    i18n,
    t,
    history: commandHistory.value,
    openUrl: (url) => window.open(url, '_blank')
  }

  const result = executeCommand(input, ctx)

  // handle actions
  if (result.action === 'clear') {
    outputLines.value = []
    lineIdCounter = 0
    showWelcome()
    return
  }

  if (result.action === 'exit') {
    store.commit('setTerminalMode', false)
    return
  }

  if (result.action === 'rebuild_fs') {
    fsState.root = buildFilesystem(t)
  }

  pushLines(result.lines)

  if (result.action === 'view_cv') {
    viewCV(i18n.locale.value)
    return
  }

  if (result.action === 'download_cv') {
    runDownloadProgress(result.downloadLang)
    return
  }
}

// ── animated download progress bar ───────────────────────────────────
function runDownloadProgress(lang) {
  isProcessing.value = true
  const barWidth = 40
  const progressLineId = lineIdCounter++
  const fileName = `Charlot_DEDJINOU_CV_${lang.toUpperCase()}.pdf`

  outputLines.value.push({
    id: progressLineId,
    text: buildProgressText(0, barWidth, fileName),
    type: 'accent'
  })
  scrollToBottom()

  let progress = 0
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 5
    if (progress >= 100) progress = 100

    // update the progress line in place
    const idx = outputLines.value.findIndex((l) => l.id === progressLineId)
    if (idx !== -1) {
      outputLines.value[idx] = {
        id: progressLineId,
        text: buildProgressText(progress, barWidth, fileName),
        type: 'accent'
      }
    }
    scrollToBottom()

    if (progress >= 100) {
      clearInterval(interval)
      // add completion line
      nextTick(() => {
        pushLines([
          { text: '', type: 'normal' },
          { text: `  ✓ ${fileName} downloaded successfully!`, type: 'success' }
        ])
        downloadCV(lang)
        isProcessing.value = false
      })
    }
  }, 80)
}

function buildProgressText(progress, barWidth, fileName) {
  const filled = Math.round((progress / 100) * barWidth)
  const empty = barWidth - filled
  const bar = '█'.repeat(filled) + '░'.repeat(empty)
  const pct = String(progress).padStart(3, ' ')
  return `  [${bar}] ${pct}%  ${fileName}`
}

// ── history navigation ───────────────────────────────────────────────
function historyUp() {
  if (commandHistory.value.length === 0) return
  if (historyIndex.value === -1) {
    historyIndex.value = commandHistory.value.length - 1
  } else if (historyIndex.value > 0) {
    historyIndex.value--
  }
  currentInput.value = commandHistory.value[historyIndex.value]
}

function historyDown() {
  if (historyIndex.value === -1) return
  if (historyIndex.value < commandHistory.value.length - 1) {
    historyIndex.value++
    currentInput.value = commandHistory.value[historyIndex.value]
  } else {
    historyIndex.value = -1
    currentInput.value = ''
  }
}

// ── tab completion ───────────────────────────────────────────────────
function handleTab(e) {
  e.preventDefault()
  const ctx = { fs: fsState }
  const completed = tabComplete(currentInput.value, ctx)
  if (completed) {
    currentInput.value = completed
  }
}

// ── click to focus (only if no text is selected) ────────────────────
function handleContainerClick() {
  const selection = window.getSelection()
  if (!selection || selection.isCollapsed) {
    focusInput()
  }
}

// ── escape html for user input ───────────────────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// ── line style helpers ───────────────────────────────────────────────
function getLineClass(lineItem) {
  return ['terminal-line', `line-${lineItem.type}`]
}

function getLineStyle(lineItem) {
  if (lineItem.type === 'accent' || lineItem.type === 'ascii') {
    return { color: uniColor.value }
  }
  return {}
}

// ── highlight rendering: replace ‹HL›...‹/HL› with colored spans ────
function renderHighlight(text) {
  return text
    .replace(/‹HL›/g, '<span style="color:#f85149;font-weight:700">')
    .replace(/‹\/HL›/g, '</span>')
}
</script>

<template>
  <div :class="terminalClass" @click="handleContainerClick">
    <div class="terminal-output" ref="outputRef">
      <template v-for="lineItem in outputLines" :key="lineItem.id">
        <!-- ls output with mixed dir/file coloring -->
        <div v-if="lineItem.type === 'ls'" class="terminal-ls-line">
          <template v-for="(item, idx) in lineItem.items" :key="idx">
            <span
              :class="item.type === 'dir' ? 'ls-dir' : 'ls-file'"
              :style="item.type === 'dir' ? { color: uniColor, fontWeight: 700 } : {}"
            >{{ item.display.padEnd(item.width) }}</span>
          </template>
        </div>
        <!-- highlighted search results (grep/find) -->
        <div v-else-if="lineItem.type === 'highlight'" class="terminal-line line-normal" v-html="renderHighlight(lineItem.text)"></div>
        <!-- normal lines -->
        <div v-else :class="getLineClass(lineItem)" :style="getLineStyle(lineItem)">
          {{ lineItem.text }}
        </div>
      </template>
    </div>
    <div class="terminal-input-line">
      <span class="terminal-prompt" :style="{ color: uniColor }">{{ prompt }}</span>
      <input
        ref="inputRef"
        v-model="currentInput"
        @keydown.enter="submitCommand"
        @keydown.up.prevent="historyUp"
        @keydown.down.prevent="historyDown"
        @keydown.tab="handleTab"
        type="text"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
    </div>
  </div>
</template>
