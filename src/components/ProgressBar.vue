<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  props: {
    skill: String,
    percent: String,
    color: String,
    background: String
  },
  setup(props) {
    const count = ref(0)
    const skillBarRef = ref(null)
    const hasAnimated = ref(false) // Pour éviter de répéter l'animation
    let observer = null

    const animateCount = () => {
      if (hasAnimated.value) return // Ne pas répéter l'animation
      
      const targetPercent = parseInt(props.percent, 10)
      const duration = 1000 // Durée de l'animation en ms
      const steps = 50 // Nombre d'étapes pour l'animation
      const increment = targetPercent / steps
      const stepDuration = duration / steps

      let currentStep = 0
      
      const interval = setInterval(() => {
        if (currentStep < steps) {
          count.value = Math.min(Math.round(increment * currentStep), targetPercent)
          currentStep++
        } else {
          count.value = targetPercent
          clearInterval(interval)
          hasAnimated.value = true
        }
      }, stepDuration)
    }

    const setupIntersectionObserver = () => {
      const options = {
        root: null, // viewport
        rootMargin: '0px 0px -20% 0px', // Déclenche quand 80% de l'élément est visible
        threshold: 0.3 // Se déclenche quand 30% de l'élément est visible
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            // Petit délai pour un effet plus smooth
            setTimeout(() => {
              animateCount()
            }, 100)
          }
        })
      }, options)

      if (skillBarRef.value) {
        observer.observe(skillBarRef.value)
      }
    }

    onMounted(() => {
      setupIntersectionObserver()
    })

    onUnmounted(() => {
      if (observer && skillBarRef.value) {
        observer.unobserve(skillBarRef.value)
      }
    })

    return {
      count,
      skillBarRef
    }
  }
}
</script>
<template>
  <div ref="skillBarRef" class="progress w-100 mb-3">
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