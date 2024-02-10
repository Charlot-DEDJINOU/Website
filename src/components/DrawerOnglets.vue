<script>
import IconHome from './icons/IconHome.vue'
import IconAbout from './icons/IconAbout.vue'
import IconService from './icons/IconService.vue'
import IconProjet from './icons/IconProjet.vue'
import IconTrophy from './icons/IconTrophy.vue'
import IconAward from './icons/IconAward.vue'
import IconContact from './icons/IconContact.vue'
import IconDownload from './icons/IconDownload.vue'
import IconSetting from './icons/IconSetting.vue'
import ThemesColors from './ThemesColors.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    IconHome,
    IconAbout,
    IconService,
    IconProjet,
    IconTrophy,
    IconAward,
    IconContact,
    IconDownload,
    IconSetting,
    ThemesColors
  },
  setup() {
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))
    const theme = ref(computed(() => store.state.theme))

    return {
      theme,
      uniColor
    }
  }
}
</script>
<template>
  <div class="w-100 mt-5" :style="{ color: uniColor }">
    <div
      class="drawer-onglet d-flex align-items-center mb-3"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconSetting size="30" />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('preferences')
      }}</span>
    </div>
    <div class="mb-4">
      <ThemesColors />
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconHome />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('home')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconAbout />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('about')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconService />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('services')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconProjet />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('projects')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconTrophy />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('awards')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconAward />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('certifications')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconContact />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }">{{
        $t('contact')
      }}</span>
    </div>
    <div
      class="drawer-onglet d-flex align-items-center mb-4"
      :style="{ borderBottom: '4px solid ' + uniColor }"
    >
      <IconDownload />
      <span class="d-inline-block mx-3 fw-light" :style="{ color: theme.colorprimary }"
        >{{ $t('download') }} CV</span
      >
    </div>
  </div>
</template>
<style>
.drawer-onglet {
  width: 100%;
  padding-bottom: 7px;
  font-size: 17px;
  font-family: Arial;
}
</style>
