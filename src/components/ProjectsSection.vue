<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProjectItem from './ProjectItem.vue'

export default {
  components: {
    SectionTitle,
    ProjectItem
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
  <section class="mt-5 projects">
    <SectionTitle title="Projects" />
    <div class="container mt-5">
      <div class="d-flex justify-content-around flex-wrap search w-100">
        <input type="text" :style="{ backgroundColor: theme.background.secondary }" />
        <select
          class="form-select form-select-lg mb-3 border-0 shadow-none"
          aria-label="Large select example"
          :style="{ backgroundColor: theme.background.secondary }"
        >
          <option selected>Language</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="d-flex flex-wrap justify-content-around mt-5">
        <ProjectItem :theme="theme" :color="uniColor" />
        <ProjectItem :theme="theme" :color="uniColor" />
        <ProjectItem :theme="theme" :color="uniColor" />
        <ProjectItem :theme="theme" :color="uniColor" />
        <ProjectItem :theme="theme" :color="uniColor" />
        <ProjectItem :theme="theme" :color="uniColor" />
      </div>
    </div>
  </section>
</template>
<style scoped>
.projects .search input {
  width: 300px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0px 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.projects .search select {
  width: 300px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3) !important;
}
</style>
