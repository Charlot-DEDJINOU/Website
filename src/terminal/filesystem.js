/**
 * Virtual filesystem for the terminal mode.
 * Builds a tree from the portfolio's existing data files.
 */

import Projects from '../data/Projects.js'
import Skills from '../data/Skills.js'
import Certifications from '../data/Certifications.js'

// ── helpers ──────────────────────────────────────────────────────────
function slugify(key) {
  return key
    .replace(/_/g, '-')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

function makeFile(name, contentFn) {
  return { name, type: 'file', content: contentFn }
}

function makeDir(name, children) {
  const map = {}
  children.forEach((c) => (map[c.name] = c))
  return { name, type: 'dir', children: map }
}

// ── filesystem builder ───────────────────────────────────────────────
export function buildFilesystem(t) {
  // --- projects ---
  const projects = Projects()
  const projectFiles = projects
    .filter((p) => p.isVisible)
    .map((p) => {
      const slug = slugify(p.title)
      return makeFile(`${slug}.txt`, () => {
        return {
          type: 'project',
          title: t(p.title),
          description: t(p.description),
          skills: p.skills,
          site: p.site || null,
          github: p.github || null,
          category: p.category
        }
      })
    })

  // --- skills ---
  const skillGroups = Skills()
  const skillGroupNames = ['development-and-tools', 'ai-iot-and-languages']
  const skillFiles = skillGroups.map((group, i) =>
    makeFile(`${skillGroupNames[i]}.txt`, () => ({
      type: 'skills',
      title: skillGroupNames[i].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
      items: group.map((s) => ({ title: s.title, percent: parseInt(s.percent) }))
    }))
  )

  // --- services ---
  const serviceKeys = [
    { key: 'web_development', descKey: 'web_development_description' },
    { key: 'mobile_apps', descKey: 'mobile_apps_description' },
    { key: 'api_development', descKey: 'api_development_description' },
    { key: 'data_analysis', descKey: 'data_analysis_description' },
    { key: 'iot_solutions', descKey: 'iot_solutions_description' },
    { key: 'user_interfaces', descKey: 'user_interfaces_description' }
  ]
  const serviceFiles = serviceKeys.map((s) =>
    makeFile(`${slugify(s.key)}.txt`, () => ({
      type: 'service',
      title: t(s.key),
      description: t(s.descKey)
    }))
  )

  // --- awards ---
  const awardPrefixes = [
    'award_hackathonLevelUp',
    'award_hackathonSmartCities',
    'award_hackathonIA',
    'award_maic',
    'award_ewaste',
    'award_yats',
    'award_auf'
  ]
  const awardFiles = awardPrefixes.map((prefix) => {
    const slug = slugify(prefix)
    return makeFile(`${slug}.txt`, () => ({
      type: 'award',
      title: t(`${prefix}_title`),
      organization: t(`${prefix}_organization`),
      theme: t(`${prefix}_theme`),
      date: t(`${prefix}_date`),
      range: t(`${prefix}_range`),
      description: t(`${prefix}_description`)
    }))
  })

  // --- certifications ---
  const certs = Certifications()
  const certFile = makeFile('list.txt', () => ({
    type: 'certifications',
    items: certs.map((c) => ({ id: c.id, name: c.name, tags: c.tags }))
  }))

  // --- education ---
  const eduKeys = [
    {
      slug: 'bachelor-software-engineering',
      titleKey: 'bachelor',
      years: 'Oct 2021 - Oct 2024',
      placeKey: 'ifri',
      skillKeys: ['mention_tb_1615', 'rank_2nd_promotion', 'mastercard_scholar', 'thesis_smart_parking']
    },
    {
      slug: 'high-school-diploma',
      titleKey: 'bachelor_science',
      years: '2014 - 2021',
      placeKey: 'cotonou',
      skillKeys: ['mention_tb_1681', 'rank_1st_promotion', 'top_01_percent']
    }
  ]
  const eduFiles = eduKeys.map((e) =>
    makeFile(`${e.slug}.txt`, () => ({
      type: 'education',
      title: t(e.titleKey),
      years: e.years,
      place: t(e.placeKey),
      highlights: e.skillKeys.map((k) => t(k))
    }))
  )

  // --- experience ---
  const expKeys = [
    {
      slug: 'mobile-developer',
      titleKey: 'developer_mobile',
      years: 'Jul 2025 - Present',
      place: 'Sankofa Shop, France (Remote)',
      skillKeys: ['sankofa_mobile_app', 'sankofa_mobile_first']
    },
    {
      slug: 'cto-fullstack-developer',
      titleKey: 'cto_fullstack',
      years: 'Jan 2023 - Dec 2025',
      place: 'ECOTIC, Abomey-Calavi, Benin',
      skillKeys: ['ecotic_aiot_prototype', 'ecotic_vps_deployment']
    },
    {
      slug: 'intern-frontend-developer',
      titleKey: 'intern_frontend',
      years: 'Apr 2024 - Sep 2024',
      place: 'SPTIC - UAC, Abomey-Calavi, Benin',
      skillKeys: ['sptic_portal', 'sptic_optimization']
    }
  ]
  const expFiles = expKeys.map((e) =>
    makeFile(`${e.slug}.txt`, () => ({
      type: 'experience',
      title: t(e.titleKey),
      years: e.years,
      place: e.place,
      highlights: e.skillKeys.map((k) => t(k))
    }))
  )

  // --- about.txt ---
  const aboutFile = makeFile('about.txt', () => ({
    type: 'about',
    name: 'Charlot DEDJINOU',
    title: t('profil_1'),
    description: t('description'),
    degree: t('licence'),
    city: t('contact_section.city'),
    email: t('contact_section.email'),
    phone: t('contact_section.phone_number'),
    freelance: t('available'),
    website: 'https://charlotdedjinou.com'
  }))

  // --- contact.txt ---
  const contactFile = makeFile('contact.txt', () => ({
    type: 'contact',
    email: t('contact_section.email'),
    phone: t('contact_section.phone_number'),
    city: t('contact_section.city'),
    message: t('contact_section.welcome_message'),
    linkedin: 'https://www.linkedin.com/in/charlot-dedjinou',
    github: 'https://github.com/Charlot-DEDJINOU'
  }))

  // --- root ---
  const root = makeDir('~', [
    makeDir('portfolio', [
      aboutFile,
      contactFile,
      makeDir('projects', projectFiles),
      makeDir('skills', skillFiles),
      makeDir('services', serviceFiles),
      makeDir('awards', awardFiles),
      makeDir('certifications', [certFile]),
      makeDir('education', eduFiles),
      makeDir('experience', expFiles)
    ])
  ])

  return root
}

// ── path resolution ──────────────────────────────────────────────────
export function resolvePath(root, currentPath, inputPath) {
  let segments
  if (inputPath === '~' || inputPath.startsWith('~/')) {
    segments = ['~', ...inputPath.slice(2).split('/').filter(Boolean)]
  } else if (inputPath.startsWith('/')) {
    segments = ['~', ...inputPath.slice(1).split('/').filter(Boolean)]
  } else {
    segments = [...currentPath, ...inputPath.split('/').filter(Boolean)]
  }

  // resolve . and ..
  const resolved = []
  for (const seg of segments) {
    if (seg === '.') continue
    if (seg === '..') {
      if (resolved.length > 1) resolved.pop()
      continue
    }
    resolved.push(seg)
  }

  // walk tree
  let node = root
  for (let i = 1; i < resolved.length; i++) {
    if (node.type !== 'dir' || !node.children[resolved[i]]) {
      return null
    }
    node = node.children[resolved[i]]
  }

  return { node, path: resolved }
}

export function getPathString(pathArray) {
  if (pathArray.length <= 1) return '~'
  return pathArray.join('/')
}

export function listDirectory(node) {
  if (node.type !== 'dir') return null
  return Object.values(node.children)
    .map((child) => ({ name: child.name, type: child.type }))
    .sort((a, b) => {
      if (a.type !== b.type) return a.type === 'dir' ? -1 : 1
      return a.name.localeCompare(b.name)
    })
}

export function readFile(node) {
  if (node.type !== 'file') return null
  return node.content()
}

export function walkTree(node, currentPath, callback) {
  if (node.type === 'file') {
    callback(node, currentPath + '/' + node.name)
  } else if (node.type === 'dir') {
    const dirPath = currentPath ? currentPath + '/' + node.name : node.name
    callback(node, dirPath)
    Object.values(node.children).forEach((child) => {
      walkTree(child, dirPath, callback)
    })
  }
}

export function getProjectBySlug(root, slug) {
  const projectsDir = root.children['portfolio']?.children['projects']
  if (!projectsDir) return null

  const fileName = slug.endsWith('.txt') ? slug : `${slug}.txt`
  const fileNode = projectsDir.children[fileName]
  if (!fileNode) return null
  return fileNode.content()
}
