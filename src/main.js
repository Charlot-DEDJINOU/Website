/* eslint-disable no-unused-vars */
import './assets/main.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

// Importez vos fichiers de messages pour chaque langue
import frMessages from './translate/fr.json'
import enMessages from './translate/en.json'

const i18n = createI18n({
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