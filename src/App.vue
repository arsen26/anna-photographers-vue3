<template>
  <v-app>
    <siteHeader class="header-fixed" />
    <v-main class="main-content">
      <router-view></router-view>
    </v-main>
    <whatssAppContact />
    <siteFooter />
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import siteFooter from './components/siteFooter.vue'
import whatssAppContact from './components/whatssAppContact.vue'
import siteHeader from './components/siteHeader.vue'

const router = useRouter()

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
  z-index: 1000; /* Për të siguruar që të jetë mbi përmbajtjen tjetër */
  background-color: white; /* Ose vendosni ngjyrën që i përshtatet dizajnit tuaj */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Shtoni një hije për pamje më të mirë */
}

.main-content {
  padding-top: 64px; /* Vendosni një padding sipas lartësisë së `siteHeader` */
}
</style>
