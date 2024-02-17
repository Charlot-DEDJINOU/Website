<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import AwardItem from './AwardItem.vue'

export default {
  components: {
    SectionTitle,
    AwardItem
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
    <SectionTitle title="Distinctions" />
    <div class="container d-flex flex-wrap justify-content-around mt-5">
      <AwardItem />
      <AwardItem />
      <AwardItem />
    </div>
  </section>
</template>
<style scoped></style>
