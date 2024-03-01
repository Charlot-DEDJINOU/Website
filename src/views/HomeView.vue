<script setup>
import { ref } from 'vue'
import LoadingComponent from './LoadingComponent.vue'
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import AwardsSection from '../components/AwardsSection.vue'
import CertificationsSection from '../components/CertificationsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterCustom from '../components/FooterCustom.vue'

const show = ref(false)

const images = document.querySelectorAll('img');

let imagesLoaded = 0;

const checkAllImagesLoaded = () => {
  if (imagesLoaded === images.length) {
    console.log('Toutes les images ont été chargées !');
    
    setTimeout(() => {
      show.value = true
    }, 10000)
  }
};

images.forEach(image => {
  image.addEventListener('load', () => {
    imagesLoaded++;
    checkAllImagesLoaded();
  });
});

images.forEach(image => {
  if (image.complete) {
    imagesLoaded++;
  }
});

checkAllImagesLoaded();
</script>
<template>
  <div>
    <LoadingComponent v-if="!show"/>
    <main
      v-else
      class="scrollspy-example"
      tabindex="0"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
    >
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AwardsSection />
      <CertificationsSection />
      <ContactSection />
      <FooterCustom />
    </main>
  </div>
</template>
