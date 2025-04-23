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
                :alt="n.alt"
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
  { path: anna5 , alt: 'Anna Photographers shtatezani' },
  { path: anna12 , alt: 'Anna Photographers' },
  { path: anna25 , alt: 'Anna Photographers' },
  { path: anna3 , alt: 'Anna Photographers family' },
  { path: anna47 , alt: 'Anna Photographers' },
  { path: anna33 , alt: 'Anna Photographers' },
  { path: anna18 , alt: 'Anna Photographers' },
  { path: anna56 , alt: 'Anna Photographers wedding' },
  { path: anna44 , alt: 'Anna Photographers' },
  { path: anna22 , alt: 'Anna Photographers' },
  { path: anna39 , alt: 'Anna Photographers wedding' },
  { path: anna7 , alt: 'Anna Photographers' },
  { path: anna64 , alt: 'Anna Photographers' },
  { path: anna50 , alt: 'Anna Photographers' },
  { path: anna66 , alt: 'Anna Photographers' },
  { path: anna31 , alt: 'Anna Photographers' },
  { path: anna14 , alt: 'Anna Photographers' },
  { path: anna60 , alt: 'Anna Photographers' },
  { path: anna21 , alt: 'Anna Photographers' },
  { path: anna63 , alt: 'Anna Photographers' },
  { path: anna9 , alt: 'Anna Photographers' },
  { path: anna58 , alt: 'Anna Photographers' },
  { path: anna28 , alt: 'Anna Photographers' },
  { path: anna15 , alt: 'Anna Photographers' },
  { path: anna41 , alt: 'Anna Photographers' },
  { path: anna24 , alt: 'Anna Photographers' },
  { path: anna1 , alt: 'Anna Photographers' },
  { path: anna2 , alt: 'Anna Photographers familje' },
  { path: anna4 , alt: 'Anna Photographers shtatezani' },
  { path: anna6 , alt: 'Anna Photographers' },
  { path: anna8 , alt: 'Anna Photographers' },
  { path: anna10 , alt: 'Anna Photographers' },
  { path: anna11 , alt: 'Anna Photographers' },
  { path: anna13 , alt: 'Anna Photographers' },
  { path: anna16 , alt: 'Anna Photographers' },
  { path: anna17 , alt: 'Anna Photographers' },
  { path: anna19 , alt: 'Anna Photographers' },
  { path: anna20 , alt: 'Anna Photographers' },
  { path: anna23 , alt: 'Anna Photographers' },
  { path: anna26 , alt: 'Anna Photographers' },
  { path: anna27 , alt: 'Anna Photographers' },
  { path: anna29 , alt: 'Anna Photographers' },
  { path: anna30 , alt: 'Anna Photographers' },
  { path: anna32 , alt: 'Anna Photographers' },
  { path: anna34 , alt: 'Anna Photographers' },
  { path: anna35 , alt: 'Anna Photographers cift' },
  { path: anna36 , alt: 'Anna Photographers cift' },
  { path: anna37 , alt: 'Anna Photographers dhenderi dhe nusja' },
  { path: anna38 , alt: 'Anna Photographers cift' },
  { path: anna40 , alt: 'Anna Photographers' },
  { path: anna42 , alt: 'Anna Photographers' },
  { path: anna43 , alt: 'Anna Photographers' },
  { path: anna45 , alt: 'Anna Photographers' },
  { path: anna46 , alt: 'Anna Photographers' },
  { path: anna48 , alt: 'Anna Photographers' },
  { path: anna49 , alt: 'Anna Photographers' },
  { path: anna51 , alt: 'Anna Photographers' },
  { path: anna52 , alt: 'Anna Photographers' },
  { path: anna53 , alt: 'Anna Photographers' },
  { path: anna54 , alt: 'Anna Photographers wedding' },
  { path: anna55 , alt: 'Anna Photographers wedding' },
  { path: anna57 , alt: 'Anna Photographers wedding' },
  { path: anna59 , alt: 'Anna Photographers' },
  { path: anna61 , alt: 'Anna Photographers' },
  { path: anna62 , alt: 'Anna Photographers' },
  { path: anna65 , alt: 'Anna Photographers' },
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
