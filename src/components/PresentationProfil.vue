<script>
import SocialMedia from './SocialMedia.vue'
import Typewriter from 'typewriter-effect/dist/core'
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    SocialMedia
  },
  props: {
    color: String,
    theme: Object
  },
  setup() {
    const { t, locale } = useI18n() // Utiliser la fonction t pour la traduction

    const typewriterRef = ref(null)

    watchEffect(() => {
      const typewriter = new Typewriter(typewriterRef.value, {
        loop: true,
        delay: 50,
        deleteSpeed: 50
      })

      typewriter
        .typeString(t('profil_1'))
        .pauseFor(300)
        .deleteAll()
        .typeString(t('profil_2'))
        .pauseFor(300)
        .deleteAll()
        .typeString(t('profil_3'))
        .pauseFor(300)
        .deleteAll()
        .typeString(t('profil_4'))
        .pauseFor(300)
        .deleteAll()
        .start()
    }, locale.value)

    return {
      typewriterRef
    }
  }
}
</script>

<template>
  <div class="presentation-content d-flex flex-column align-items-center">
    <div class="photo-profil w-100">
      <img src="../assets/charlot.jpg" alt="Charlot" :style="{ border: '8px solid ' + color }" />
      <div class="profil h-100 d-flex flex-column justify-content-around">
        <h3 :style="{ color: color }" class="my-3">Charlot DEDJINOU</h3>
        <div>
          <span class="fs-4 fw-meduim d-inline-block" ref="typewriterRef"></span>
          <span
            class="span d-inline-block w-75 mb-3"
            :style="{ borderBottom: '5px solid ' + color }"
          ></span>
        </div>
        <p class="text-justify text-profil text-responsive mb-4">
          {{ $t('short_description') }}
        </p>
        <SocialMedia class="align-self-center" size="350px" iconSize="30" />
      </div>
    </div>
    <div class="buttons d-flex flex-wrap justify-content-evenly mt-5 w-100">
      <a
        href="#about"
        class="py-2 px-4 fw-medium border-0"
        :style="{ backgroundColor: color, color: 'white' }"
      >
        {{ $t('about') }}
      </a>
      <a
        href="#projets"
        class="py-2 px-4 fw-medium border-0"
        :style="{ backgroundColor: color, color: 'white' }"
      >
        {{ $t('my') }} {{ $t('projects') }}
      </a>
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
.presentation-content .buttons a {
  border-radius: 10px 0px 10px 0px;
  text-decoration: none;
}
.text-justify {
  text-align: justify;
}
@media screen and (min-width: 200px) and (max-width: 500px) {
  .presentation-content .photo-profil img {
    width: 200px;
  }
  .presentation-content {
    width: 100%;
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
@media screen and (min-width: 501px) and (max-width: 820px) {
  .presentation-content {
    width: 100%;
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
</style>
