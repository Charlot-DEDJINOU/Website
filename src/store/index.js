import { createStore } from 'vuex'

const dark = {
  background: {
    primary: 'rgba(0,0,0,0.61)',
    secondary: 'rgba(0,0,0,0.39)',
    tertiaire: 'rgba(0,0,0,0.25)',
    drawer: '#3e3e3e'
  },
  colorprimary: 'white',
  colorsecondary: 'black'
}

const light = {
  background: {
    primary: 'rgba(255,255,255,0.61)',
    secondary: 'white',
    tertiaire: 'rgba(255,255,255,0.20)',
    drawer: '#f5f5f5'
  },
  colorprimary: 'black',
  colorsecondary: 'white'
}

export default createStore({
  state: {
    theme: dark,
    uniColor: '#16C953'
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
    ToggleTheme({ commit }, isDark) {
      const theme = isDark ? dark : light
      commit('setTheme', theme)
    }
  },
  modules: {}
})
