/**
 * Terminal command parser and executor.
 */

import {
  resolvePath,
  getPathString,
  listDirectory,
  readFile,
  getProjectBySlug,
  walkTree
} from './filesystem.js'

import {
  formatAbout,
  formatContact,
  formatProject,
  formatSkills,
  formatService,
  formatAward,
  formatEducation,
  formatExperience,
  formatCertifications,
  formatLs,
  formatHelp,
  formatWhoami
} from './formatters.js'

// ── color map ────────────────────────────────────────────────────────
const COLOR_MAP = {
  green: '#16c953',
  red: '#8b0000',
  purple: '#800080',
  olive: '#808000',
  blue: '#005fb2',
  pink: '#ff1493',
  orange: '#ff4500'
}

// ── quick-open link aliases ──────────────────────────────────────────
const LINK_ALIASES = {
  github: 'https://github.com/Charlot-DEDJINOU',
  linkedin: 'https://www.linkedin.com/in/charlot-dedjinou',
  portfolio: 'https://charlotdedjinou.com',
  cv: null // handled specially per locale
}

// ── helpers ──────────────────────────────────────────────────────────
function line(text, type = 'normal') {
  return { text, type }
}

function errorLine(text) {
  return { text, type: 'error' }
}

function successLine(text) {
  return { text, type: 'success' }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// ── format file content by type ──────────────────────────────────────
function formatFileContent(data) {
  switch (data.type) {
    case 'about':
      return formatAbout(data)
    case 'contact':
      return formatContact(data)
    case 'project':
      return formatProject(data)
    case 'skills':
      return formatSkills(data)
    case 'service':
      return formatService(data)
    case 'award':
      return formatAward(data)
    case 'education':
      return formatEducation(data)
    case 'experience':
      return formatExperience(data)
    case 'certifications':
      return formatCertifications(data)
    default:
      return [line(JSON.stringify(data, null, 2))]
  }
}

// ── main command executor ────────────────────────────────────────────
export function executeCommand(input, ctx) {
  const trimmed = input.trim()
  if (!trimmed) return { lines: [], action: null }

  const parts = trimmed.split(/\s+/)
  const cmd = parts[0].toLowerCase()
  const args = parts.slice(1)

  const commands = {
    ls: cmdLs,
    cd: cmdCd,
    pwd: cmdPwd,
    cat: cmdCat,
    file: cmdFile,
    grep: cmdGrep,
    find: cmdFind,
    whoami: cmdWhoami,
    date: cmdDate,
    echo: cmdEcho,
    quote: cmdQuote,
    history: cmdHistory,
    clear: cmdClear,
    help: cmdHelp,
    open: cmdOpen,
    download: cmdDownload,
    theme: cmdTheme,
    color: cmdColor,
    lang: cmdLang,
    exit: cmdExit
  }

  const handler = commands[cmd]
  if (!handler) {
    return {
      lines: [errorLine(`bash: ${escapeHtml(cmd)}: command not found`)],
      action: null
    }
  }

  return handler(args, ctx)
}

// ── commands ─────────────────────────────────────────────────────────

function cmdLs(args, ctx) {
  const target = args[0] || '.'
  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, target)

  if (!result) {
    return { lines: [errorLine(`ls: cannot access '${escapeHtml(target)}': No such file or directory`)], action: null }
  }

  if (result.node.type === 'file') {
    return { lines: [line(result.node.name)], action: null }
  }

  const entries = listDirectory(result.node)
  return { lines: formatLs(entries), action: null }
}

