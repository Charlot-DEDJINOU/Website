<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import ProjectItem from './ProjectItem.vue'
import Projects from '../data/Projects'
import ProjectsCategories from '../data/ProjectsCategories'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    SectionTitle,
    ProjectItem
  },
  methods: {
    ProjectsCategories
  },
  setup() {
    const store = useStore()

    const { locale, t } = useI18n()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const projects = ref(Projects())

    const category = ref('all')
    const textSearch = ref('')

    const search = () => {
      projects.value = Projects().filter((item) => textInProjet(item))
    }

    const textInProjet = (projet) => {
      const text = textSearch.value.toLowerCase()
      return (
        projet.category.toLowerCase().includes(category.value.toLowerCase()) &&
        (projet.title.toLowerCase().includes(text) ||
          t(projet.description).toLowerCase().includes(text) ||
          projet.site.toLowerCase().includes(text) ||
          projet.github.toLowerCase().includes(text) ||
          projet.category.toLowerCase().includes(text) ||
          projet.skills.join(' ').toLowerCase().includes(text))
      )
    }

    return {
      uniColor,
      theme,
      projects,
      category,
      textSearch,
      search,
      locale
    }
  }
}
</script>
<template>
  <section class="mt-5 projects" id="projets">
    <SectionTitle :title="$t('projects')" />
    <div class="container mt-4">
      <div class="d-flex justify-content-around flex-wrap search w-100">
        <input
          class="mb-3"
          v-model="textSearch"
          @input="search"
          type="text"
          placeholder="Search"
          :style="{ backgroundColor: theme.background.secondary, color: theme.colorprimary }"
        />
        <select
          v-model="category"
          @change="search"
          class="form-select form-select-lg mb-3 border-0 shadow-none"
          aria-label="Large select example"
          :style="{ backgroundColor: theme.background.secondary, color: theme.colorprimary }"
        >
          <option value="all" :selected="true">
            {{ locale === 'en' ? 'All' : 'Tous' }}
          </option>
          <option v-for="(item, index) in ProjectsCategories()" :key="index" :value="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="d-flex flex-wrap justify-content-around mt-3">
        <ProjectItem
          :theme="theme"
          :color="uniColor"
          v-for="(item, index) in projects"
          :key="index"
          :projet="item"
        />
      </div>
    </div>
  </section>
</template>
<style scoped>
.projects .search input {
  width: 300px;
  height: 50px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0px 15px;
}
.projects .search select {
  width: 300px;
  font-size: 18px;
}
</style>
