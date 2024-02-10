<script>
import CustomDrawer from './CustomDrawer.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    CustomDrawer
  },
  setup() {
    const store = useStore()

    const theme = ref(computed(() => store.state.theme))

    return {
      theme
    }
  }
}
</script>
<template>
  <nav
    class="navbar navbar-expand-lg header w-100"
    :style="{ backgroundColor: theme.background.primary }"
  >
    <div class="container-fluid">
      <a class="navbar-brand mx-5 logo" href="#">Charlot</a>
      <button
        class="navbar-toggler shadow-none bg-white"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown4"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown1"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown2"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown3"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown5"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav nav-pills">
          <li class="nav-item mx-2">
            <a class="nav-link" href="#home" :style="{ color: theme.colorprimary }">{{
              $t('home')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#about" :style="{ color: theme.colorprimary }">{{
              $t('about')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#services" :style="{ color: theme.colorprimary }">{{
              $t('services')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#projets" :style="{ color: theme.colorprimary }">{{
              $t('projects')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#distinctions" :style="{ color: theme.colorprimary }">{{
              $t('awards')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#certifications" :style="{ color: theme.colorprimary }">{{
              $t('certifications')
            }}</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#contact" :style="{ color: theme.colorprimary }">{{
              $t('contact')
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-start"
    data-bs-scroll="true"
    data-bs-backdrop="true"
    tabindex="-1"
    id="offcanvasScrolling"
    aria-labelledby="offcanvasScrollingLabel"
  >
    <div
      class="offcanvas-body"
      :style="{ backgroundColor: theme.background.drawer, color: theme.colorprimary }"
    >
      <CustomDrawer />
    </div>
  </div>
</template>
<style>
.header {
  box-shadow: 2px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.header .logo {
  font-family: 'Marck Script';
  font-style: normal;
  font-size: 30px;
  color: green;
}
.header .nav-item {
  font-size: 15px;
  font-family: Arial;
}
</style>
