<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  props: {
    title: String,
    service: String
  },
  setup() {
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))

    return {
      uniColor
    }
  }
}
</script>
<template>
  <div class="section-title d-flex flex-column align-items-center">
    <b v-if="service === 'service'" class="d-inline-block fs-5">{{ title }}</b>
    <h2 v-else>{{ title }}</h2>
    <span class="d-inline-block" :style="{ backgroundColor: uniColor }"></span>
  </div>
</template>

<style scoped>
.section-title span {
  width: 25px;
  height: 5px;
  border-radius: 5px;
  animation: translateAnimation 2s infinite;
}

@keyframes translateAnimation {
  0% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(-20px);
  }
}
</style>
