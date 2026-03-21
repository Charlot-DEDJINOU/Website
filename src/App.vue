<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TerminalView from './components/TerminalView.vue'
import { Analytics } from "@vercel/analytics/vue"

AOS.init()

const store = useStore()
const terminalMode = computed(() => store.state.terminalMode)
</script>

<template>
  <Analytics />
  <TerminalView v-if="terminalMode" />
  <RouterView v-else />
</template>
