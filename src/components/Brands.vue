<template>
  <section id="sponsors" :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'">
    <v-container>
      <v-row>
        <v-col cols="12" sm="4" align-self="center">
          <h3 class="text-h4 text-center font-weight-light mb-xs-4 title-style">
            Bashkëpunëtorët Tanë
          </h3>
        </v-col>
        <v-col cols="12" sm="8">
          <v-slide-group show-arrows draggable="true">
            <template v-for="(l, ii) in brandsLogo" :key="ii">
              <v-slide-item>
                <v-card
                  :class="$vuetify.theme.dark ? 'white' : 'grey lighten-4'"
                  class="mx-4 pa-0"
                  height="90"
                  width="140"
                  flat
                >
                  <v-img height="90" contain :src="`/brands/${l}`"></v-img>
                </v-card>
              </v-slide-item>
              <v-responsive
                v-if="ii < brandsLogo.length - 1"
                :key="`divider-${ii}`"
                height="50"
                class="my-auto"
              >
                <v-divider vertical></v-divider>
              </v-responsive>
            </template>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const brandsLogo = ref([
      'logo-12.svg',
      'logo-17.svg',
      'logo-25.svg',
      'logo-26.svg',
      'logo-20.svg',
      'logo-11.svg',
      'logo-1.svg',
      'logo-22.svg',
      'logo-23.svg',
      'logo-16.svg',
      'logo-8.svg',
    ])

    return {
      brandsLogo,
    }
  },
}
</script>

<style scoped>
.title-style {
  font-family: 'chonburi';
  color: #03624c;
}
</style>
