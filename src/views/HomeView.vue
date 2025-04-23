<template>
  <section id="home">
    <v-row>
      <v-col>
        <!-- <siteHeader /> -->
        <hero />
        <intro />
        <CalloutBlock />
        <Features />
        <Brands />
        <footerTop />
        <!-- <siteFooter /> -->
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
// import siteHeader from '@/components/siteHeader.vue';
import siteFooter from '@/components/siteFooter.vue'
import hero from '@/components/Hero.vue'
import intro from '@/components/Intro.vue'
import CalloutBlock from '@/components/CalloutBlock.vue'
import Features from '@/components/Features.vue'
import Brands from '@/components/Brands.vue'
import footerTop from '@/components/footerTop.vue'
</script>
