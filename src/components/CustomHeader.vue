<script>
import CustomDrawer from './CustomDrawer.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { scrollBottom } from '../layout/untils'

export default {
  components: {
    CustomDrawer
  },
  methods: {
    scrollBottom
  },
  setup() {
    const store = useStore()

    const theme = ref(computed(() => store.state.theme))
    const uniColor = ref(computed(() => store.state.uniColor))

    return {
      theme,
      uniColor
    }
  }
}
</script>
<template>
  <nav
    class="navbar navbar-expand-lg header w-100 fixed-top"
    id="navbar-example2"
    :style="{ backgroundColor: theme.colorsecondary }"
  >
    <div class="container-fluid container">
      <div
        class="navbar-brand logo"
        :style="{ color: theme.colorprimary }"
        @click="scrollBottom('home')"
      >
        Charlot
      </div>
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
      <div class="collapse navbar-collapse" id="navbarNavDropdown6"></div>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav nav nav-pills d-flex align-items-center">
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#home"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('home') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#about"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('about') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#services"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('services') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#projets"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('projects') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#distinctions"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('awards') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#certifications"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('certifications') }}</a
            >
          </li>
          <li class="nav-item mx-2">
            <a
              class="nav-link"
              href="#contact"
              :style="{ color: theme.colorprimary, '--active': uniColor }"
              >{{ $t('contact') }}</a
            >
          </li>
          <li>
            <select
              v-model="$i18n.locale"
              :style="{ backgroundColor: theme.colorprimary, color: theme.colorsecondary }"
              class="form-select m-2"
            >
              <option value="en">{{ $t('en') }}</option>
              <option value="fr">{{ $t('fr') }}</option>
            </select>
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
    :style="{ backgroundColor: theme.background.drawer, color: theme.colorprimary }"
  >
    <div class="offcanvas-body">
      <CustomDrawer />
    </div>
  </div>
</template>
<style>
.header {
  box-shadow: 2px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.header .logo {
  font-size: 30px;
  text-transform: uppercase;
  cursor: pointer;
}
.header .nav-item {
  font-size: 15px;
}
.header select {
  font-size: 14px;
  outline: none !important;
  border: none !important;
  box-shadow: none !important;
}
</style>
