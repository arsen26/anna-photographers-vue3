<template>
  <section id="testimonials" :class="themeClass" class="py-16">
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-8 my-8">
      Vlersime nga klientet
    </h2>
    <v-col style="padding-top: 5px">
      <v-row class="review-style">
        <div class="elfsight-app-c960d5b6-f846-4145-b538-4a1f48bc510f" data-elfsight-app-lazy></div>
      </v-row>
    </v-col>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'
const testimonials = ref([
  {
    avtar: 'person-4.jpg',
    name: 'Mario Speedwagon',
    post: 'Creative Editor of ABC LTD',
  },
  {
    avtar: 'person-8.jpg',
    name: 'Petey Cruiser',
    post: 'CEO of Json LLC',
  },
  {
    avtar: 'person-7.jpg',
    name: 'Anna Sthesia',
    post: 'Director of Cleaner LTD',
  },
  {
    avtar: 'person-10.jpg',
    name: 'Paul Molive',
    post: 'Manager of Torson LTD',
  },
  {
    avtar: 'person-9.jpg',
    name: 'Gail Forcewind',
    post: 'Human Resource Manager of Humibed LLC',
  },
])
</script>

<style scoped>
.review-style {
  align-items: center;
  justify-content: center;
}
</style>
