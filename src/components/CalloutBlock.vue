<template>
  <section
    :class="
      $vuetify.theme.dark
        ? 'grey darken-4 primary--text text--lighten-1'
        : 'grey lighten-4 primary--text'
    "
    class="primary--text py-16"
  >
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col cols="12" sm="7" class="text-center">
              <h2 class="follow-us-on-social-title">
                Na ndiqni ne rrjetet sociale
              </h2>

              <p style="color: #f78c6b">
                Ndiqeni live punen tone, ne rrjetet tona sociale per te marre
                perditesimet me te fundit rreth nesh.
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
                  color="#f78c6b"
                  :href="socialm.link"
                  target="_blank"
                >
                  <v-icon>{{ socialm.icon }}</v-icon>
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          platform: 'Facebook',
          link: 'https://www.facebook.com/',
          icon: 'mdi-facebook',
        },
        // {
        //   platform: 'TikTok',
        //   link: 'https://twitter.com/',
        //   icon: 'mdi-tik-tok',
        // },
        {
          platform: 'Instagram',
          link: 'https://www.instagram.com/',
          icon: 'mdi-instagram',
        },
        {
          platform: 'Youtube',
          link: 'https://www.linkedin.com/',
          icon: 'mdi-youtube',
        },
        // {
        //   platform: 'Github',
        //   link: 'https://modevue.staticdesigner.com/',
        //   icon: 'mdi-github',
        // },
      ],
    }
  },
}
</script>

<style scoped>
.follow-us-on-social-title {
  font-size: 45px;
  color: #f78c6b;
}
</style>
