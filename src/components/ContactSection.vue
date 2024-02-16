<script>
import SectionTitle from './SectionTitle.vue'
import SocialMedia from './SocialMedia.vue'

export default {
  components: {
    SectionTitle,
    SocialMedia
  }
}
</script>
<template>
  <section class="mt-5 contact" id="contact">
    <SectionTitle title="Contact" />
    <div class="container d-flex flex-wrap justify-content-around mt-5">
      <SocialMedia iconSize="50" size="50%" />
    </div>
  </section>
</template>
<style scoped></style>
