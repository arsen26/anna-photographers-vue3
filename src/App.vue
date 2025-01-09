<template>
  <v-app>
    <v-container fluid>
      <siteHeader />

      <hero />
      <intro />
      <CalloutBlock />
      <Features />
      <Brands />
      <footerTop />
      <siteFooter />
    </v-container>

    <!-- <hero /> -->
    <!-- <router-view /> -->
  </v-app>
</template>

<script>
import siteHeader from './components/siteHeader.vue'
import siteFooter from './components/siteFooter.vue'
import hero from '@/components/Hero.vue'
import intro from '@/components/Intro.vue'
import CalloutBlock from './components/CalloutBlock.vue'
import Features from './components/Features.vue'
import Brands from './components/Brands.vue'
import footerTop from './components/footerTop.vue'

export default {
  components: {
    siteHeader,
    siteFooter,
    hero,
    intro,
    CalloutBlock,
    Features,
    Brands,
    footerTop,
  },
}
</script>
