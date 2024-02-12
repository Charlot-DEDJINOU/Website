<script>
import ProgressBar from './ProgressBar.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    ProgressBar
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
  <div class="skills container mt-5">
    <div class="section-title">
      <h2 class="mb-3" :style="{ color: uniColor }">Skills</h2>
    </div>
    <div class="row skills-content">
      <div class="col-lg-6">
        <ProgressBar
          skill="HTML"
          percent="90%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="JavaScript"
          percent="95%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="Java"
          percent="97%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="PHP"
          percent="70%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
      </div>
      <div class="col-lg-6">
        <ProgressBar
          skill="Python"
          percent="80%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="Momo"
          percent="85%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="OpenSearch"
          percent="78%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
        <ProgressBar
          skill="Fluentd"
          percent="45%"
          :color="uniColor"
          :background="theme.background.secondary"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
