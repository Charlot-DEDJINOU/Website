import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

import './assets/main.css'
import './scss/styles.scss'
// eslint-disable-next-line no-unused-vars
import * as bootstrap from 'bootstrap'

import 'vue3-carousel-3d/dist/index.css'

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

const app = createApp(App)
app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
