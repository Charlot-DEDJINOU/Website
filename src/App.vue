<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <p>{{ $t('hello') }}</p>
  <div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
  <RouterView />
</template>

<style scoped>
</style>
