<script>
import SectionTitle from './SectionTitle.vue'
import EducationExperienceSection from './EducationExperienceSection.vue'
import SkillsSection from './SkillsSection.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import IconDownloadAbout from './icons/IconDownloadAbout.vue'
import IconEye from './icons/IconEye.vue'
import { downloadCV, viewCV } from '../layout/untils'

export default {
  components: {
    SectionTitle,
    IconDownloadAbout,
    IconEye,
    EducationExperienceSection,
    SkillsSection
  },
  methods: {
    downloadCV,
    viewCV
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
  <section class="mt-4" id="about">
    <SectionTitle title="About" />
    <div class="mt-4 about" :style="{ backgroundColor: theme.background.secondary }">
      <div class="container d-flex justify-content-around py-3 flex-wrap">
        <div class="profil-cv my-3">
          <p class="profil text-justify px-3 text-responsive">
            <span :style="{ color: uniColor }">Profil</span> : Je suis Charlot DEDJINOU, un
            développeur passionné par la création d'expériences web innovantes et convaincu du
            pouvoir de la technologie pour résoudre des problèmes du monde réel. Avec une solide
            expérience dans le développement frontend et une curiosité insatiable pour les dernières
            technologies, je suis constamment à la recherche de nouveaux défis stimulants.
          </p>
          <div class="cv-view d-flex flex-wrap justify-content-evenly mt-4 w-100">
            <button
              @click="downloadCV"
              class="py-2 px-4 fw-medium border-0 d-flex align-items-center justify-content-center"
              :style="{ backgroundColor: uniColor, color: 'white', width: '190px' }"
            >
              <IconDownloadAbout class="mx-2" /> Download CV
            </button>
            <button
              @click="viewCV"
              class="py-2 px-4 fw-medium border-0 d-flex align-items-center justify-content-center"
              :style="{ backgroundColor: uniColor, color: 'white', width: '190px' }"
            >
              <IconEye class="mx-2" /> View
            </button>
          </div>
        </div>
        <div class="item my-3 text-responsive">
          <p><span :style="{ color: uniColor }">Experience </span> : 3 ans</p>
          <p><span :style="{ color: uniColor }">Degree</span> : Licence</p>
          <p><span :style="{ color: uniColor }">Website</span> : charlot.vercel.com</p>
          <p><span :style="{ color: uniColor }">City</span> : Abomey-Calavi, Bénin</p>
          <p><span :style="{ color: uniColor }">Email</span> : dedjinoucharlotjoel@gmail.com</p>
        </div>
        <div class="item my-3 text-responsive">
          <p><span :style="{ color: uniColor }">Phone</span> : +229 59105267</p>
          <p><span :style="{ color: uniColor }">Freelance</span> : Available</p>
          <p><span :style="{ color: uniColor }">Remote</span> : Available</p>
          <p><span :style="{ color: uniColor }">Linkedln</span> : Charlot DEDJINOU</p>
          <p><span :style="{ color: uniColor }">Github</span> : Charlot-DEDJINOU</p>
        </div>
      </div>
    </div>
    <EducationExperienceSection />
    <SkillsSection />
  </section>
</template>

<style scoped>
.about {
  height: auto;
}
.about .profil-cv {
  width: 500px;
}
.about .profil-cv .cv-view button {
  border-radius: 10px 0px 10px 0px;
}
.text-justify {
  text-align: justify;
}
@media screen and (max-width: 500px) {
  .about .profil-cv .cv-view button {
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 501px) and (max-width: 768px) {
  .about .profil-cv .cv-view button {
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
}
@media screen and (min-width: 1025px) {
}
</style>
