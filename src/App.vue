<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
    <whatssAppContact/>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'; // Importoni useRouter për të përdorur ruterin
import whatssAppContact from './components/whatssAppContact.vue';

const router = useRouter(); // Krijoni instancën e routerit

onMounted(() => {
  router.push('/HomeView'); // Drejtoni përdoruesin në rrugën kryesore kur komponenti të ngarkohet
  console.log(router,'=-=>> rouitere')
});
</script>