function cmdCd(args, ctx) {
  const target = args[0] || '~'

  if (target === '-') {
    if (ctx.fs.previousPath) {
      const temp = [...ctx.fs.currentPath]
      ctx.fs.currentPath.length = 0
      ctx.fs.previousPath.forEach((s) => ctx.fs.currentPath.push(s))
      ctx.fs.previousPath = temp
    }
    return { lines: [], action: null }
  }

  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, target)

  if (!result) {
    return { lines: [errorLine(`cd: ${escapeHtml(target)}: No such file or directory`)], action: null }
  }
  if (result.node.type !== 'dir') {
    return { lines: [errorLine(`cd: ${escapeHtml(target)}: Not a directory`)], action: null }
  }

  ctx.fs.previousPath = [...ctx.fs.currentPath]
  ctx.fs.currentPath.length = 0
  result.path.forEach((s) => ctx.fs.currentPath.push(s))

  return { lines: [], action: null }
}

function cmdPwd(args, ctx) {
  return { lines: [line(getPathString(ctx.fs.currentPath))], action: null }
}

function cmdCat(args, ctx) {
  if (args.length === 0) {
    return { lines: [errorLine('cat: missing operand')], action: null }
  }

  const target = args[0]
  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, target)

  if (!result) {
    return { lines: [errorLine(`cat: ${escapeHtml(target)}: No such file or directory`)], action: null }
  }
  if (result.node.type === 'dir') {
    return { lines: [errorLine(`cat: ${escapeHtml(target)}: Is a directory`)], action: null }
  }

  const data = readFile(result.node)
  return { lines: formatFileContent(data), action: null }
}

function cmdFile(args, ctx) {
  if (args.length === 0) {
    return { lines: [errorLine('file: missing operand')], action: null }
  }

  const target = args[0]
  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, target)

  if (!result) {
    return { lines: [errorLine(`file: cannot stat '${escapeHtml(target)}': No such file or directory`)], action: null }
  }

  if (result.node.type === 'dir') {
    const count = Object.keys(result.node.children).length
    return { lines: [line(`  ${escapeHtml(target)}: directory (${count} entries)`)], action: null }
  }

  const data = readFile(result.node)
  return { lines: [line(`  ${escapeHtml(target)}: ${data.type} file`)], action: null }
}

// ── highlight helper: wraps pattern matches with a marker ────────────
function highlightPattern(text, pattern) {
  const escaped = escapeHtml(text)
  const patternEsc = escapeHtml(pattern)
  // case-insensitive replace, preserving original case
  const regex = new RegExp('(' + patternEsc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi')
  return escaped.replace(regex, '‹HL›$1‹/HL›')
}

// ── grep: search file contents ───────────────────────────────────────
function cmdGrep(args, ctx) {
  if (args.length < 1) {
    return { lines: [errorLine('grep: usage: grep <pattern> [path]')], action: null }
  }

  const pattern = args[0].toLowerCase()
  const searchPath = args[1] || '.'
  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, searchPath)

  if (!result) {
    return { lines: [errorLine(`grep: ${escapeHtml(searchPath)}: No such file or directory`)], action: null }
  }

  const matches = []

  function searchNode(node, path) {
    if (node.type === 'file') {
      try {
        const data = node.content()
        const text = JSON.stringify(data).toLowerCase()
        if (text.includes(pattern)) {
          matches.push({ path, data })
        }
      } catch (e) {
        // skip unreadable files
      }
    } else if (node.type === 'dir') {
      Object.entries(node.children).forEach(([name, child]) => {
        searchNode(child, path + '/' + name)
      })
    }
  }

  searchNode(result.node, searchPath === '.' ? getPathString(ctx.fs.currentPath) : searchPath)

  if (matches.length === 0) {
    return { lines: [{ text: `  No matches found for "${escapeHtml(pattern)}"`, type: 'muted' }], action: null }
  }

  const lines = [
    { text: `  Found ${matches.length} match(es) for "${escapeHtml(pattern)}":`, type: 'accent' },
    line('')
  ]

  matches.forEach((m) => {
    lines.push({ text: `  ${m.path}`, type: 'accent' })
    const data = m.data
    Object.entries(data).forEach(([key, val]) => {
      if (key === 'type') return
      const strVal = Array.isArray(val) ? val.join(', ') : String(val || '')
      if (strVal.toLowerCase().includes(pattern)) {
        const highlighted = highlightPattern(strVal.substring(0, 120), args[0])
        lines.push({ text: `    ${escapeHtml(key)}: ${highlighted}`, type: 'highlight', pattern: args[0] })
      }
    })
    lines.push(line(''))
  })

  return { lines, action: null }
}

