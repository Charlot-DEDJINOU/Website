<script>
import SectionTitle from './SectionTitle.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AwardItem from './AwardItem.vue'
import Awards from '../data/Awards'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    SectionTitle,
    AwardItem
  },
  methods: {
    Awards
  },
  setup() {
    const store = useStore()
    const { locale } = useI18n()

    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    const allAwards = ref([]) // Tous les awards
    const displayedAwards = ref([]) // Awards actuellement affichés
    const itemsPerPage = ref(2) // Nombre d'awards à charger à chaque fois
    const currentPage = ref(0) // Page actuelle

    const loadMore = () => {
      const startIndex = currentPage.value * itemsPerPage.value
      const endIndex = startIndex + itemsPerPage.value

      if (currentPage.value === 0) {
        // Première charge : remplacer tous les awards affichés
        displayedAwards.value = allAwards.value.slice(0, endIndex)
      } else {
        // Charges suivantes : ajouter les nouveaux awards
        const newAwards = allAwards.value.slice(startIndex, endIndex)
        displayedAwards.value = [...displayedAwards.value, ...newAwards]
      }

      currentPage.value++
    }

    const hasMore = computed(() => {
      return displayedAwards.value.length < allAwards.value.length
    })

    // Initialiser les données au montage du composant
    onMounted(() => {
      allAwards.value = Awards()
      loadMore() // Charger les 2 premiers awards
    })

    return {
      uniColor,
      theme,
      allAwards,
      displayedAwards,
      loadMore,
      hasMore,
      locale
    }
  }
}
</script>
<template>
  <section class="mt-5 awards" id="distinctions">
    <SectionTitle :title="$t('awards')" />
    <div class="container mt-5">
      <div class="d-flex flex-wrap justify-content-around">
        <AwardItem
          v-for="(item, index) in displayedAwards"
          :key="index"
          :award="item"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
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
          {{ locale === 'en' ? 'Show More' : 'Voir plus' }}
        </button>
      </div>

      <!-- Indicateur du nombre d'awards -->
      <div class="text-center mt-3">
        <span :style="{ color: theme.colorprimary }">
          {{ displayedAwards.length }} / {{ allAwards.length }}
          {{ locale === 'en' ? 'awards' : 'distinctions' }}
        </span>
      </div>
    </div>
  </section>
</template>
<style scoped>
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
