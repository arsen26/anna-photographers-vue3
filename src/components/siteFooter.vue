<template>
  <v-row class="justify-center align-center container-style">
    <!-- KJO DO JET KOLONA PER LOGON DHE PER LOCATION-->
    <v-col cols="12" md="4" lg="3" class="list-container">
      <v-img :width="200" aspect-ratio="16/9" :src="annaLogo" class="mb-4"></v-img>
      <h5 class="v-card-subtitle" @click="sendToLocation">
        Address: Misto Mame, Rruga Thoma Koxhaj, Kashar 1001
      </h5>
    </v-col>
    <v-divider vertical class="hidden-sm-and-down"></v-divider>

    <!-- KJO DO JET KOLONA PER MENYRAT E KONTAKTIT KREUN DEKORE FOTOGRAFI-->
    <v-col cols="12" md="4" lg="3" class="text-center list-container">
      <v-row class="justify-center">
        <h3>Na kontaktoni ne:</h3>
        <v-divider></v-divider>
      </v-row>
      <v-list class="v-list-style" lines="one">
        <v-list-item
          @click="sector.functionToCall"
          v-for="sector in menu"
          :key="sector.action"
          variant="plain"
          :title="sector.title"
          class="list-style"
        >
          <template v-slot:prepend>
            <v-icon
              @click="sector.functionToCall"
              class="contacts-icons"
              :icon="sector.icon"
            ></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-col>
    <v-divider vertical class="hidden-sm-and-down"></v-divider>

    <!-- KJO DO JET KOLONA E FUNDIT QE SE DI SE PER CA DO JET PO DO E SHOFIM-->
    <v-col cols="12" md="4" lg="3" class="text-center list-container">
      <v-row class="justify-center">
        <h3>Na gjeni ne:</h3>
        <v-divider></v-divider>
      </v-row>
      <v-list class="v-list-style" lines="one">
        <v-list-item
          @click="sector.functionToCall"
          v-for="sector in findUsMenu"
          :key="sector.action"
          variant="plain"
          :title="sector.title"
          class="list-style"
        >
          <template v-slot:prepend>
            <v-icon
              @click="sector.functionToCall"
              class="contacts-icons"
              :icon="sector.icon"
            ></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
  <v-row class="justify-center align-center bottom-footer-style">
    <h5 class="linkedin-row" @click="sendToLinkedin">© Arsen Cenollari - {{ year }}</h5>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import annaLogo from '@/assets/logoinverted.png'
const sendToWhatssApp = () => {
  const url = navigator.userAgent.match(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
  )
    ? 'whatsapp://send'
    : 'https://web.whatsapp.com/send'

  const fullUrl = `${url}?phone=+355 69 749 6384`
  window.open(fullUrl, '_blank')
}
const sendToTel = () => {
  window.location.href = 'tel:+355696754600'
}
const sendToEmail = () => {
  window.open(`mailto:anxhir.as@gmail.com`)
}
const sendToYoutube = () => {
  const url = 'https://www.youtube.com/@annaphotographers/featured'
  window.open(url, '_blank')
}
const sendToFacebook = () => {
  const url = 'https://www.facebook.com/annaphotographerss/'
  window.open(url, '_blank')
}
const sendToInstagram = () => {
  const url = 'https://www.instagram.com/annaphotographers/'
  window.open(url, '_blank')
}
const sendToPinterest = () => {
  const url = 'https://www.pinterest.com/Annaphotographerss/'
  window.open(url, '_blank')
}
const year = ref(new Date().getFullYear())
const menu = ref([
  {
    title: 'Whatsapp',
    action: 'send_to_wa',
    icon: 'mdi-whatsapp',
    functionToCall: sendToWhatssApp,
  },
  {
    title: 'Telephone',
    action: 'send_to_tel',
    icon: 'mdi-phone-outline',
    functionToCall: sendToTel,
  },
  {
    title: 'Email',
    action: 'send_to_email',
    icon: 'mdi-email',
    functionToCall: sendToEmail,
  },
])
const findUsMenu = ref([
  {
    title: 'Instagram',
    action: 'send_to_wa',
    icon: 'mdi-instagram',
    functionToCall: sendToInstagram,
  },
  {
    title: 'Facebook',
    action: 'send_to_tel',
    icon: 'mdi-facebook',
    functionToCall: sendToFacebook,
  },
  {
    title: 'Tiktok',
    action: 'send_to_email',
    icon: 'mdi-alpha-t-box',
    functionToCall: sendToEmail,
  },
  {
    title: 'Youtube',
    action: 'send_to_email',
    icon: 'mdi-youtube',
    functionToCall: sendToYoutube,
  },
  {
    title: 'Pinterest',
    action: 'send_to_email',
    icon: 'mdi-pinterest',
    functionToCall: sendToPinterest,
  },
])
const sendToLocation = () => {
  const url =
    'https://www.google.com/maps/dir//Misto+Mame,+Rruga+Thoma+Koxhaj,+Kashar+1001/@41.3195911,19.7522832,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x135031a222e48ff1:0x1d747a32a885ed0f!2m2!1d19.7723709!2d41.3199428?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'

  window.open(url, '_blank')
}
const sendToLinkedin = () => {
  const url = 'https://www.linkedin.com/in/arsen-cenollari-88a486284/?originalSubdomain=al'
  window.open(url, '_blank')
}
</script>

<style scoped>
.linkedin-row {
  cursor: pointer !important;
}
.list-container {
  justify-items: center !important;
  overflow-y: hidden !important;
  margin-top: 35px;
}
.container-style {
  color: white;
  background-color: #03624c;
}
.v-list-style {
  background-color: transparent;
  color: white;
  margin-top: 15px;
}
.contacts-icons {
  margin-right: -20px;
}
.v-card-subtitle {
  cursor: pointer;
  word-break: break-word;
  white-space: normal;
  text-align: center;
}

h3 {
  font-size: 1.5em;
  color: white;
}
.bottom-footer-style {
  background-color: #030f0f;
  color: #00df82;
  height: 25px;
}
</style>
