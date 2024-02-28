import { createStore } from 'vuex'
import backgroundBlack from '../assets/backgroundBack.png'
import backgroundWhite from '../assets/backgroundWhite.png'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'theme',
  valueDark: 'custom-dark',
  valueLight: 'custom-light'
})

const toggleDark = useToggle(isDark)

const dark = {
  background: {
    primary: 'rgba(0,0,0,0.61)',
    secondary: 'rgba(0,0,0,0.39)',
    tertiaire: 'rgba(0,0,0,0.25)',
    drawer: '#3e3e3e',
    image: backgroundBlack
  },
  colorprimary: 'white',
  colorsecondary: 'black'
}

const light = {
  background: {
    primary: 'rgba(255,255,255,0.61)',
    secondary: 'white',
    tertiaire: 'rgba(0,0,0,0.10)',
    drawer: '#f5f5f5',
    image: backgroundWhite
  },
  colorprimary: 'black',
  colorsecondary: 'white'
}

export default createStore({
  state: {
    theme: dark,
    uniColor: '#16C953',
    mode : isDark.value
  },
  getters: {},
  mutations: {
    setUniColor(state, color) {
      state.uniColor = color
    },
    setTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    ToggleUniColor({ commit }, color) {
      commit('setUniColor', color)
    },
    ToggleTheme({ commit }) {
      toggleDark()
      const theme = isDark.value ? dark : light
      commit('setTheme', theme)
    }
  },
  modules: {}
})
