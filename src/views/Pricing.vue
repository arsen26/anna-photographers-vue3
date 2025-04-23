<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <AboutUsHero :hero-alt="heroAlt" />
        <Pricing />
        <Brands />
        <Testimonials />
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AboutUsHero from '@/components/AboutUsHero.vue'
import Pricing from '@/components/Pricing.vue'
import Brands from '@/components/Brands.vue'
import Testimonials from '@/components/Testimonials.vue'
import price from '@/assets/price.jpg'
const heroAlt = ref([
  {
    src: price,
    heading: ' Pricing ',
  },
])
const head = () => {
  return {
    title: 'Pricing and Plans',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
      },
    ],
  }
}
</script>
