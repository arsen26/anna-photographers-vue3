<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
        <v-container class="py-16">
          <v-row>
            <v-col v-for="n in photoArr" :key="n" class="d-flex child-flex" cols="4" xl="3">
              <v-img
                :src="n.path"
                :lazy-src="n.path"
                aspect-ratio="1"
                class="grey lighten-2 rounded-lg img-style"
                contain
                @click="showFullImg(n)"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <!-- Dialog Box që do të shfaqë foton -->
    <v-dialog
      v-model="dialog"
      max-width="900"
      max-height="800"
      persistent
      @click:outside="dialog = false"
    >
      <v-card class="d-flex" style="height: 100%">
        <v-img
          :src="selectedImage"
          :lazy-src="selectedImage"
          class="rounded-lg dialog-img-style"
          style="object-fit: contain; height: 100%; width: 100%"
        ></v-img>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import anna1 from '@/assets/galleryAsset/annaphotographers (1).jpg'
import anna2 from '@/assets/galleryAsset/annaphotographers (2).jpg'
import anna3 from '@/assets/galleryAsset/annaphotographers (3).jpg'
import anna4 from '@/assets/galleryAsset/annaphotographers (4).jpg'
import anna5 from '@/assets/galleryAsset/annaphotographers (5).jpg'
import anna6 from '@/assets/galleryAsset/annaphotographers (6).jpg'
import anna7 from '@/assets/galleryAsset/annaphotographers (7).jpg'
import anna8 from '@/assets/galleryAsset/annaphotographers (8).jpg'
import anna9 from '@/assets/galleryAsset/annaphotographers (9).jpg'
import anna10 from '@/assets/galleryAsset/annaphotographers (10).jpg'
import anna11 from '@/assets/galleryAsset/annaphotographers (11).jpg'
import anna12 from '@/assets/galleryAsset/annaphotographers (12).jpg'
import anna13 from '@/assets/galleryAsset/annaphotographers (13).jpg'
import anna14 from '@/assets/galleryAsset/annaphotographers (14).jpg'
import anna15 from '@/assets/galleryAsset/annaphotographers (15).jpg'
import anna16 from '@/assets/galleryAsset/annaphotographers (16).jpg'
import anna17 from '@/assets/galleryAsset/annaphotographers (17).jpg'
import anna18 from '@/assets/galleryAsset/annaphotographers (18).jpg'
import anna19 from '@/assets/galleryAsset/annaphotographers (19).jpg'
import anna20 from '@/assets/galleryAsset/annaphotographers (20).jpg'
import anna21 from '@/assets/galleryAsset/annaphotographers (21).jpg'
import anna22 from '@/assets/galleryAsset/annaphotographers (22).jpg'
import anna23 from '@/assets/galleryAsset/annaphotographers (23).jpg'
import anna24 from '@/assets/galleryAsset/annaphotographers (24).jpg'
import anna25 from '@/assets/galleryAsset/annaphotographers (25).jpg'
import anna26 from '@/assets/galleryAsset/annaphotographers (26).jpg'
import anna27 from '@/assets/galleryAsset/annaphotographers (27).jpg'
import anna28 from '@/assets/galleryAsset/annaphotographers (28).jpg'
import anna29 from '@/assets/galleryAsset/annaphotographers (29).jpg'
import anna30 from '@/assets/galleryAsset/annaphotographers (30).jpg'
import anna31 from '@/assets/galleryAsset/annaphotographers (31).jpg'
import anna32 from '@/assets/galleryAsset/annaphotographers (32).jpg'
import anna33 from '@/assets/galleryAsset/annaphotographers (33).jpg'
import anna34 from '@/assets/galleryAsset/annaphotographers (34).jpg'
import anna35 from '@/assets/galleryAsset/annaphotographers (35).jpg'
import anna36 from '@/assets/galleryAsset/annaphotographers (36).jpg'
import anna37 from '@/assets/galleryAsset/annaphotographers (37).jpg'
import anna38 from '@/assets/galleryAsset/annaphotographers (38).jpg'
import anna39 from '@/assets/galleryAsset/annaphotographers (39).jpg'
import anna40 from '@/assets/galleryAsset/annaphotographers (40).jpg'
import anna41 from '@/assets/galleryAsset/annaphotographers (41).jpg'
import anna42 from '@/assets/galleryAsset/annaphotographers (42).jpg'
import anna43 from '@/assets/galleryAsset/annaphotographers (43).jpg'
import anna44 from '@/assets/galleryAsset/annaphotographers (44).jpg'
import anna45 from '@/assets/galleryAsset/annaphotographers (45).jpg'
import anna46 from '@/assets/galleryAsset/annaphotographers (46).jpg'
import anna47 from '@/assets/galleryAsset/annaphotographers (47).jpg'
import anna48 from '@/assets/galleryAsset/annaphotographers (48).jpg'
import anna49 from '@/assets/galleryAsset/annaphotographers (49).jpg'
import anna50 from '@/assets/galleryAsset/annaphotographers (50).jpg'
import anna51 from '@/assets/galleryAsset/annaphotographers (51).jpg'
import anna52 from '@/assets/galleryAsset/annaphotographers (52).jpg'
import anna53 from '@/assets/galleryAsset/annaphotographers (53).jpg'
import anna54 from '@/assets/galleryAsset/annaphotographers (54).jpg'
import anna55 from '@/assets/galleryAsset/annaphotographers (55).jpg'
import anna56 from '@/assets/galleryAsset/annaphotographers (56).jpg'
import anna57 from '@/assets/galleryAsset/annaphotographers (57).jpg'
import anna58 from '@/assets/galleryAsset/annaphotographers (58).jpg'
import anna59 from '@/assets/galleryAsset/annaphotographers (59).jpg'
import anna60 from '@/assets/galleryAsset/annaphotographers (60).jpg'
import anna61 from '@/assets/galleryAsset/annaphotographers (61).jpg'
import anna62 from '@/assets/galleryAsset/annaphotographers (62).jpg'
import anna63 from '@/assets/galleryAsset/annaphotographers (63).jpg'
import anna64 from '@/assets/galleryAsset/annaphotographers (64).jpg'
import anna65 from '@/assets/galleryAsset/annaphotographers (65).jpg'
import anna66 from '@/assets/galleryAsset/annaphotographers (66).jpg'

