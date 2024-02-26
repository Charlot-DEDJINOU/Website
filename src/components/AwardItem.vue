<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  props: {
    award: Object
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
  <div class="distinction mb-4" :style="{ backgroundColor: theme.background.secondary }">
    <img :src="award.image" alt="image" />
    <div class="informations px-3 py-2">
      <div class="mt-3 text-responsive" :style="{ color: uniColor }">
        {{ award.title }}
      </div>
      <div class="mt-3 text-responsive">{{ award.organization }}</div>
      <div class="date-range mt-3 text-responsive">
        <i :style="{ backgroundColor: theme.background.tertiaire }">{{ award.date }}</i>
        <span
          class="fw-medium"
          :style="{ backgroundColor: uniColor, color: theme.colorsecondary }"
          >{{ award.range }}</span
        >
      </div>
      <div class="text-justify my-3 text-responsive">
        <span :style="{ color: uniColor }">Thème : </span> {{ award.theme }}
      </div>
      <div class="text-justify my-3 text-responsive">
        <span :style="{ color: uniColor }">Solution : </span> {{ award.description }}
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
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.3);
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
@media screen and (max-width: 1024px) {
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
