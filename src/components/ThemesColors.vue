<script>
import Lune from './icons/IconLune.vue'
import Solar from './icons/IconSolar.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'ThemesColors',
  components: {
    Lune,
    Solar
  },

  setup() {
    const store = useStore()
    
    const isDark = ref(computed(() => store.state.mode))
    const theme = ref(computed(() => store.state.theme))

    const toggleColor = (color) => {
      store.dispatch('ToggleUniColor', color)
    }

    const toggleTheme = () => {
      store.dispatch('ToggleTheme')
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
    <span class="color2 m-2" @click="toggleColor('#8B0000')"></span>
    <span class="color3 m-2" @click="toggleColor('#800080')"></span>
    <span class="color4 m-2" @click="toggleColor(' #808000')"></span>
    <span class="color5 m-2" @click="toggleColor('#005FB2')"></span>
    <span class="color6 m-2" @click="toggleColor('#FF1493')"></span>
    <span class="color7 m-2" @click="toggleColor('#FF4500')"></span>
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
  background-color: #8b0000;
}
.color .color3 {
  background-color: #800080;
}
.color .color4 {
  background-color: #808000;
}
.color .color5 {
  background-color: #005fb2;
}
.color .color6 {
  background-color: #ff1493;
}
.color .color7 {
  background-color: #ff4500;
}
</style>