// ── find: search file/dir names ──────────────────────────────────────
function cmdFind(args, ctx) {
  if (args.length < 1) {
    return { lines: [errorLine('find: usage: find <name-pattern> [path]')], action: null }
  }

  const pattern = args[0].toLowerCase()
  const searchPath = args[1] || '.'
  const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, searchPath)

  if (!result) {
    return { lines: [errorLine(`find: ${escapeHtml(searchPath)}: No such file or directory`)], action: null }
  }

  const matches = []
  const basePath = searchPath === '.' ? getPathString(ctx.fs.currentPath) : searchPath

  walkTree(result.node, basePath.replace(/\/[^/]*$/, ''), (node, path) => {
    if (node.name.toLowerCase().includes(pattern)) {
      matches.push({ path, type: node.type })
    }
  })

  if (matches.length === 0) {
    return { lines: [{ text: `  No files or directories matching "${escapeHtml(pattern)}"`, type: 'muted' }], action: null }
  }

  const lines = [
    { text: `  Found ${matches.length} result(s):`, type: 'accent' },
    line('')
  ]

  matches.forEach((m) => {
    const display = m.type === 'dir' ? m.path + '/' : m.path
    const highlighted = highlightPattern(display, args[0])
    lines.push({ text: '  ' + highlighted, type: 'highlight', isDir: m.type === 'dir' })
  })
  lines.push(line(''))

  return { lines, action: null }
}

function cmdWhoami() {
  return { lines: formatWhoami(), action: null }
}

function cmdDate() {
  return { lines: [line('  ' + new Date().toString())], action: null }
}

function cmdEcho(args) {
  const text = args.join(' ')
  return { lines: [line(escapeHtml(text))], action: null }
}

function cmdQuote(_args, ctx) {
  const q = ctx.t('quote')
  return {
    lines: [
      line(''),
      { text: `  « ${q} »`, type: 'accent' },
      line('')
    ],
    action: null
  }
}

function cmdHistory(args, ctx) {
  const lines = ctx.history.map((cmd, i) => {
    const num = String(i + 1).padStart(4, ' ')
    return line(`  ${num}  ${escapeHtml(cmd)}`)
  })
  return { lines, action: null }
}

function cmdClear() {
  return { lines: [], action: 'clear' }
}

function cmdHelp(args, ctx) {
  return { lines: formatHelp(ctx.t), action: null }
}