const dialog = ref(false)
const heroAlt = ref([
  {
    src: 'pexels-andrea-piacquadio-3830745.jpg',
    heading: 'Galeria e fotove',
  },
])
const selectedImage = ref(null)
const photoArr = ref([
  { path: anna5 },
  { path: anna12 },
  { path: anna25 },
  { path: anna3 },
  { path: anna47 },
  { path: anna33 },
  { path: anna18 },
  { path: anna56 },
  { path: anna44 },
  { path: anna22 },
  { path: anna39 },
  { path: anna7 },
  { path: anna64 },
  { path: anna50 },
  { path: anna66 },
  { path: anna31 },
  { path: anna14 },
  { path: anna60 },
  { path: anna21 },
  { path: anna63 },
  { path: anna9 },
  { path: anna58 },
  { path: anna28 },
  { path: anna15 },
  { path: anna41 },
  { path: anna24 },
  { path: anna1 },
  { path: anna4 },
  { path: anna6 },
  { path: anna8 },
  { path: anna10 },
  { path: anna11 },
  { path: anna13 },
  { path: anna16 },
  { path: anna17 },
  { path: anna19 },
  { path: anna20 },
  { path: anna23 },
  { path: anna26 },
  { path: anna27 },
  { path: anna29 },
  { path: anna30 },
  { path: anna32 },
  { path: anna34 },
  { path: anna35 },
  { path: anna36 },
  { path: anna37 },
  { path: anna38 },
  { path: anna40 },
  { path: anna42 },
  { path: anna43 },
  { path: anna45 },
  { path: anna46 },
  { path: anna48 },
  { path: anna49 },
  { path: anna51 },
  { path: anna52 },
  { path: anna53 },
  { path: anna54 },
  { path: anna55 },
  { path: anna57 },
  { path: anna59 },
  { path: anna61 },
  { path: anna62 },

  { path: anna65 },
])
const showFullImg = (item) => {
  selectedImage.value = item.path
  dialog.value = true
}
</script>

<style scoped>
.img-style {
  cursor: pointer;
}
</style>
