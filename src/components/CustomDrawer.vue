<script>
import SocialMedia from './SocialMedia.vue'
import DrawerOnglets from './DrawerOnglets.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  components: {
    SocialMedia,
    DrawerOnglets
  },
  setup() {
    const store = useStore()
    const uniColor = ref(computed(() => store.state.uniColor))

    return {
      uniColor
    }
  }
}
</script>

<template>
  <div class="drawer p-3 d-flex flex-column align-items-center">
    <div class="drawer-header d-flex align-items-center">
      <img src="../assets/charlot.png" alt="charlot" :style="{ border: '3px solid' + uniColor }" />
      <span class="d-inline-block mx-3 fw-medium">Charlot Joël DEDJINOU</span>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="my-4 w-100 d-flex flex-column align-items-center">
      <SocialMedia iconSize="20" />
      <DrawerOnglets />
    </div>
  </div>
</template>

<style>
.drawer {
  width: 100%;
  height: auto;
  z-index: 10;
}
.drawer .drawer-header img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