// ── open: projects + quick links ─────────────────────────────────────
function cmdOpen(args, ctx) {
  if (args.length === 0) {
    const lines = [
      errorLine('open: missing argument'),
      line(''),
      { text: '  Usage:', type: 'accent' },
      line('    open <project-slug> --site|--github'),
      line('    open github          Open GitHub profile'),
      line('    open linkedin        Open LinkedIn profile'),
      line('    open portfolio       Open portfolio website'),
      line('    open cv              Open CV in browser')
    ]
    return { lines, action: null }
  }

  const target = args[0].toLowerCase()

  // check quick link aliases
  if (target in LINK_ALIASES) {
    if (target === 'cv') {
      const locale = ctx.i18n.locale.value
      // use viewCV path — return action so TerminalView handles it
      return {
        lines: [successLine(`  Opening CV (${locale}) in browser...`)],
        action: 'view_cv'
      }
    }
    const url = LINK_ALIASES[target]
    ctx.openUrl(url)
    return {
      lines: [successLine(`  Opening ${url} ...`)],
      action: null
    }
  }

  // project slug lookup
  const slug = args[0]
  const flag = args[1] || '--github'
  const project = getProjectBySlug(ctx.fs.root, slug)

  if (!project) {
    return {
      lines: [
        errorLine(`open: '${escapeHtml(slug)}' not found`),
        line(''),
        { text: '  Tip: use "ls projects/" for projects, or "open github|linkedin|portfolio|cv"', type: 'muted' }
      ],
      action: null
    }
  }

  let url = null
  if (flag === '--site' || flag === '-s') {
    url = project.site
    if (!url) {
      return { lines: [errorLine(`open: no live site URL for '${escapeHtml(slug)}'`)], action: null }
    }
  } else if (flag === '--github' || flag === '-g') {
    url = project.github
    if (!url) {
      return { lines: [errorLine(`open: no GitHub URL for '${escapeHtml(slug)}'`)], action: null }
    }
  } else {
    return { lines: [errorLine(`open: unknown flag '${escapeHtml(flag)}'. Use --site or --github`)], action: null }
  }

  ctx.openUrl(url)
  return {
    lines: [successLine(`  Opening ${url} ...`)],
    action: null
  }
}

// ── download: CV download with progress bar ──────────────────────────
function cmdDownload(args, ctx) {
  if (args.length === 0 || args[0].toLowerCase() !== 'cv') {
    return {
      lines: [
        errorLine('download: usage: download cv [en|fr]'),
        line(''),
        { text: '  Downloads your CV as PDF', type: 'muted' }
      ],
      action: null
    }
  }

  const lang = (args[1] || ctx.i18n.locale.value).toLowerCase()
  if (lang !== 'en' && lang !== 'fr') {
    return { lines: [errorLine('download: usage: download cv [en|fr]')], action: null }
  }

  return {
    lines: [line(`  Downloading Charlot_DEDJINOU_CV_${lang.toUpperCase()}.pdf ...`)],
    action: 'download_cv',
    downloadLang: lang
  }
}

function cmdTheme(args, ctx) {
  if (args.length === 0) {
    const current = ctx.store.state.dark ? 'dark' : 'light'
    return { lines: [line(`  Current theme: ${current}`)], action: null }
  }

  const mode = args[0].toLowerCase()
  if (mode !== 'dark' && mode !== 'light') {
    return { lines: [errorLine('theme: usage: theme <dark|light>')], action: null }
  }

  const isDark = ctx.store.state.dark
  if ((mode === 'dark' && !isDark) || (mode === 'light' && isDark)) {
    ctx.store.dispatch('ToggleTheme')
  }

  return {
    lines: [successLine(`  ${ctx.t('terminal_theme_changed', { mode })}`)],
    action: null
  }
}

function cmdColor(args, ctx) {
  if (args.length === 0) {
    return {
      lines: [
        line('  Available colors: ' + Object.keys(COLOR_MAP).join(', ')),
        line('  Current: ' + ctx.store.state.uniColor)
      ],
      action: null
    }
  }

  const name = args[0].toLowerCase()
  const hex = COLOR_MAP[name]
  if (!hex) {
    return {
      lines: [errorLine(`color: unknown color '${escapeHtml(name)}'. Available: ${Object.keys(COLOR_MAP).join(', ')}`)],
      action: null
    }
  }

  ctx.store.dispatch('ToggleUniColor', hex)
  return {
    lines: [successLine(`  ${ctx.t('terminal_color_changed', { color: name })}`)],
    action: null
  }
}

function cmdLang(args, ctx) {
  if (args.length === 0) {
    return { lines: [line(`  Current language: ${ctx.i18n.locale.value}`)], action: null }
  }

  const lang = args[0].toLowerCase()
  if (lang !== 'en' && lang !== 'fr') {
    return { lines: [errorLine('lang: usage: lang <en|fr>')], action: null }
  }

  ctx.i18n.locale.value = lang
  return {
    lines: [successLine(`  ${ctx.t('terminal_lang_changed', { lang })}`)],
    action: 'rebuild_fs'
  }
}

