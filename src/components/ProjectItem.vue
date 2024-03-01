<script>
import IconEye from './icons/IconEye.vue'
import { Forward } from '../layout/untils.js'

export default {
  props: {
    color: String,
    theme: Object,
    projet: Object
  },
  components: { IconEye },
  methods: { Forward }
}
</script>
<template>
  <div
    data-aos="fade-down"
    data-aos-duration="1500"
    data-aos-easinf="linear"
    class="projet m-3 d-flex flex-column justify-content-between"
    :style="{ backgroundColor: theme.background.secondary }"
  >
    <img :src="projet.image" :alt="projet.image" class="mb-3" />
    <h5 class="text-center mb-3" :style="{ color: color }">{{ $t(projet.title) }}</h5>
    <div class="px-3 text-justify text-responsive mb-3">
      {{ $t(projet.description) }}
    </div>
    <div class="w-100 d-flex justify-content-around align-items-center px-2 skills-projet mb-3">
      <span
        :style="{ backgroundColor: theme.background.tertiaire, color: color }"
        v-for="(item, index) in projet.skills"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div
      class="w-100 d-flex justify-content-center align-items-center py-2 view-project"
      :style="{ color: color, borderTop: '1px solid ' + theme.background.tertiaire }"
      @click="projet.site === '' ? Forward(projet.github) : Forward(projet.site)"
    >
      <IconEye class="d-inline-block" />
      <span class="d-inline-block mx-2">{{ $t('see') }}</span>
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
  overflow: hidden;
}
.projet img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 260px;
  border-radius: 10px 10px 0px 0px;
  transition: transform 0.3s ease;
  transform-origin: center;
}
.projet img:hover {
  transform: scale(1.05);
}

.projet .description {
  height: 53%;
}
.projet .text-justify {
  text-align: justify;
}
.projet .view-project {
  cursor: pointer;
}
.projet .skills-projet span {
  display: inline-block;
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 12px;
  font-style: italic;
}
</style>
