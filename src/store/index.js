import { createStore } from 'vuex'
import backgroundBlack from '../assets/backgroundBack.png'
import backgroundWhite from '../assets/backgroundWhite.png'

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
    dark: true
  },
  getters: {},
  mutations: {
    setUniColor(state, color) {
      state.uniColor = color
    },
    setTheme(state, theme) {
      state.theme = theme
    },
    setMode(state, mode) {
      state.dark = mode
    }
  },
  actions: {
    ToggleUniColor({ commit }, color) {
      commit('setUniColor', color)
    },
    ToggleTheme({ commit, state }) {
      const body = document.getElementsByTagName('body')[0]
      if (state.dark === true) {
        body.classList.remove('custom-dark')
        body.classList.add('custom-light')
        commit('setTheme', light)
      } else {
        body.classList.remove('custom-light')
        body.classList.add('custom-dark')
        commit('setTheme', dark)
      }
      commit('setMode', !state.dark)
    }
  },
  modules: {}
})
