<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import AwardItem from './AwardItem.vue'
import Awards from '../data/Awards'

export default {
  components: {
    SectionTitle,
    AwardItem
  },
  methods: {
    Awards
  },
  setup() {
    const store = useStore()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    return {
      uniColor,
      theme
    }
  }
}
</script>
<template>
  <section class="mt-5 awards" id="distinctions">
    <SectionTitle :title="$t('awards')" />
    <div class="container d-flex flex-wrap justify-content-around mt-5">
      <AwardItem
        v-for="(item, index) in Awards()"
        :key="index"
        :award="item"
        :data-aos="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />
    </div>
  </section>
</template>
<style scoped></style>
