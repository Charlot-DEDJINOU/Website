<script>
import SectionTitle from './SectionTitle.vue'
import ServiceItem from './ServiceItem.vue'

export default {
  components: {
    SectionTitle,
    ServiceItem
  }
}
</script>
<template>
  <section class="mt-5">
    <SectionTitle title="Services" />
    <div class="container d-flex flex-wrap justify-content-around mt-5">
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
    </div>
  </section>
</template>
