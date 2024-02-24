<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import Certifications from '../data/Certifications.js'

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
      speed: 2000,
      rewindSpeed: 2000,
      perPage: 3,
      breakpoints: {
        1440: { perPage: 3 },
        1340: { perPage: 2.5 },
        1240: { perPage: 2.25 },
        1140: { perPage: 2 },
        940: { perPage: 1.75 },
        840: { perPage: 1.5 },
        740: { perPage: 1 },
        640: { perPage: 1 },
        540: { perPage: 1 },
        440: { perPage: 1 }
      },
      perMove: 1,
      rewind: true,
      autoplay: true,
      interval: 3000,
      arrows: true,
      pagination: false
    }

    const certifications = ref(Certifications())
    const text = ref('')

    const search = () => {
      certifications.value = Certifications().filter((item) =>
        item.name.toLowerCase().includes(text.value.toLowerCase())
      )
    }

    return {
      uniColor,
      theme,
      options,
      certifications,
      text,
      search
    }
  }
}
</script>
<template>
  <section class="mt-5 certifications" id="certifications">
    <SectionTitle title="Certifications" />
    <div class="container mt-5">
      <div class="d-flex justify-content-around  align-items-center flex-wrap search w-100 mb-2">
        <input
          v-model="text"
          @input="search"
          class="w-75"
          type="text"
          placeholder="Search"
          :style="{ backgroundColor: theme.background.secondary, color: theme.colorprimary }"
        />
        <span class="d-inline-block">{{ certifications.length }}</span>
      </div>
      <div class="d-flex flex-wrap justify-content-around">
        <Splide :options="options" aria-label="My Favorite Images" class="w-100">
          <SplideSlide v-for="(item, index) in certifications" :key="index">
            <img :src="item.image" :alt="item.name" width="360px"/>
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
