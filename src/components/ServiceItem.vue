<script>
import SectionTitle from './SectionTitle.vue'
import IconEye from './icons/IconEye.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    IconEye,
    SectionTitle
  },
  props: {
    title: String,
    content: String
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
  <div
    class="service p-2 m-3"
    :style="{ backgroundColor: theme.background.secondary }"
    data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-easinf="linear"
  >
    <div class="service-title d-flex align-items-center justify-content-around my-3">
      <IconEye class="icon mx-1 d-inline-block mb-1" :style="{ color: uniColor }" />
      <div class="service-name d-flex align-items-center justify-content-center">
        <SectionTitle :title="title" service="service" />
      </div>
    </div>
    <p class="text-justify px-2 text-responsive">
      {{ content }}
    </p>
  </div>
</template>
<style scoped>
.service {
  width: 320px;
  height: auto;
  border-radius: 10px;
  background-color: black;
}
.text-justify {
  text-align: justify;
}
</style>
