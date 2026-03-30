/**
 * Terminal output formatters.
 * All functions return arrays of { text, type } line objects.
 * All boxes use a shared inner width W for consistent ║ alignment.
 */

const W = 64 // inner width for all bordered boxes

function esc(str) {
  if (!str) return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ── generic helpers ──────────────────────────────────────────────────
function line(text, type = 'normal') {
  return { text, type }
}

function accentLine(text) {
  return { text, type: 'accent' }
}

function mutedLine(text) {
  return { text, type: 'muted' }
}

function asciiLine(text) {
  return { text, type: 'ascii' }
}

function blankLine() {
  return line('')
}

// ── box drawing helpers (all use W) ──────────────────────────────────
function bTop() {
  return asciiLine('  ╔' + '═'.repeat(W) + '╗')
}
function bMid() {
  return asciiLine('  ╠' + '═'.repeat(W) + '╣')
}
function bBot() {
  return asciiLine('  ╚' + '═'.repeat(W) + '╝')
}
function bEmpty() {
  return asciiLine('  ║' + ' '.repeat(W) + '║')
}
function wrapText(text, maxLen) {
  if (text.length <= maxLen) return [text]
  const lines = []
  let remaining = text
  while (remaining.length > maxLen) {
    // try to break at a space
    let breakAt = remaining.lastIndexOf(' ', maxLen)
    if (breakAt <= 0) breakAt = maxLen
    lines.push(remaining.substring(0, breakAt))
    remaining = remaining.substring(breakAt).trimStart()
  }
  if (remaining) lines.push(remaining)
  return lines
}

function bText(text) {
  const chunks = wrapText(text, W - 2)
  if (chunks.length === 1) {
    return asciiLine('  ║  ' + padRight(chunks[0], W - 2) + '║')
  }
  return chunks.map((c) => asciiLine('  ║  ' + padRight(c, W - 2) + '║'))
}

function bAccent(text) {
  const chunks = wrapText(text, W - 2)
  if (chunks.length === 1) {
    return { text: '  ║  ' + padRight(chunks[0], W - 2) + '║', type: 'accent' }
  }
  return chunks.map((c) => ({ text: '  ║  ' + padRight(c, W - 2) + '║', type: 'accent' }))
}
function hLine() {
  return asciiLine('  ' + '─'.repeat(W + 2))
}

// ── progress bar ─────────────────────────────────────────────────────
function progressBar(percent, width = 20) {
  const filled = Math.round((percent / 100) * width)
  const empty = width - filled
  return '█'.repeat(filled) + '░'.repeat(empty)
}

// ── format: about ────────────────────────────────────────────────────
export function formatAbout(data) {
  return [
    bTop(),
    bEmpty(),
    bAccent(padCenter(esc(data.name), W - 4)),
    bText(padCenter(esc(data.title), W - 4)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText(esc(data.description)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Degree:     ' + esc(data.degree)),
    bText('City:       ' + esc(data.city)),
    bText('Email:      ' + esc(data.email)),
    bText('Phone:      ' + esc(data.phone)),
    bText('Website:    ' + esc(data.website)),
    bText('Freelance:  ' + esc(data.freelance)),
    bEmpty(),
    bBot()
  ].flat()
}

// ── format: contact ──────────────────────────────────────────────────
export function formatContact(data) {
  return [
    bTop(),
    bEmpty(),
    bAccent(padCenter('Contact Information', W - 4)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText(esc(data.message)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Email:      ' + esc(data.email)),
    bText('Phone:      ' + esc(data.phone)),
    bText('City:       ' + esc(data.city)),
    bEmpty(),
    bAccent('─── Socials ───'),
    bEmpty(),
    bText('LinkedIn:   ' + esc(data.linkedin)),
    bText('GitHub:     ' + esc(data.github)),
    bEmpty(),
    bBot()
  ].flat()
}

// ── format: project ──────────────────────────────────────────────────
export function formatProject(data) {
  const slug = slugFromTitle(data.title)
  const tipText = 'Tip: open ' + slug + ' --site | open ' + slug + ' --github'
  const lines = [
    bTop(),
    bEmpty(),
    bAccent('Project: ' + esc(data.title)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText(esc(data.description)),
    bEmpty(),
    bAccent('Skills: ' + data.skills.map(esc).join(', ')),
    bEmpty()
  ]
  if (data.site) {
    lines.push(bText('Live:     ' + esc(data.site)))
  }
  if (data.github) {
    lines.push(bText('GitHub:   ' + esc(data.github)))
  }
  lines.push(bEmpty())
  // tip line also wrapped
  wrapText(tipText, W - 2).forEach((chunk) => {
    lines.push({ text: '  ║  ' + padRight(chunk, W - 2) + '║', type: 'muted' })
  })
  lines.push(bBot())
  return lines.flat()
}

// ── format: skills ───────────────────────────────────────────────────
export function formatSkills(data) {
  const lines = [
    bTop(),
    bEmpty(),
    bAccent(esc(data.title)),
    bEmpty(),
    bMid(),
    bEmpty()
  ]
  data.items.forEach((skill) => {
    const bar = progressBar(skill.percent)
    lines.push(bAccent(esc(skill.title)))
    lines.push(bText(bar + '  ' + skill.percent + '%'))
    lines.push(bEmpty())
  })
  lines.push(bBot())
  return lines.flat()
}

// ── format: service ──────────────────────────────────────────────────
export function formatService(data) {
  return [
    hLine(),
    blankLine(),
    accentLine('  ' + esc(data.title)),
    blankLine(),
    line('  ' + esc(data.description)),
    blankLine(),
    hLine()
  ]
}

// ── format: award ────────────────────────────────────────────────────
export function formatAward(data) {
  return [
    bTop(),
    bEmpty(),
    bAccent('🏆 ' + esc(data.title)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Organization: ' + esc(data.organization)),
    bText('Theme:        ' + esc(data.theme)),
    bText('Date:         ' + esc(data.date)),
    bAccent('Rank:         ' + esc(data.range)),
    bEmpty(),
    bText(esc(data.description)),
    bEmpty(),
    bBot()
  ].flat()
}

// ── format: education ────────────────────────────────────────────────
export function formatEducation(data) {
  const lines = [
    bTop(),
    bEmpty(),
    bAccent('🎓 ' + esc(data.title)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Period:   ' + esc(data.years)),
    bText('Place:    ' + esc(data.place)),
    bEmpty(),
    bAccent('Highlights:')
  ]
  data.highlights.forEach((h) => {
    lines.push(bText('  • ' + esc(h)))
  })
  lines.push(bEmpty())
  lines.push(bBot())
  return lines.flat()
}

// ── format: experience ───────────────────────────────────────────────
export function formatExperience(data) {
  const lines = [
    bTop(),
    bEmpty(),
    bAccent('💼 ' + esc(data.title)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Period:   ' + esc(data.years)),
    bText('Company:  ' + esc(data.place)),
    bEmpty(),
    bAccent('Key Achievements:')
  ]
  data.highlights.forEach((h) => {
    lines.push(bText('  • ' + esc(h)))
  })
  lines.push(bEmpty())
  lines.push(bBot())
  return lines.flat()
}

// ── format: certifications ───────────────────────────────────────────
export function formatCertifications(data) {
  const lines = [
    bTop(),
    bEmpty(),
    bAccent('Certifications (' + data.items.length + ')'),
    bEmpty(),
    bMid(),
    bEmpty()
  ]
  data.items.forEach((cert, i) => {
    const num = String(i + 1).padStart(2, '0')
    lines.push(bText('[' + num + ']  ' + esc(cert.name)))
  })
  lines.push(bEmpty())
  lines.push(bBot())
  return lines.flat()
}

// ── format: ls output ────────────────────────────────────────────────
export function formatLs(entries) {
  const lines = []
  const dirs = entries.filter((e) => e.type === 'dir')
  const files = entries.filter((e) => e.type === 'file')

  const all = [...dirs.map((d) => ({ display: d.name + '/', type: 'dir' })), ...files.map((f) => ({ display: f.name, type: 'file' }))]

  const colWidth = Math.max(...all.map((a) => a.display.length)) + 4
  const termWidth = 80
  const cols = Math.max(1, Math.floor(termWidth / colWidth))

  for (let i = 0; i < all.length; i += cols) {
    const row = all.slice(i, i + cols)
    const text = row.map((item) => padRight(item.display, colWidth)).join('')
    if (row.length === 1) {
      lines.push(row[0].type === 'dir' ? accentLine(text) : line(text))
    } else {
      lines.push({ text, type: 'ls', items: row.map((r) => ({ ...r, width: colWidth })) })
    }
  }

  return lines
}

// ── format: help ─────────────────────────────────────────────────────
export function formatHelp(t) {
  return [
    blankLine(),
    bTop(),
    bEmpty(),
    bAccent(padCenter('Available Commands', W - 4)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bAccent('Navigation:'),
    bText('  ls [path]           ' + t('terminal_help_ls')),
    bText('  cd <path>           ' + t('terminal_help_cd')),
    bText('  pwd                 ' + t('terminal_help_pwd')),
    bText('  cat <file>          ' + t('terminal_help_cat')),
    bText('  file <path>         ' + t('terminal_help_file')),
    bText('  grep <pattern> [path]    ' + t('terminal_help_grep')),
    bText('  find <name> [path]       ' + t('terminal_help_find')),
    bEmpty(),
    bAccent('Information:'),
    bText('  whoami              ' + t('terminal_help_whoami')),
    bText('  date                ' + t('terminal_help_date')),
    bText('  echo <text>         ' + t('terminal_help_echo')),
    bText('  history             ' + t('terminal_help_history')),
    bText('  quote               ' + t('terminal_help_quote')),
    bText('  clear               ' + t('terminal_help_clear')),
    bText('  help                ' + t('terminal_help_help')),
    bEmpty(),
    bAccent('Portfolio:'),
    bText('  open <project> --site     ' + t('terminal_help_open_site')),
    bText('  open <project> --github   ' + t('terminal_help_open_github')),
    bText('  open github|linkedin|portfolio|cv'),
    bText('  download cv [en|fr]       ' + t('terminal_help_download')),
    bEmpty(),
    bAccent('Settings:'),
    bText('  theme <dark|light>        ' + t('terminal_help_theme')),
    bText('  color <name>              ' + t('terminal_help_color')),
    bText('  lang <en|fr>              ' + t('terminal_help_lang')),
    bEmpty(),
    bAccent('Session:'),
    bText('  exit                ' + t('terminal_help_exit')),
    bEmpty(),
    { text: '  ║  Colors: green, red, purple, olive, blue, pink, orange' + ' '.repeat(Math.max(0, W - 2 - 'Colors: green, red, purple, olive, blue, pink, orange'.length)) + '║', type: 'muted' },
    bEmpty(),
    bBot(),
    blankLine()
  ].flat()
}

// ── format: welcome banner ───────────────────────────────────────────
export function formatWelcome(t) {
  return [
    blankLine(),
    blankLine(),
    asciiLine('     ██████╗██╗  ██╗ █████╗ ██████╗ ██╗      ██████╗ ████████╗'),
    asciiLine('    ██╔════╝██║  ██║██╔══██╗██╔══██╗██║     ██╔═══██╗╚══██╔══╝'),
    asciiLine('    ██║     ███████║███████║██████╔╝██║     ██║   ██║   ██║   '),
    asciiLine('    ██║     ██╔══██║██╔══██║██╔══██╗██║     ██║   ██║   ██║   '),
    asciiLine('    ╚██████╗██║  ██║██║  ██║██║  ██║███████╗╚██████╔╝   ██║   '),
    asciiLine('     ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝    ╚═╝   '),
    blankLine(),
    bTop(),
    bEmpty(),
    bAccent(padCenter('Welcome to my Portfolio Terminal', W - 4)),
    bEmpty(),
    bText(padCenter('Software Engineer  |  AIoT Enthusiast  |  Full-Stack Dev', W - 4)),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText('Name:       Charlot DEDJINOU'),
    bText('Portfolio:  https://charlotdedjinou.com'),
    bText('GitHub:     https://github.com/Charlot-DEDJINOU'),
    bText('Email:      dedjinoucharlotjoel@gmail.com'),
    bText('Location:   Abomey-Calavi, Benin'),
    bEmpty(),
    bMid(),
    bEmpty(),
    bText(t('terminal_welcome_hint')),
    bText(t('terminal_exit_hint')),
    bEmpty(),
    bBot(),
    blankLine(),
    blankLine()
  ].flat()
}

// ── format: whoami ───────────────────────────────────────────────────
export function formatWhoami() {
  return [
    blankLine(),
    asciiLine('    _____ _                _       _   '),
    asciiLine('   / ____| |              | |     | |  '),
    asciiLine('  | |    | |__   __ _ _ __| | ___ | |_ '),
    asciiLine("  | |    | '_ \\ / _` | '__| |/ _ \\| __|"),
    asciiLine('  | |____| | | | (_| | |  | | (_) | |_ '),
    asciiLine('   \\_____|_| |_|\\__,_|_|  |_|\\___/ \\__|'),
    blankLine(),
    accentLine('  Charlot DEDJINOU'),
    line('  Software Engineer | AIoT Enthusiast'),
    line('  Abomey-Calavi, Benin'),
    blankLine()
  ]
}

// ── string utilities ─────────────────────────────────────────────────
function padRight(str, len) {
  if (str.length >= len) return str
  return str + ' '.repeat(len - str.length)
}

function padCenter(str, len) {
  if (str.length >= len) return str
  const left = Math.floor((len - str.length) / 2)
  const right = len - str.length - left
  return ' '.repeat(left) + str + ' '.repeat(right)
}

function slugFromTitle(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}
