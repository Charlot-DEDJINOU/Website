<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import SocialMedia from './SocialMedia.vue'

export default {
  components: {
    SocialMedia
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
  <footer id="footer" :style="{ backgroundColor: theme.background.tertiaire }">
    <div class="container d-flex flex-column">
      <b class="text-center title-responsive mb-3 fw-bold">CHARLOT DEDJINOU</b>
      <p class="text-center">{{ $t('quote') }} - Albert Schweitzer</p>
      <SocialMedia class="align-self-center" size="300px" iconSize="25" />
      <div class="copyright my-4">
        &copy; Copyright <strong><span>MyResume</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits" :style="{ fontSize : '18px' }">
        Designed by
        <a
          href="https://charlot-dedjinou.vercel.app"
          class="text-decoration-none fw-bold"
          :style="{ color: uniColor }"
          >Charlot DEDJINOU</a
        >
      </div>
    </div>
  </footer>
</template>
<style scoped>
#footer {
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}
#footer h3 {
  font-size: 36px;
  font-weight: 700;
  position: relative;
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}
#footer p {
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}
#footer .social-links {
  margin: 0 0 40px 0;
}
#footer .copyright {
  margin: 0 0 5px 0;
}
#footer .credits {
  font-size: 13px;
}
</style>
