<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
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
  <div class="distinction mb-4" :style="{ backgroundColor: theme.background.secondary }">
    <img src="../assets/backgroundBack.png" alt="image" />
    <div class="informations px-3 py-2">
      <div class="mt-3 text-responsive" :style="{ color: uniColor }">
        Machine Artificial Intelligence Contest (MAIC)
      </div>
      <div class="mt-3 text-responsive">Machine Intelligence For You (MIFY)</div>
      <div class="date-range mt-3 text-responsive">
        <i :style="{ backgroundColor: theme.background.tertiaire }">Novembre - Decembre 2022</i>
        <span class="fw-medium" :style="{ backgroundColor: uniColor, color: theme.colorsecondary }"
          >Premier Prix</span
        >
      </div>
      <div class="text-justify my-3 text-responsive">
        Je suis Charlot DEDJINOU, un développeur passionné par la création d'expériences web
        innovantes et convaincu du pouvoir de la technologie.Je suis Charlot DEDJINOU, un
        développeur passionné par la création d'expériences web innovantes et convaincu du pouvoir
        de la technologie.Je suis Charlot DEDJINOU, un développeur passionné par la création
        d'expériences web innovantes.
      </div>
    </div>
  </div>
</template>
<style scoped>
.distinction {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
}
.distinction .informations {
  width: 64%;
  height: auto;
  display: flex;
  flex-direction: column;
}
.distinction img {
  width: 35%;
  height: 275px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 0px 0px 10px;
}
.distinction .informations .date-range {
  display: flex;
  justify-content: space-between;
}
.distinction .informations .date-range i,
.distinction .informations .date-range span {
  border-radius: 5px;
  padding: 5px 10px;
}
.distinction .informations .text-justify {
  text-align: justify;
}
@media screen and (max-width: 912px) {
  .distinction {
    width: 95%;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
  }
  .distinction .informations {
    width: 100%;
  }
  .distinction img {
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0px 0px;
  }
}
</style>
