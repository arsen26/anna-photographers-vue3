<template>
  <section :class="computedClass" class="primary--text py-16 section-style">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2 class="follow-us-on-social-title">Na ndiqni ne rrjetet sociale</h2>

              <p style="color: #03624c; font-family: 'chonburi'">
                Ndiqeni live punen tone, ne rrjetet tona sociale per te marre perditesimet me te
                fundit rreth nesh.
              </p>
            </v-col>
            <v-col align-self="center" cols="12" sm="5" class="text-center">
              <div class="d-flex justify-center mt-5">
                <v-btn
                  v-for="(socialm, i) in social"
                  :key="`social-${i}`"
                  class="d-flex"
                  icon
                  large
                  :color="'#030f0f'"
                  :href="socialm.link"
                  target="_blank"
                >
                  <v-icon color="#00df82">{{ socialm.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const social = ref([
  {
    platform: 'Facebook',
    link: 'https://www.facebook.com/annaphotographerss',
    icon: 'mdi-facebook',
  },
  // {
  //   platform: 'TikTok',
  //   link: 'https://twitter.com/',
  //   icon: 'mdi-tik-tok',
  // },
  {
    platform: 'Instagram',
    link: 'https://www.instagram.com/annaphotographers/',
    icon: 'mdi-instagram',
  },
  {
    platform: 'Youtube',
    link: 'https://www.youtube.com/@annaphotographers',
    icon: 'mdi-youtube',
  },
  // {
  //   platform: 'Github',
  //   link: 'https://modevue.staticdesigner.com/',
  //   icon: 'mdi-github',
  // },
])
const theme = useTheme()
const computedClass = computed(() =>
  theme.global.current.value.dark
    ? 'grey darken-4 primary--text text--lighten-1'
    : 'grey lighten-4 primary--text',
)
</script>

<style scoped>
.section-style {
  background-color: rgba(128, 128, 128, 0.1);
}

.follow-us-on-social-title {
  font-size: 45px;
  font-family: 'chonburi';
  color: black;
}
</style>
