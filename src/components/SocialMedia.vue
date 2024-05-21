<script>
import IconFacebook from './icons/IconFacebook.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkdln from './icons/IconLinkdln.vue'
import IconEmail from './icons/IconEmail.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { Forward } from '../layout/untils'

export default {
  components: {
    IconFacebook,
    IconEmail,
    IconWhatsapp,
    IconGithub,
    IconLinkdln
  },
  methods: {
    Forward
  },
  props: {
    size: String,
    iconSize: String
  },
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    return {
      theme,
      uniColor
    }
  }
}
</script>
<template>
  <div
    class="social-media d-flex justify-content-around"
    :style="{ width: size == null ? 'auto' : size }"
  >
    <span
      @click="Forward('https://www.facebook.com/charlot.dedjinou.35?mibextid=ZbWKwL')"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconFacebook :size="iconSize"
    /></span>
    <a
      href="mailto:dedjinoucharlotjoel@gmail.com"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconEmail :size="iconSize"
    /></a>
    <span
      @click="Forward('https://github.com/Charlot-DEDJINOU')"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconGithub :size="iconSize"
    /></span>
    <span
      @click="Forward('https://wa.me/22959105267')"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconWhatsapp :size="iconSize"
    /></span>
    <span
      @click="Forward('https://www.linkedin.com/in/charlot-dedjinou')"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconLinkdln :size="iconSize"
    /></span>
  </div>
</template>
<style>
.social-media span,
.social-media a {
  padding: 10px;
  margin: 0px 4px;
  border-radius: 50%;
  text-decoration: none;
  cursor: pointer;
}
</style>
