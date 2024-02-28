<script>
import ProgressBar from './ProgressBar.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Skills from '../data/Skills'

export default {
  components: {
    ProgressBar
  },
  setup() {
    const skills = Skills()

    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    return {
      uniColor,
      theme,
      skills
    }
  }
}
</script>
<template>
  <div class="skills container mt-5">
    <div class="section-title">
      <h2 class="mb-3">{{ $t('skills') }}</h2>
    </div>
    <div class="row skills-content">
      <div class="col-lg-6">
        <ProgressBar
          v-for="(item, index) in skills[0]"
          :key="0 + index"
          :skill="item.title"
          :percent="item.percent"
          :color="uniColor"
          :background="theme.background.secondary"
        />
      </div>
      <div class="col-lg-6">
        <ProgressBar
          v-for="(item, index) in skills[1]"
          :key="1 + index"
          :skill="item.title"
          :percent="item.percent"
          :color="uniColor"
          :background="theme.background.secondary"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
