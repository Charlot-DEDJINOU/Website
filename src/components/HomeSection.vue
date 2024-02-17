<script>
import CustomHeader from './CustomHeader.vue'
import ThemesColors from './ThemesColors.vue'
import IconSetting from './icons/IconSetting.vue'
import PresentationProfil from './PresentationProfil.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    CustomHeader,
    ThemesColors,
    IconSetting,
    PresentationProfil,
    IconArrowDown
  },
  setup() {
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const show = ref(false)
    const handdleShow = () => (show.value = !show.value)

    return {
      show,
      handdleShow,
      uniColor,
      theme
    }
  }
}
</script>
<template>
  <section
    class="presentation d-flex flex-column justify-content-evenly align-items-center py-5"
    id="home"
    :style="{ backgroundImage: 'url(' + theme.background.image + ')' }"
  >
    <CustomHeader />
    <div class="home-preference d-flex align-items-center">
      <span
        class="d-inline-block d-flex justify-content-center align-items-center mx-3 py-1 px-2 show-colors"
        @click="handdleShow()"
        :style="{ backgroundColor: uniColor }"
      >
        <IconSetting size="15" class="rotate text-white" />
      </span>
      <ThemesColors class="opacity" v-if="show" />
    </div>
    <PresentationProfil :color="uniColor" :theme="theme" class="mt-5"/>
    <IconArrowDown class="scroll-about" :style="{ color: uniColor }" />
  </section>
</template>
<style scoped>
.presentation {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding-bottom: 15px;
}
.presentation .home-preference {
  position: fixed;
  top: 30%;
  left: 3px;
  cursor: pointer;
  height: 150px;
}
.presentation .home-preference .show-colors {
  border-radius: 3px;
}
.presentation .home-preference .show-colors .rotate {
  transform-origin: center;
  animation-name: rotate;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.presentation .home-preference .opacity {
  opacity: 1;
  transition: opacity 2s ease-in-out;
  transform: translateY(20px);
}
.presentation .scroll-about {
  width: 60px;
  height: 60px;
  margin-bottom: -50px;
  animation: scrollAnimation 1s infinite;
}
@keyframes scrollAnimation {
  0% {
    transform: translateY(0);
    box-shadow: none;
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
    box-shadow: none;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media screen and (max-width: 500px) {
  .presentation {
    min-height: 100vh;
    height: auto;
    border: 1px solid red;
    padding-bottom: 50px !important;
  }
  .presentation .scroll-about {
    margin-bottom: 0px;
    margin-top: 50px;
  }
}
@media screen and (min-width: 501px) and (max-width: 768px) {
  .presentation {
    min-height: 100vh;
    padding-bottom: 30px;
  }
  .presentation .scroll-about {
    margin-bottom: 0px;
    margin-top: 50px;
  }
}
</style>
