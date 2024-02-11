<script>
export default {
  props: {
    title: String
  }
}
</script>
<template>
  <div class="section-title d-flex flex-column align-items-center">
    <h2>{{ title }}</h2>
    <span class="d-inline-block"></span>
  </div>
</template>

<style scoped>
.section-title span {
  width: 25px;
  height: 5px;
  background-color: green;
  border-radius: 5px;
  animation: translateAnimation 2s infinite;
}

@keyframes translateAnimation {
  0% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(20px);
  }
  100% {
    transform: translateX(-20px);
  }
}
</style>
