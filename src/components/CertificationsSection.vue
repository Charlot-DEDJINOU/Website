<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

export default {
  components: {
    SectionTitle,
    Splide,
    SplideSlide
  },
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const options = {
      type: 'loop',
      focus: 'center',
      drag: 'free',
      speed: 1000,
      rewindSpeed: 1000,
      perPage: 3.5,
      breakpoints: {
        1440: { perPage: 3.5 },
        1340: { perPage: 3 },
        1240: { perPage: 2.75 },
        1140: { perPage: 2.5 },
        940: { perPage: 2.25 },
        840: { perPage: 2 },
        740: { perPage: 1.75 },
        640: { perPage: 1.5 },
        540: { perPage: 1.25 },
        440: { perPage: 1 }
      },
      perMove: 1,
      rewind: true,
      autoplay: true,
      interval: 1000,
      arrows: true,
      pagination: true
    }

    return {
      uniColor,
      theme,
      options
    }
  }
}
</script>
<template>
  <section class="mt-5 certifications" id="certifications">
    <SectionTitle title="Certifications" />
    <div class="container mt-5">
      <div class="d-flex justify-content-around flex-wrap search w-100">
        <input
          class="mb-2 w-75"
          type="text"
          placeholder="Search"
          :style="{ backgroundColor: theme.background.secondary, color: theme.colorprimary }"
        />
      </div>
      <div class="d-flex flex-wrap justify-content-around">
        <Splide :options="options" aria-label="My Favorite Images" class="w-100">
          <SplideSlide>
            <img src="../assets/backgroundBack.png" alt="Sample 1" width="300px" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/backgroundWhite.png" alt="Sample 2" width="300px" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/backgroundBack.png" alt="Sample 1" width="300px" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/backgroundWhite.png" alt="Sample 2" width="300px" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/backgroundBack.png" alt="Sample 1" width="300px" />
          </SplideSlide>
          <SplideSlide>
            <img src="../assets/backgroundWhite.png" alt="Sample 2" width="300px" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>
<style scoped>
.certifications .search input {
  height: 50px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0px 15px;
}
</style>
