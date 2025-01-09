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
    <whatssAppContact/>
    <router-view></router-view>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Importoni useRouter për të përdorur ruterin
import whatssAppContact from './components/whatssAppContact.vue';
import siteHeader from './components/siteHeader.vue';
import siteFooter from './components/siteFooter.vue';
import hero from '@/components/Hero.vue';
import intro from '@/components/Intro.vue';
import CalloutBlock from './components/CalloutBlock.vue';
import Features from './components/Features.vue';
import Brands from './components/Brands.vue';
import footerTop from './components/footerTop.vue';

const router = useRouter(); // Krijoni instancën e routerit

onMounted(() => {
  router.push('/Home'); // Drejtoni përdoruesin në rrugën kryesore kur komponenti të ngarkohet
  console.log(router,'=-=>> rouitere')
});
</script>
