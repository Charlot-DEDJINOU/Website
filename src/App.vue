<script setup>
import { RouterView } from 'vue-router'
import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TerminalView from './components/TerminalView.vue'
import { Analytics } from '@vercel/analytics/vue'
import { applySeo } from './seo/siteSeo'

const store = useStore()
const route = useRoute()
const { locale } = useI18n()
const terminalMode = computed(() => store.state.terminalMode)

onMounted(() => {
  AOS.init()
})

watch(
  [() => route.fullPath, locale, terminalMode],
  ([fullPath, currentLocale, isTerminalMode]) => {
    if (!isTerminalMode) {
      applySeo({ locale: currentLocale, path: fullPath })
    }
  },
  { immediate: true }
)
</script>

<template>
  <Analytics />
  <TerminalView v-if="terminalMode" />
  <RouterView v-else />
</template>
