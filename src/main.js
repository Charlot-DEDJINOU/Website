/* eslint-disable no-unused-vars */
import './assets/main.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

import frMessages from './translate/fr.json'
import enMessages from './translate/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: frMessages,
    en: enMessages
  }
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
)

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
