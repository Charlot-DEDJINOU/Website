<script>
import CustomHeader from './CustomHeader.vue'
import ThemesColors from './ThemesColors.vue'
import IconSetting from './icons/IconSetting.vue'
import PresentationProfil from './PresentationProfil.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import IconArrowUp from './icons/IconArrowUp.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { scrollBottom } from '../layout/untils'

export default {
  components: {
    CustomHeader,
    ThemesColors,
    IconSetting,
    PresentationProfil,
    IconArrowDown,
    IconArrowUp
  },
  methods: {
    scrollBottom
  },
  setup() {
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const show = ref(false)
    const handdleShow = () => (show.value = !show.value)

    const showArrowTop = () => {
      let backtotop = document.getElementsByClassName('scroll-presentation')[0]
      if (backtotop) {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
    }

    window.addEventListener('scroll', showArrowTop)

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
    class="presentation navbar-nav nav nav-pills d-flex flex-column justify-content-evenly align-items-center py-5"
    id="home"
    :style="{
      backgroundImage: 'url(' + theme.background.image + ')',
      '--color': theme.background.primary
    }"
  >
    <div
      class="text-decoration-none nav-link"
      @click="scrollBottom('home')"
      :style="{ color: uniColor }"
    >
      <IconArrowUp class="scroll-presentation d-inline-block" />
    </div>
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
    <PresentationProfil :color="uniColor" :theme="theme" class="mt-5" />
    <div class="text-decoration-none" @click="scrollBottom('about')">
      <IconArrowDown class="scroll-about" :style="{ color: uniColor }" />
    </div>
  </section>
</template>
<style scoped>
.presentation {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  padding-bottom: 15px;
  border: 1px solid var(--color);
}
.presentation .home-preference {
  position: fixed;
  top: 30%;
  left: 3px;
  cursor: pointer;
  height: 150px;
  z-index: 50;
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
  cursor: pointer;
}
.presentation .scroll-presentation {
  position: fixed;
  cursor: pointer;
  top: 93%;
  right: 3px;
  width: 25px;
  height: 25px;
  z-index: 10;
  visibility: hidden;
  opacity: 0;
  transition: all 1s;
  animation: scrollAnimation 1s infinite;
}
.presentation .scroll-presentation.active {
  visibility: visible;
  opacity: 1;
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
