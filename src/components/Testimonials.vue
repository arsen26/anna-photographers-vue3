<template>
  <section id="testimonials" :class="themeClass" class="py-16">
    <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-8 my-8 title-style">
      Vlersime nga klientet
    </h2>
    <v-col style="padding-top: 5px">
      <v-row class="review-style">
        <div class="elfsight-app-c960d5b6-f846-4145-b538-4a1f48bc510f" data-elfsight-app-lazy></div>
      </v-row>
      <v-row class="test-test"> </v-row>
    </v-col>
  </section>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'

</script>

<style scoped>
.test-test {
  background-color: white;
  margin-top: -46px;
  height: 55px;
  position: relative; /* Mund të përdorësh absolute ose fixed në varësi të nevojës */
  z-index: 9999; /* Sa më i lartë numri, aq më sipër do të jetë elementi */
}
.title-style {
  font-family: 'chonburi';
  color: #030f0f;
}
.review-style {
  align-items: center;
  justify-content: center;
}
</style>
