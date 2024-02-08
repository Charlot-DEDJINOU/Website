/* eslint-disable no-unused-vars */
import './assets/main.css'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App).use(store)

app.use(router)

app.mount('#app')
