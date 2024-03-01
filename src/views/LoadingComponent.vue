<script>
import { watch, ref } from 'vue'
export default {
  props: {
    percent: String
  },
  setup(props) {
    const count = ref(0)

    const Count = async () => {
      const targetPercent = parseInt(props.percent, 10)

      // Utiliser un délai pour observer l'incrémentation
      const interval = setInterval(() => {
        if (count.value < targetPercent) {
          count.value += 1
        } else {
          clearInterval(interval)
        }
      }, 10)
    }

    watch(Count, props.percent)

    return {
        count
    }
  }
}
</script>
<template>
  <div
    class="container-loading container d-flex flex-column justify-content-center align-items-center"
  >
    <span class="d-block mb-3">{{ count }} %</span>
    <div class="w-100 content">
      <div class="progress-bar" :style="{ width: count + '%' }"></div>
    </div>
  </div>
</template>
<style scoped>
.container-loading {
  height: 100vh;
}
.container-loading .content {
  background-color: rgba(0, 0, 0, 0.61);
  height: 10px;
  border-radius: 3px;
}
.container-loading .content div {
  background-color: green;
  height: 10px;
  border-radius: 3px;
  transition: 0.9s;
}
</style>
