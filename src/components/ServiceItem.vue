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
    className="service p-2 m-3"
    :style="{ backgroundColor: theme.background.secondary }"
    data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-easinf="linear"
  >
    <div className="service-title d-flex align-items-center justify-content-around my-3">
      <IconEye className="icon mx-3 d-inline-block" :style="{ color: uniColor }" />
      <div className="service-name align-self-center">
        <SectionTitle :title="title" service="service" />
      </div>
    </div>
    <p className="text-justify px-2 text-responsive">
      {{ content }}
    </p>
  </div>
</template>
<style scoped>
.service {
  width: 330px;
  height: auto;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
}
.service .service-title .icon {
  width: 40px;
  height: 40px;
}
.text-justify {
  text-align: justify;
}
</style>
