<script>
import SectionTitle from './SectionTitle.vue'
import ServiceItem from './ServiceItem.vue'
import Services from '../data/Services'

export default {
  components: {
    SectionTitle,
    ServiceItem
  },
  methods: {
    Services
  }
}
</script>
<template>
  <section class="mt-3" id="services">
    <SectionTitle title="Services" />
    <div class="container d-flex flex-wrap justify-content-around mt-3">
      <ServiceItem
        v-for="(item, index) in Services()"
        :key="index"
        :title="item.title"
        :content="item.description"
      />
    </div>
  </section>
</template>
