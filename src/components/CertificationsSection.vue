<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed, nextTick } from 'vue'
import { useStore } from 'vuex'
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import Certifications from '../data/Certifications.js'

export default {
  components: {
    SectionTitle,
    Slide,
    Carousel3d
  },
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const certifications = ref(Certifications())
    const text = ref('')
    const isAutoplayEnabled = ref(true)
    const carouselKey = ref(0) // Clé pour forcer le re-render du carousel

    const search = async () => {
      isAutoplayEnabled.value = false

      certifications.value = Certifications().filter((item) =>
        item.name.toLowerCase().includes(text.value.toLowerCase())
      )

      carouselKey.value++

      await nextTick()

      setTimeout(() => {
        isAutoplayEnabled.value = true
      }, 500)
    }

    return {
      uniColor,
      theme,
      certifications,
      text,
      isAutoplayEnabled,
      carouselKey,
      search
    }
  }
}
</script>
<template>
  <section class="mt-5 certifications" id="certifications">
    <SectionTitle title="Certifications" />
    <div class="container mt-5">
      <div class="d-flex justify-content-around align-items-center flex-wrap search w-100 mb-2">
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
        <carousel-3d
          :key="carouselKey"
          class="w-100 carousel"
          :width="500"
          :height="355"
          :autoplay="isAutoplayEnabled"
          :display="Math.min(5, certifications.length)"
          :startIndex="0"
        >
          <slide
            v-for="(item, index) in certifications"
            :key="`${carouselKey}-${index}`"
            :index="index"
          >
            <img :src="item.image" :alt="item.name" />
          </slide>
        </carousel-3d>
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
.certifications img {
  width: 100%;
  height: 100%;
  object-position: center;
}
@media screen and (max-width: 500px) {
  .certifications img {
    width: 100%;
    height: auto;
    object-position: center;
  }
}
</style>
