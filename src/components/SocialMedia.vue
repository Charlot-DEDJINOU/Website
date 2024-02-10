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
  <div class="social-media d-flex">
    <span
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconFacebook
    /></span>
    <span
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconEmail
    /></span>
    <span
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconGithub
    /></span>
    <span
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconWhatsapp
    /></span>
    <span
      class="d-inline-block d-flex align-items-center justify-content-center"
      :style="{ backgroundColor: uniColor, color: 'white' }"
      ><IconLinkdln
    /></span>
  </div>
</template>
<style>
.social-media span {
  width: 40px;
  height: 40px;
  margin: 0px 4px;
  border-radius: 50%;
}
</style>