function cmdExit() {
  return { lines: [], action: 'exit' }
}

// ── tab completion ───────────────────────────────────────────────────
export function tabComplete(input, ctx) {
  const trimmed = input.trimStart()
  const parts = trimmed.split(/\s+/)

  // complete commands
  if (parts.length <= 1) {
    const partial = parts[0] || ''
    const cmds = ['ls', 'cd', 'pwd', 'cat', 'file', 'grep', 'find', 'whoami', 'date', 'echo', 'quote', 'history', 'clear', 'help', 'open', 'download', 'theme', 'color', 'lang', 'exit']
    const matches = cmds.filter((c) => c.startsWith(partial))
    if (matches.length === 1) return matches[0] + ' '
    return null
  }

  // complete paths for ls, cd, cat, file, grep, find
  const cmd = parts[0]
  if (['ls', 'cd', 'cat', 'file', 'grep', 'find'].includes(cmd)) {
    // for grep, only complete the second arg (path), not the first (pattern)
    if (cmd === 'grep' && parts.length === 2) return null

    const partial = parts[parts.length - 1]
    const lastSlash = partial.lastIndexOf('/')
    let dirPath, prefix

    if (lastSlash >= 0) {
      dirPath = partial.substring(0, lastSlash) || '/'
      prefix = partial.substring(lastSlash + 1)
    } else {
      dirPath = '.'
      prefix = partial
    }

    const result = resolvePath(ctx.fs.root, ctx.fs.currentPath, dirPath)
    if (!result || result.node.type !== 'dir') return null

    const entries = Object.keys(result.node.children).filter((name) => name.startsWith(prefix))
    if (entries.length === 1) {
      const entry = result.node.children[entries[0]]
      const completion = lastSlash >= 0 ? partial.substring(0, lastSlash + 1) + entries[0] : entries[0]
      const suffix = entry.type === 'dir' ? '/' : ' '
      const before = parts.slice(0, -1).join(' ')
      return before + ' ' + completion + suffix
    }
    return null
  }

  // complete open targets (project slugs + aliases)
  if (cmd === 'open' && parts.length === 2) {
    const partial = parts[1]
    const aliases = Object.keys(LINK_ALIASES).filter((a) => a.startsWith(partial))
    const projectsDir = ctx.fs.root.children['portfolio']?.children['projects']
    const projectSlugs = projectsDir
      ? Object.keys(projectsDir.children).map((name) => name.replace('.txt', '')).filter((name) => name.startsWith(partial))
      : []
    const allMatches = [...aliases, ...projectSlugs]
    if (allMatches.length === 1) {
      return `open ${allMatches[0]} `
    }
    return null
  }

  // complete download
  if (cmd === 'download' && parts.length === 2) {
    const partial = parts[1]
    if ('cv'.startsWith(partial)) return 'download cv '
    return null
  }

  // complete color names
  if (cmd === 'color' && parts.length === 2) {
    const partial = parts[1]
    const colors = ['green', 'red', 'purple', 'olive', 'blue', 'pink', 'orange']
    const matches = colors.filter((c) => c.startsWith(partial))
    if (matches.length === 1) return `color ${matches[0]} `
    return null
  }

  // complete theme
  if (cmd === 'theme' && parts.length === 2) {
    const partial = parts[1]
    const themes = ['dark', 'light']
    const matches = themes.filter((t) => t.startsWith(partial))
    if (matches.length === 1) return `theme ${matches[0]} `
    return null
  }

  // complete lang
  if (cmd === 'lang' && parts.length === 2) {
    const partial = parts[1]
    const langs = ['en', 'fr']
    const matches = langs.filter((l) => l.startsWith(partial))
    if (matches.length === 1) return `lang ${matches[0]} `
    return null
  }

  return null
}
