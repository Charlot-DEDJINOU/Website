<script>
import SectionTitle from './SectionTitle.vue'
import ServiceItem from './ServiceItem.vue'
import Services from '../data/Services'

export default {
  components: {
    SectionTitle,
    ServiceItem
  },
  setup() {
    const services = Services()

    return {
      services
    }
  }
}
</script>
<template>
  <section class="mt-3" id="services">
    <SectionTitle title="Services" />
    <div class="container d-flex flex-wrap justify-content-between mt-3">
      <ServiceItem
        v-for="(item, index) in services"
        :key="index"
        :title="item.title"
        :content="item.description"
      />
    </div>
  </section>
</template>
