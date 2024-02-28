import pdfPath from '../data/Charlot_DEDJINOU_CV.pdf'

export function downloadCV() {
  const link = document.createElement('a')
  link.download = 'Charlot_DEDJINOU_CV.pdf'
  link.href = pdfPath

  link.click()
}

export function viewCV() {
  window.open(pdfPath, '_blank')
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
