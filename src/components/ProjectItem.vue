<script>
import IconGithub from './icons/IconGithub.vue'
import IconWorld from './icons/IconWorld.vue'

export default {
  props: {
    color: String,
    theme: Object
  },
  components: { IconGithub, IconWorld }
}
</script>
<template>
  <div class="projet m-3" :style="{backgroundColor : theme.background.secondary}">
    <img src="../assets/backgroundWhite.png" alt="projet" />
    <div class="d-flex flex-column justify-content-around description">
      <div class="px-3 text-justify">
        Je suis Charlot DEDJINOU, un développeur passionné par la création d'expériences web
        innovantes et convaincu du pouvoir de la technologie.
      </div>
      <div class="w-100 d-flex justify-content-around align-items-center px-2 skills-projet">
        <span :style="{backgroundColor : theme.background.tertiaire, color : color}">React Js</span>
        <span :style="{backgroundColor : theme.background.tertiaire, color : color}">Python</span>
        <span :style="{backgroundColor : theme.background.tertiaire, color : color}">Laravel</span>
        <span :style="{backgroundColor : theme.background.tertiaire, color : color}">Node Js</span>
      </div>
      <div class="w-100 d-flex justify-content-around align-items-center view-projet">
        <button :style="{ backgroundColor: color, color: theme.colorsecondary }">
          <IconGithub size="20" /> View
        </button>
        <button :style="{ backgroundColor: color, color: theme.colorsecondary }">
          <IconWorld size="20" /> View
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.projet {
  width: 350px;
  height: 390px;
  border-radius: 15px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
}
.projet img {
  width: 100%;
  height: 45%;
  border-radius: 15px 15px 0px 0px;
}
.projet .description {
    height: 53%;
}
.text-justify {
  text-align: justify;
  font-size: 15px;
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
