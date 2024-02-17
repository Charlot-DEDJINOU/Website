<script>
export default {
  props: {
    skill: String,
    percent: String,
    color: String,
    background: String
  }
}
</script>
<template>
  <div class="progress w-100 mb-3">
    <span class="skill"
      >{{ skill }}<i class="val fw-medium">{{ percent }}</i></span
    >
    <div class="progress-bar-wrap" :style="{ backgroundColor: background }">
      <div class="progress-bar" :style="{ width: percent, backgroundColor: color }"></div>
    </div>
  </div>
</template>
<style scoped>
.progress {
  display: block;
  background: none;
  border-radius: 0;
  min-height: 60px;
}
.progress .skill {
  padding: 10px 0;
  margin: 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
}
.progress .skill .val {
  float: right;
  font-style: normal;
}
.progress-bar-wrap {
  border-radius: 2px;
  height: 10px;
}
.progress-bar {
  height: 100%;
  transition: 0.9s;
  border-radius: 2px;
}
</style>
