<script>
import IconFacebook from './icons/IconFacebook.vue'
import IconWhatsapp from './icons/IconWhatsapp.vue'
import IconGithub from './icons/IconGithub.vue'
import IconLinkdln from './icons/IconLinkdln.vue'
import IconEmail from './icons/IconEmail.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
export default {
  components: {
    IconFacebook,
    IconEmail,
    IconWhatsapp,
    IconGithub,
    IconLinkdln
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
    <a
      href="https://www.facebook.com/charlot.dedjinou.35?mibextid=ZbWKwL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook profile"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconFacebook :size="iconSize"
    /></a>
    <a
      href="mailto:dedjinoucharlotjoel@gmail.com"
      aria-label="Send an email to Charlot DEDJINOU"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconEmail :size="iconSize"
    /></a>
    <a
      href="https://github.com/Charlot-DEDJINOU"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub profile"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconGithub :size="iconSize"
    /></a>
    <a
      href="https://wa.me/2290159105267"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp contact"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconWhatsapp :size="iconSize"
    /></a>
    <a
      href="https://www.linkedin.com/in/charlot-dedjinou"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn profile"
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconLinkdln :size="iconSize"
    /></a>
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
