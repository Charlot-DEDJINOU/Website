<script>
import Lune from './icons/IconLune.vue'
import Solar from './icons/IconSolar.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export default {
  name: 'ThemesColors',
  components: {
    Lune,
    Solar
  },

  setup() {
    const store = useStore()
    const isDark = useDark({
      selector: 'body',
      attribute: 'theme',
      valueDark: 'custom-dark',
      valueLight: 'custom-light'
    })
    const toggleDark = useToggle(isDark)

    const theme = ref(computed(() => store.state.theme))

    const toggleColor = (color) => {
      store.dispatch('ToggleUniColor', color)
    }

    const toggleTheme = () => {
      toggleDark()
      store.dispatch('ToggleTheme', isDark.value)
    }

    return {
      theme,
      toggleColor,
      toggleTheme,
      isDark
    }
  }
}
</script>

<template>
  <div class="color">
    <select
      v-model="$i18n.locale"
      :style="{ backgroundColor: theme.colorprimary, color: theme.colorsecondary }"
      class="form-select m-2 w-100"
    >
      <option value="en">{{ $t('en') }}</option>
      <option value="fr">{{ $t('fr') }}</option>
    </select>
    <span class="color1 m-2" @click="toggleColor('#16c953')"></span>
    <span class="color2 m-2" @click="toggleColor('#A52A2A')"></span>
    <span class="color3 m-2" @click="toggleColor('#9E0064')"></span>
    <span class="color4 m-2" @click="toggleColor('#CCCC00')"></span>
    <span class="color5 m-2" @click="toggleColor('#084EFF')"></span>
    <span class="color6 m-2" @click="toggleColor('#FFC0CB')"></span>
    <span class="color7 m-2" @click="toggleColor('#905B16')"></span>
    <span @click="toggleTheme()" class="m-2" :style="{ color: theme.colorprimary }">
      <Lune v-if="isDark" />
      <Solar v-else />
    </span>
  </div>
</template>

<style>
.color {
  width: 200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.color span {
  display: inline-block;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.color select {
  font-size: 14px;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
.color .color1 {
  background-color: #16c953;
}
.color .color2 {
  background-color: #a52a2a;
}
.color .color3 {
  background-color: #9e0064;
}
.color .color4 {
  background-color: #cccc00;
}
.color .color5 {
  background-color: #084eff;
}
.color .color6 {
  background-color: #ffc0cb;
}
.color .color7 {
  background-color: #905b16;
}
</style>
