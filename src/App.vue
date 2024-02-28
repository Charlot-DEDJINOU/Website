<script setup>
import { RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
</script>

<template>
  <RouterView />
</template>
