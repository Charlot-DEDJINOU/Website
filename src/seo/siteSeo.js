const siteUrl = 'https://charlotdedjinou.com'
const socialImage = `${siteUrl}/image-og.png`

const seoByLocale = {
  en: {
    title: 'Charlot DEDJINOU | Software Engineer Portfolio',
    description:
      'Charlot DEDJINOU is a software engineer building full-stack, AI, IoT, mobile, and cybersecurity projects. Explore projects, awards, certifications, and contact details.',
    locale: 'en_US'
  },
  fr: {
    title: 'Charlot DEDJINOU | Portfolio Ingénieur Logiciel',
    description:
      "Charlot DEDJINOU est un ingénieur logiciel spécialisé en full-stack, IA, IoT, mobile et cybersécurité. Découvrez ses projets, distinctions, certifications et contacts.",
    locale: 'fr_FR'
  }
}

function ensureMeta(attribute, key) {
  const selector = `meta[${attribute}="${key}"]`
  let tag = document.head.querySelector(selector)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureLink(rel) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureJsonLd(id) {
  let tag = document.head.querySelector(`script[data-seo-id="${id}"]`)

  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.setAttribute('data-seo-id', id)
    document.head.appendChild(tag)
  }

  return tag
}

function getSeo(locale) {
  return seoByLocale[locale] || seoByLocale.en
}

export function applySeo({ locale = 'en', path = '/' } = {}) {
  if (typeof document === 'undefined') {
    return
  }

  const seo = getSeo(locale)
  const sanitizedPath = path.split('#')[0].split('?')[0] || '/'
  const canonicalPath = sanitizedPath === '/' ? '/' : sanitizedPath.replace(/\/+$/, '')
  const canonicalUrl = `${siteUrl}${canonicalPath}`

  document.documentElement.lang = locale
  document.title = seo.title

  ensureMeta('name', 'description').setAttribute('content', seo.description)
  ensureMeta('name', 'robots').setAttribute(
    'content',
    'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'
  )
  ensureMeta('property', 'og:type').setAttribute('content', 'website')
  ensureMeta('property', 'og:site_name').setAttribute('content', 'Charlot DEDJINOU')
  ensureMeta('property', 'og:title').setAttribute('content', seo.title)
  ensureMeta('property', 'og:description').setAttribute('content', seo.description)
  ensureMeta('property', 'og:url').setAttribute('content', canonicalUrl)
  ensureMeta('property', 'og:locale').setAttribute('content', seo.locale)
  ensureMeta('property', 'og:image').setAttribute('content', socialImage)
  ensureMeta('property', 'og:image:alt').setAttribute(
    'content',
    'Charlot DEDJINOU portfolio preview'
  )
  ensureMeta('name', 'twitter:card').setAttribute('content', 'summary_large_image')
  ensureMeta('name', 'twitter:title').setAttribute('content', seo.title)
  ensureMeta('name', 'twitter:description').setAttribute('content', seo.description)
  ensureMeta('name', 'twitter:image').setAttribute('content', socialImage)
  ensureMeta('name', 'twitter:image:alt').setAttribute(
    'content',
    'Charlot DEDJINOU portfolio preview'
  )
  ensureMeta('name', 'twitter:creator').setAttribute('content', '@CharlotDEDJINOU')
  ensureMeta('name', 'twitter:site').setAttribute('content', '@CharlotDEDJINOU')

  ensureLink('canonical').setAttribute('href', canonicalUrl)

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Charlot DEDJINOU',
    url: canonicalUrl,
    image: socialImage,
    jobTitle: locale === 'fr' ? 'Ingénieur Logiciel' : 'Software Engineer',
    description: seo.description,
    email: 'mailto:dedjinoucharlotjoel@gmail.com',
    telephone: '+22959105267',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Abomey-Calavi',
      addressCountry: 'BJ'
    },
    sameAs: [
      'https://github.com/Charlot-DEDJINOU',
      'https://www.linkedin.com/in/charlot-dedjinou',
      'https://wa.me/22959105267'
    ],
    knowsAbout: [
      'Full-stack development',
      'Vue.js',
      'React',
      'FastAPI',
      'Artificial Intelligence',
      'Internet of Things',
      'Cybersecurity',
      'Mobile development'
    ]
  }

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Charlot DEDJINOU',
    url: siteUrl,
    inLanguage: locale,
    description: seo.description
  }

  const webpageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: seo.title,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      url: siteUrl,
      name: 'Charlot DEDJINOU'
    },
    about: {
      '@type': 'Person',
      name: 'Charlot DEDJINOU'
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: socialImage
    },
    description: seo.description,
    inLanguage: locale
  }

  ensureJsonLd('person').textContent = JSON.stringify(personJsonLd)
  ensureJsonLd('website').textContent = JSON.stringify(websiteJsonLd)
  ensureJsonLd('webpage').textContent = JSON.stringify(webpageJsonLd)
}

export { siteUrl }
