import pdfPathFr from '../data/Charlot_DEDJINOU_Fr.pdf'
import pdfPathEn from '../data/Charlot_DEDJINOU_En.pdf'

export function downloadCV(locale) {
  const link = document.createElement('a')
  link.download = 'Charlot_DEDJINOU_CV.pdf'
  link.href = locale === 'fr' ? pdfPathFr : pdfPathEn

  link.click()
}

export function viewCV(locale) {
  window.open(locale === 'fr' ? pdfPathFr : pdfPathEn, '_blank')
}

export function toggleMenu(url) {
  const btn = document.getElementsByClassName('btn-close')[0]

  const link = document.createElement('a')
  link.href = url

  btn.click()
  link.click()
}

export function Forward(urlDuSite) {
  if (urlDuSite !== '') {
    window.open(urlDuSite, '_blank')
  }
}

export const scrollBottom = (id) => {
  const endOfPageElement = document.getElementById(id)
  endOfPageElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}
