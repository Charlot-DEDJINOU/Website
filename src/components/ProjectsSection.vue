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

    const allProjects = ref(Projects()) // Tous les projets filtrés
    const displayedProjects = ref([]) // Projets actuellement affichés
    const itemsPerPage = ref(6) // Nombre d'éléments à charger à chaque fois
    const currentPage = ref(0) // Page actuelle

    const category = ref('all')
    const textSearch = ref('')

    const search = () => {
      // Filtrer tous les projets selon les critères
      allProjects.value = Projects().filter((item) => textInProjet(item))

      // Réinitialiser l'affichage
      currentPage.value = 0
      loadMore()
    }

    const loadMore = () => {
      const startIndex = currentPage.value * itemsPerPage.value
      const endIndex = startIndex + itemsPerPage.value

      if (currentPage.value === 0) {
        // Première charge : remplacer tous les projets affichés
        displayedProjects.value = allProjects.value.slice(0, endIndex)
      } else {
        // Charges suivantes : ajouter les nouveaux projets
        const newProjects = allProjects.value.slice(startIndex, endIndex)
        displayedProjects.value = [...displayedProjects.value, ...newProjects]
      }

      currentPage.value++
    }

    const hasMore = computed(() => {
      return displayedProjects.value.length < allProjects.value.length
    })

    const textInProjet = (projet) => {
      const text = textSearch.value.toLowerCase()
      const categoryMatch =
        category.value === 'all' ||
        projet.category.toLowerCase().includes(category.value.toLowerCase())

      return (
        categoryMatch &&
        (projet.title.toLowerCase().includes(text) ||
          t(projet.description).toLowerCase().includes(text) ||
          projet.site?.toLowerCase().includes(text) ||
          projet.github.toLowerCase().includes(text) ||
          projet.category.toLowerCase().includes(text) ||
          projet.skills.join(' ').toLowerCase().includes(text))
      )
    }

    // Initialiser l'affichage au montage du composant
    search()

    return {
      uniColor,
      theme,
      allProjects,
      displayedProjects,
      category,
      textSearch,
      search,
      loadMore,
      hasMore,
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
          v-for="(item, index) in displayedProjects"
          :key="index"
          :projet="item"
        />
      </div>

      <!-- Bouton Voir plus -->
      <div v-if="hasMore" class="d-flex justify-content-center mt-4">
        <button
          @click="loadMore"
          class="btn-load-more px-4 py-2"
          :style="{
            backgroundColor: uniColor,
            color: theme.background.primary,
            border: `2px solid ${uniColor}`
          }"
        >
          {{ locale === 'en' ? 'Load More' : 'Voir plus' }}
        </button>
      </div>

      <!-- Indicateur du nombre de projets -->
      <div class="text-center mt-3">
        <span :style="{ color: theme.colorprimary }">
          {{ displayedProjects.length }} / {{ allProjects.length }}
          {{ locale === 'en' ? 'projects' : 'projets' }}
        </span>
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

.btn-load-more {
  font-size: 16px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-load-more:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-load-more:active {
  transform: translateY(0);
}
</style>
