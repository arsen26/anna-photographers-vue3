<template>
  <v-row class="justify-center align-center container-style">
    <!-- KJO DO JET KOLONA PER LOGON DHE PER LOCATION-->
    <v-col>
      <v-img :width="300" aspect-ratio="16/9" :src="annaLogo"></v-img>
      <h5 class="v-card-subtitle" @click="sendToLocation">
        Address: Misto Mame, Rruga Thoma Koxhaj, Kashar 1001

      </h5>
    </v-col>
    <v-divider vertical></v-divider>

    <!-- KJO DO JET KOLONA PER MENYRAT E KONTAKTIT KREUN DEKORE FOTOGRAFI-->
    <v-col>
      <v-list class="v-list-style" lines="one">
        <v-list-item
          @click="sector.functionToCall"
          v-for="sector in menu"
          :key="action"
          :title="sector.title"
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
    <v-divider vertical></v-divider>

    <!-- KJO DO JET KOLONA E FUNDIT QE SE DI SE PER CA DO JET PO DO E SHOFIM-->
    <v-col>
      <span>test</span>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
import annaLogo from '@/assets/annalogo.png'
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

const menu = ref([
  {
    title: 'Kontaktoni wa',
    action: 'send_to_wa',
    icon: 'mdi-whatsapp',
    functionToCall: sendToWhatssApp,
  },
  {
    title: 'Kontaktoni tel',
    action: 'send_to_tel',
    icon: 'mdi-phone-outline',
    functionToCall: sendToTel,
  },
  {
    title: 'Kontaktoni email',
    action: 'send_to_email',
    icon: 'mdi-email',
    functionToCall: sendToEmail,
  },
])
const sendToLocation = () => {
  const url =
    'https://www.google.com/maps/dir//Misto+Mame,+Rruga+Thoma+Koxhaj,+Kashar+1001/@41.3195911,19.7522832,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x135031a222e48ff1:0x1d747a32a885ed0f!2m2!1d19.7723709!2d41.3199428?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'

  window.open(url, '_blank')
}
</script>

<style scoped>
.container-style {
  color: white;
  background-color: #192744;
}
.v-list-style {
  background-color: transparent;
  color: white;
}
.contacts-icons {
  margin-right: -20px;
}
.v-card-subtitle {
  cursor: pointer;
}
</style>
