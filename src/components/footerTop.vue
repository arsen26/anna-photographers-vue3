<template>
  <section
    id="footer-top"
    :class="
      $vuetify.theme.dark
        ? 'blue-grey darken-4 grey--text text--lighten-1'
        : 'grey lighten-3 grey--text text--darken-4'
    "
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="py-12"
          ><v-row no-gutters>
            <v-col cols="12">
              <v-img class="logo-image" :src="image"></v-img>
            </v-col>
            <v-col cols="12">
              <p class="mt-8 text-justify" style="max-width: 400px">
                Për çdo pyetje që mund të keni rreth nesh, paketave tona të
                seteve fotografike, ofertave për dekorimin e festave tuaja, apo
                çdo shërbim tjetër që ofrojmë, ju lutemi na kontaktoni. Jemi
                këtu për t'ju ndihmuar me çdo informacion dhe për të bërë
                përvojën tuaj sa më të këndshme!
              </p>
            </v-col>
            <v-col cols="12">
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>ADDRESS</v-list-item-title>
                    <v-list-item-subtitle
                      class="redirect-style"
                      @click="redirectToAdress"
                      >Rruga Thoma Koxhaj, Pallatet Cabej, tek kmy-ja e
                      vogel.</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>EMAIL</v-list-item-title>
                    <v-list-item-subtitle
                      class="redirect-style"
                      @click="redirectToAnxhela"
                      >anxhir.as@gmail.com</v-list-item-subtitle
                    >
                    <v-list-item-subtitle
                      class="redirect-style"
                      @click="redirectToFlajdon"
                      >flajdon@gmail.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>PHONE</v-list-item-title>
                    <v-list-item-subtitle
                      class="redirect-style"
                      @click="redirectToPhone"
                      >(+355) 069 749 6384</v-list-item-subtitle
                    >
                    <!-- <v-list-item-subtitle>(650) 555-1234</v-list-item-subtitle> -->
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
              <div class="d-flex justify-center mt-5">
                <v-btn
                  v-for="(socialm, i) in social"
                  :key="`social-${i}`"
                  class="d-flex bx social-media-icon"
                  icon
                  large
                  variant="plain"
                  color="black"
                  :class="socialm.className"
                  :href="socialm.link"
                  target="_blank"
                >
                  <template v-if="socialm.platform === 'TikTok'">
                    <img :src="socialm.icon" class="tiktok-icon bxl-tiktok" />
                  </template>
                  <template v-else>
                    <v-icon>{{ socialm.icon }}</v-icon>
                  </template>
                </v-btn>
              </div>
            </v-col>
          </v-row></v-col
        >
        <v-col cols="1" class="text-center hidden-sm-and-down col col-2 py-12">
          <v-divider vertical></v-divider>
        </v-col>
        <v-col cols="12" md="5" class="py-12">
          <h3 class="mb-8">Dergoni Email</h3>
          <footerContactForm />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import footerContactForm from '@/components/footerContactForm.vue'
import annaLogo from '@/assets/annalogo.png';
import tiktokIcon from '@/assets/tiktokL.svg';
export default {
  components: {
    footerContactForm,
  },
  data() {
    return {
      image: annaLogo,
      social: [
        {
          platform: 'Facebook',
          link: 'https://www.facebook.com/',
          icon: 'mdi-facebook',
          className: 'bxl-facebook', // Klasë për Facebook
        },
        {
          platform: 'TikTok',
          link: 'https://www.tiktok.com/@annaphotographers', // Korrigjim i lidhjes për TikTok
          icon: tiktokIcon, // Ikona e TikTok
          className: 'bxl-tiktok', // Klasë për TikTok (ndryshimi nga bxl-twitter)
        },
        {
          platform: 'Instagram',
          link: 'https://www.instagram.com/annaphotographers/',
          icon: 'mdi-instagram',
          className: 'bxl-instagram', // Klasë për Instagram
        },
        {
          platform: 'Youtube',
          link: 'https://www.youtube.com/@annaphotographers',
          icon: 'mdi-youtube',
          className: 'bxl-youtube', // Klasë për Youtube
        },
      ],
    }
  },
  methods: {
    redirectToAdress() {
      const url =
        'https://www.google.com/maps/dir//Misto+Mame,+Rruga+Thoma+Koxhaj,+Kashar+1001/@41.3195911,19.7522832,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x135031a222e48ff1:0x1d747a32a885ed0f!2m2!1d19.7723709!2d41.3199428?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'

      window.open(url, '_blank')
    },
    redirectToPhone() {
      const phoneNumber = 'tel:+355697496384'
      window.location.href = phoneNumber
    },
    redirectToFlajdon() {
      const email = 'mailto:flajdon@gmail.com'
      window.location.href = email
    },
    redirectToAnxhela() {
      const email = 'mailto:anxhir.as@gmail.com'
      window.location.href = email
    },
  },
}
</script>
<style scoped>
.redirect-style:hover {
  color: rgb(70, 70, 255) !important;
  cursor: pointer;
}
.logo-image {
  height: auto !important;
  width: auto;
  max-height: 140px;
  max-width: 200px;
  object-fit: contain !important;
  margin-left: 100px;
}
.social-media-icon {
  font-size: 25px;
  transition: all 0.3s ease;
}

.social-media-icon:hover {
  cursor: pointer;
  font-size: 37px;
  color: #04ecdc;
  text-shadow: 0 0 5px #04ecdc, 0 0 10px #04ecdc, 0 0 20px #04ecdc;
}

@keyframes glow {
  0%,
  100% {
    color: white;
    text-shadow: none;
  }
  50% {
    color: #04ecdc;
    text-shadow: 0 0 5px #04ecdc, 0 0 10px #04ecdc, 0 0 20px #04ecdc;
  }
}

.bxl-instagram {
  animation: glow 2s infinite;
  animation-delay: 1s;
}

.bxl-facebook {
  animation: glow 2s infinite;
  animation-delay: 0s;
}
.bxl-youtube {
  animation: glow 2s infinite;
  animation-delay: 1.5s;
}

.tiktok-icon {
  width: 23px;
  height: 23px;
  display: block;
  filter: drop-shadow(0 0 2px #04ecdc) drop-shadow(0 0 4px #04ecdc); /* Rrit efektin e neoni */
  animation: glow 2s infinite !important;
  animation-delay: 0.5s !important;
}
.tiktok-icon:hover {
  width: 33px;
  height: 33px;
  display: block;
  filter: drop-shadow(0 0 2px #04ecdc) drop-shadow(0 0 4px #04ecdc); /* Rrit efektin e neoni */
  animation: glow 2s infinite !important;
  animation-delay: 0.5s !important;
}
@keyframes glow {
  0%,
  100% {
    filter: drop-shadow(0 0 0px #04ecdc) drop-shadow(0 0 0px #04ecdc); /* Ndriçimi fillestar dhe përfundimtar */
  }
  50% {
    filter: drop-shadow(0 0 2px #04ecdc) drop-shadow(0 0 4px #04ecdc); /* Ndriçimi maksimal */
  }
}
</style>
