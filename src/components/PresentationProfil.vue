<script>
import SocialMedia from './SocialMedia.vue'
import Typewriter from 'typewriter-effect/dist/core'
import { ref, onMounted } from 'vue'

export default {
  components: {
    SocialMedia
  },
  props: {
    color: String,
    theme: Object
  },
  setup() {
    const typewriterRef = ref(null)

    onMounted(() => {
      const typewriter = new Typewriter(typewriterRef.value, {
        loop: true,
        delay: 50,
        deleteSpeed: 50
      })

      typewriter
        .typeString('Je suis developpeur web')
        .pauseFor(300)
        .deleteAll()
        .typeString('Je suis developpeur mobile')
        .pauseFor(300)
        .deleteAll()
        .typeString('Je suis Data Scientits')
        .pauseFor(300)
        .deleteAll()
        .start()
    })

    return {
      typewriterRef
    }
  }
}
</script>
<template>
  <div class="presentation-content d-flex flex-column align-items-center">
    <div class="photo-profil w-100">
      <img src="../assets/charlot.jpg" alt="Charlot" :style="{ border: '10px solid ' + color }" />
      <div class="profil h-100 d-flex flex-column justify-content-around">
        <h3 :style="{ color: color }">Charlot DEDJINOU</h3>
        <div>
          <span class="fs-4 fw-meduim d-inline-block" ref="typewriterRef"></span>
          <span
            class="span d-inline-block w-75"
            :style="{ borderBottom: '5px solid ' + color }"
          ></span>
        </div>
        <p class="text-justify text-profil text-responsive">
          Je passionné par la création d'expériences web innovantes et convaincu du pouvoir de la
          technologie pour résoudre des problèmes du monde réel
        </p>
        <SocialMedia class="align-self-center" size="350px" />
      </div>
    </div>
    <div class="buttons d-flex flex-wrap justify-content-evenly mt-5 w-100">
      <button
        class="py-2 px-4 fw-medium border-0"
        :style="{ backgroundColor: color, color: theme.colorsecondary }"
      >
        About me
      </button>
      <button
        class="py-2 px-4 fw-medium border-0"
        :style="{ backgroundColor: color, color: theme.colorsecondary }"
      >
        Mes projets
      </button>
    </div>
  </div>
</template>
<style scoped>
.presentation-content {
  width: 700px;
}
.presentation-content .photo-profil img {
  width: 270px;
  height: auto;
  object-fit: fill;
  border-radius: 20px 0px 20px 0px;
}
.presentation-content .photo-profil .profil {
  width: 400px;
  align-items: start;
}
.presentation-content .photo-profil {
  display: flex;
  justify-content: space-between;
}
.presentation-content .photo-profil .profil .span {
  padding-bottom: 10px;
}
.presentation-content .buttons button {
  border-radius: 10px 0px 10px 0px;
}
.text-justify {
  text-align: justify;
}
@media screen and (max-width: 768px) {
  .presentation-content {
    width: 100%;
  }
  .presentation-content .photo-profil img {
    width: 200px;
  }
  .presentation-content .photo-profil {
    flex-direction: column;
    align-items: center;
  }
  .presentation-content .photo-profil .profil {
    width: 100%;
    align-items: center;
    margin-top: 20px;
  }
  .presentation-content .photo-profil .profil .text-profil {
    padding: 2rem;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) {
}
</style>
