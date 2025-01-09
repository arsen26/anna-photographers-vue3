<template>
  <div>
    <v-navigation-drawer v-model="drawer" location="left" :temporary="true">
      <v-list lines="one">
        <template v-for="(item, i) in items">
          <v-list-item v-if="!item.submenu" :to="item.to" title="">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title.toUpperCase() }}</v-list-item-title>
          </v-list-item>

          <v-list-group v-else :prepend-icon="item.icon" title="" no-action>
            <template #activator>
              <v-list-item-title>
                {{ item.title.toUpperCase() }}
              </v-list-item-title>
            </template>

            <v-list-item v-for="child in item.submenu" :key="child.title" :to="child.to">
              <v-list-item-title>{{ child.title }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>

    <!-- MOBILE VIEW -->
    <v-app-bar fixed app hide-on-scroll height="74" elevate-on-scroll>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = true" />
      <v-img class="logo-style-menu" :src="image" />
      <v-spacer />
      <template v-for="(name, menuitem) in items">
        <template v-if="name.submenu">
          <v-menu :key="menuitem" open-on-hover offset-y transition="slide-y-transition" bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                plain
                class="py-5 submenubtn hidden-sm-and-down"
                :ripple="false"
                v-bind="attrs"
                style="height: auto"
                v-on="on"
              >
                {{ name.title }}
                <v-icon right small class="mx-0"> mdi-chevron-down </v-icon>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item v-for="(item, index) in name.submenu" :key="index" link :to="item.to">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <v-btn @click="navigateTo(name.to)" v-else :key="menuitem" >{{ name.title }}</v-btn>
        </template
      ><v-spacer />

      <!-- <v-btn icon @click="changeThemeColor">
        <v-icon>{{
          $vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
        }}</v-icon>
      </v-btn> -->
    </v-app-bar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import annaLogo from '@/assets/annalogo.png'
import { useRouter } from 'vue-router'

const router = useRouter()
const image = ref(annaLogo)
const drawer = ref(false)
const items = ref([
  {
    icon: 'mdi-folder-home-outline',
    title: 'Home',
    to: '/',
  },
  {
    icon: 'mdi-account',
    title: 'Rreth nesh',
    to: '/About',
  },
  {
    icon: 'mdi-folder-image',
    title: 'Photography Gallery',
    to: '/gallery',
  },
  {
    icon: 'mdi-cash-usd',
    title: 'Anna dekor',
    to: '/pricing',
  },
  {
    icon: 'mdi-folder-image',
    title: 'Decor Gallery',
    to: '/gallery',
  },
  {
    icon: 'mdi-contacts',
    title: 'Contact',
    to: '/contact',
  },
])

// const changeThemeColor = () => {
//   if (this.$vuetify.theme.dark) {
//     this.$vuetify.theme.dark = false;
//   } else {
//     this.$vuetify.theme.dark = true;
//   }
// };
console.log(router, '=-=> router')
const navigateTo = (path) => {
  router.push({path})
};


</script>

<style scoped>
.logo-style-menu {
  height: auto !important;
  width: auto;
  max-height: 70px;
  max-width: 100px;
  object-fit: contain !important;
  margin-left: 100px;
}

.submenubtn {
  cursor: default;
}
</style>
