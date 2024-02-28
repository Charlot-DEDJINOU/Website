<script>
import { ref } from 'vue'

export default {
  props: {
    skill: String,
    percent: String,
    color: String,
    background: String
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

    const startAnimation = () => {
      const screenHeight = document.getElementsByTagName('body')[0].clientHeight
      const scrollPosition = window.scrollY

      const startPercentage = 10
      const endPercentage = 23

      const startOffset = screenHeight * (startPercentage / 100)
      const endOffset = screenHeight * (endPercentage / 100)

      if (scrollPosition > startOffset && scrollPosition < endOffset) {
        Count()
      } else {
        count.value = 0
      }
    }

    window.addEventListener('scroll', startAnimation)

    return {
      count
    }
  }
}
</script>
<template>
  <div class="progress w-100 mb-3">
    <span class="skill">
      {{ skill }}<i class="val fw-medium">{{ count }} %</i>
    </span>
    <div class="progress-bar-wrap" :style="{ backgroundColor: background }">
      <div class="progress-bar" :style="{ width: count + '%', backgroundColor: color }"></div>
    </div>
  </div>
</template>
<style scoped>
.progress {
  display: block;
  background: none;
  border-radius: 0;
  min-height: 60px;
}
.progress .skill {
  padding: 10px 0;
  margin: 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
}
.progress .skill .val {
  float: right;
  font-style: normal;
}
.progress-bar-wrap {
  border-radius: 2px;
  height: 10px;
}
.progress-bar {
  height: 100%;
  transition: 0.9s;
  border-radius: 2px;
}
</style>
