<template>
  <!-- Desktop VIEW -->
  <v-app-bar scroll-behavior="hide" height="74" elevate-on-scroll>
    <v-row class="row-container">
      <v-img class="logo-style-menu" :src="image" />
      <v-spacer class="if-small-screen" />
      <v-app-bar-nav-icon
        class="menu-mobile-style"
        variant="text"
        @click.stop="changeDrawerValue"
      ></v-app-bar-nav-icon>

      <template v-for="(item, i) in items" :key="i">
        <v-btn class="submenubtn" @click="navigateTo(item.to)">
          {{ item.title }}
        </v-btn>
      </template>
    </v-row>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list lines="one">
      <template v-for="(item, i) in items" :key="i">
        <v-list-item :prepend-icon="item.icon" :to="item.to">
          <v-list-item-title class="text-uppercase menu-text-mobile">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import annaLogo from '@/assets/annalogo.png'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const image = ref(annaLogo)
const drawer = ref(false)
const items = ref([
  { icon: 'mdi-home-outline', title: 'Home', to: '/' },
  { icon: 'mdi-information-outline', title: 'Rreth nesh', to: '/About' },
  { icon: 'mdi-view-gallery-outline', title: 'Photography Gallery', to: '/gallery' },
  { icon: 'mdi-finance', title: 'Cmimet', to: '/pricing' },
  { icon: ' mdi-view-gallery', title: 'Decor Gallery', to: '/gallery' },
  { icon: 'mdi-contacts', title: 'Contact', to: '/Contact' },
])
const changeDrawerValue = () => {
  console.log(drawer.value)
  drawer.value = !drawer.value
}
const navigateTo = (path) => {
  router.push({ path })
}
</script>

<style scoped>
/* Mobile Styles */
@media (max-width: 960px) {
  .menu-text-mobile{
    margin-left: 0px !important;
  }
  .menu-mobile-style {
    visibility: visible;
    display: block;
  }

  .logo-style-menu {
    margin-right: 40px !important;
    max-width: 70px;
    max-height: 50px;
  }
  .row-container {
    padding-left: 20px;
    padding-right: 20px;
  }
  .submenubtn {
    display: none;
  }
}

/* Desktop Styles */
@media (min-width: 961px) {
  .menu-mobile-style {
    visibility: hidden;
    display: none;
  }
  .if-small-screen {
    display: none;
  }

  .submenubtn {
    display: inline-flex;
  }
}

.logo-style-menu {
  height: auto !important;
  width: auto;
  max-height: 100px;
  max-width: 100px;
  object-fit: contain !important;
  margin-left: 100px;
}

.submenubtn {
  cursor: default;
}
.row-container {
  justify-content: center;
  align-items: center;
  flex: auto;
  margin-left: -130px;
}
</style>
