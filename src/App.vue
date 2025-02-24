<template>
  <v-app :style="{ backgroundImage: `url(${BackgroundImg})` }" class="container-style">
    <siteHeader class="header-fixed" />
    <v-main class="main-content">
      <router-view></router-view>
    </v-main>
    <whatssAppContact />
    <siteFooter />
  </v-app>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import siteFooter from './components/siteFooter.vue'
import whatssAppContact from './components/whatssAppContact.vue'
import siteHeader from './components/siteHeader.vue'
import Background from './assets/Sprinkle.svg'

const router = useRouter()
const BackgroundImg = ref(Background)

onMounted(() => {
  router.push('/HomeView')
})
</script>

<style scoped>
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.main-content {
  padding-top: 64px;
}
</style>
