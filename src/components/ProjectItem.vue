<script>
import IconGithub from './icons/IconGithub.vue'
import IconWorld from './icons/IconWorld.vue'
import Forward from '../layout/Forward'

export default {
  props: {
    color: String,
    theme: Object,
    projet: Object
  },
  components: { IconGithub, IconWorld },
  methods: { Forward }
}
</script>
<template>
  <div
    class="projet m-3 d-flex flex-column justify-content-between"
    :style="{ backgroundColor: theme.background.secondary }"
  >
    <img :src="projet.image" :alt="projet.image" class="mb-3" />
    <h5 class="text-center mb-3" :style="{ color: color }">{{ projet.title }}</h5>
    <div class="px-3 text-justify text-responsive mb-3">
      {{ projet.description }}
    </div>
    <div class="w-100 d-flex justify-content-around align-items-center px-2 skills-projet mb-3">
      <span
        :style="{ backgroundColor: theme.background.tertiaire, color: color }"
        v-for="(item, index) in projet.skills"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div class="w-100 d-flex justify-content-around align-items-center view-projet mb-3">
      <button
        :style="{ backgroundColor: color, color: theme.colorsecondary }"
        @click="Forward(projet.github)"
      >
        <IconGithub size="20" /> View
      </button>
      <button
        :style="{ backgroundColor: color, color: theme.colorsecondary }"
        @click="Forward(projet.site)"
      >
        <IconWorld size="20" /> View
      </button>
    </div>
  </div>
</template>
<style scoped>
.projet {
  width: 350px;
  min-height: 390px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
}
.projet img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 260px;
  border-radius: 10px 10px 0px 0px;
}
.projet .description {
  height: 53%;
}
.text-justify {
  text-align: justify;
}
.projet .skills-projet span {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  font-style: italic;
}
.projet .view-projet button {
  border: none;
  outline: none;
  height: 30px;
  width: 25%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
