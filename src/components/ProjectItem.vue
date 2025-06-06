<script>
import IconEye from './icons/IconEye.vue'
import { Forward } from '../layout/untils.js'

export default {
  props: {
    color: String,
    theme: Object,
    projet: Object
  },
  components: { IconEye },
  data() {
    return {
      isImageModalOpen: false
    }
  },
  methods: {
    Forward,
    openImageModal() {
      this.isImageModalOpen = true
      // Empêcher le scroll de la page quand le modal est ouvert
      document.body.style.overflow = 'hidden'
    },
    closeImageModal() {
      this.isImageModalOpen = false
      // Rétablir le scroll de la page
      document.body.style.overflow = 'auto'
    },
    handleModalClick(event) {
      // Fermer le modal si on clique en dehors de l'image
      if (event.target === event.currentTarget) {
        this.closeImageModal()
      }
    }
  },
  beforeUnmount() {
    // S'assurer que le scroll est rétabli si le composant est détruit
    document.body.style.overflow = 'auto'
  }
}
</script>

<template>
  <div
    data-aos="fade-down"
    data-aos-duration="1500"
    data-aos-easinf="linear"
    class="projet m-3 d-flex flex-column justify-content-between"
    :style="{ backgroundColor: theme.background.secondary }"
  >
    <!-- Image cliquable pour ouvrir le modal -->
    <div class="image-container" @click="openImageModal">
      <img :src="projet.image" :alt="projet.image" class="mb-3 project-image" />
      <div class="image-overlay">
        <span class="zoom-text">🔍 Cliquer pour agrandir</span>
      </div>
    </div>
    
    <h5 class="text-center mb-3" :style="{ color: color }">{{ $t(projet.title) }}</h5>
    <div class="px-3 text-justify text-responsive mb-3">
      {{ $t(projet.description) }}
    </div>
    <div class="w-100 d-flex justify-content-around align-items-center px-2 skills-projet mb-3">
      <span
        :style="{ backgroundColor: theme.background.tertiaire, color: color }"
        v-for="(item, index) in projet.skills"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div
      class="w-100 d-flex justify-content-center align-items-center py-2 view-project"
      :style="{ color: color, borderTop: '1px solid ' + theme.background.tertiaire }"
      @click="projet.site === '' ? Forward(projet.github) : Forward(projet.site)"
    >
      <IconEye class="d-inline-block" />
      <span class="d-inline-block mx-2">{{ $t('see') }}</span>
    </div>
  </div>

  <!-- Modal pour l'image agrandie -->
  <Teleport to="body">
    <div 
      v-if="isImageModalOpen" 
      class="image-modal"
      @click="handleModalClick"
      @keydown.esc="closeImageModal"
      tabindex="0"
      ref="modal"
    >
      <div class="modal-content">
        <button 
          class="close-button" 
          @click="closeImageModal"
          :style="{ color: color }"
        >
          ✕
        </button>
        <img 
          :src="projet.image" 
          :alt="projet.image" 
          class="modal-image"
        />
        <div class="modal-info" :style="{ color: color }">
          <h6>{{ $t(projet.title) }}</h6>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.projet {
  width: 350px;
  min-height: 390px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.image-container {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
}

.project-image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 260px;
  border-radius: 10px 10px 0px 0px;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.image-container:hover .project-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 10px 10px 0px 0px;
}

.image-container:hover .image-overlay {
  opacity: 1;
}

.zoom-text {
  color: white;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 10px;
}

.projet .description {
  height: 53%;
}

.projet .text-justify {
  text-align: justify;
}

.projet .view-project {
  cursor: pointer;
}

.projet .skills-projet span {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  font-style: italic;
}

/* Styles pour le modal */
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-button {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10000;
  padding: 5px 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.modal-image {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.modal-info {
  margin-top: 15px;
  text-align: center;
}

.modal-info h6 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

/* Animation d'apparition du modal */
.image-modal {
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  animation: scaleIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .modal-image {
    max-height: 70vh;
  }
  
  .close-button {
    top: -35px;
    font-size: 20px;
  }
  
  .zoom-text {
    font-size: 12px;
  }
}
</style>