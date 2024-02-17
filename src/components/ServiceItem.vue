<script>
import SectionTitle from './SectionTitle.vue'
import IconEye from './icons/IconEye.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    IconEye,
    SectionTitle
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
  <div className="objectif p-2 m-3" :style="{ backgroundColor: theme.background.secondary }">
    <div className="objectif-title d-flex align-items-center justify-content-around my-3">
      <IconEye className="icon mx-3 d-inline-block" :style="{ color: uniColor }" />
      <div className="objectif-name">
        <SectionTitle title="Web development" service="service" />
      </div>
    </div>
    <p className="text-justify px-2 text-responsive">
      Mettre en place des procédures pour réduire l'impact environnemental des déchets électroniques
      grâce à une collecte sélective, un recyclage efficace, et la remise à neuf d'équipements.
    </p>
  </div>
</template>
<style scoped>
.objectif {
  width: 300px;
  height: auto;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
}
.objectif .objectif-title .icon {
  width: 40px;
  height: 40px;
}
.text-justify {
  text-align: justify;
}
</style>
