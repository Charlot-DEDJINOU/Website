<script setup>
import HomeSection from '../components/HomeSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import ProjectsSectionVue from '../components/ProjectsSection.vue'
import AwardsSection from '../components/AwardsSection.vue'
import CertificationsSection from '../components/CertificationsSection.vue'
import ContactSection from '../components/ContactSection.vue'
</script>

<template>
  <main
    data-bs-spy="scroll"
    data-bs-target="#navbar-example2"
    data-bs-root-margin="0px 0px -40%"
    data-bs-smooth-scroll="true"
    class="scrollspy-example"
    tabindex="0"
  >
    <HomeSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSectionVue />
    <AwardsSection />
    <CertificationsSection />
    <ContactSection />
  </main>
</template>
