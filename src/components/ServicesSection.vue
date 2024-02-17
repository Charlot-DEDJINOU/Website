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
  <section class="mt-3" id="services">
    <SectionTitle title="Services" />
    <div class="container d-flex flex-wrap justify-content-between mt-3">
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
      <ServiceItem />
    </div>
  </section>
</template>
