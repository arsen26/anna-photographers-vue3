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
import annaDekor1 from '@/assets/decorGalleryAsset/annaDekor (1).heic'
import annaDekor2 from '@/assets/decorGalleryAsset/annaDekor (1).jpg'
import annaDekor3 from '@/assets/decorGalleryAsset/annaDekor (1).webp'

import annaDekor4 from '@/assets/decorGalleryAsset/annaDekor (2).heic'
import annaDekor5 from '@/assets/decorGalleryAsset/annaDekor (2).jpg'
import annaDekor6 from '@/assets/decorGalleryAsset/annaDekor (2).webp'

import annaDekor8 from '@/assets/decorGalleryAsset/annaDekor (3).jpg'
import annaDekor9 from '@/assets/decorGalleryAsset/annaDekor (3).webp'

import annaDekor10 from '@/assets/decorGalleryAsset/annaDekor (4).heic'
import annaDekor11 from '@/assets/decorGalleryAsset/annaDekor (4).jpg'
import annaDekor12 from '@/assets/decorGalleryAsset/annaDekor (4).webp'

import annaDekor13 from '@/assets/decorGalleryAsset/annaDekor (5).heic'
import annaDekor14 from '@/assets/decorGalleryAsset/annaDekor (5).jpg'
import annaDekor15 from '@/assets/decorGalleryAsset/annaDekor (5).webp'

import annaDekor16 from '@/assets/decorGalleryAsset/annaDekor (6).heic'
import annaDekor17 from '@/assets/decorGalleryAsset/annaDekor (6).jpg'
import annaDekor18 from '@/assets/decorGalleryAsset/annaDekor (6).webp'

import annaDekor19 from '@/assets/decorGalleryAsset/annaDekor (7).heic'
import annaDekor20 from '@/assets/decorGalleryAsset/annaDekor (7).jpg'
import annaDekor21 from '@/assets/decorGalleryAsset/annaDekor (7).webp'

import annaDekor22 from '@/assets/decorGalleryAsset/annaDekor (8).heic'
import annaDekor23 from '@/assets/decorGalleryAsset/annaDekor (8).jpg'
import annaDekor24 from '@/assets/decorGalleryAsset/annaDekor (8).webp'

import annaDekor25 from '@/assets/decorGalleryAsset/annaDekor (9).heic'
import annaDekor26 from '@/assets/decorGalleryAsset/annaDekor (9).jpg'
import annaDekor27 from '@/assets/decorGalleryAsset/annaDekor (9).webp'

import annaDekor28 from '@/assets/decorGalleryAsset/annaDekor (10).heic'
import annaDekor29 from '@/assets/decorGalleryAsset/annaDekor (10).jpg'
import annaDekor30 from '@/assets/decorGalleryAsset/annaDekor (10).webp'

import annaDekor31 from '@/assets/decorGalleryAsset/annaDekor (11).heic'
import annaDekor32 from '@/assets/decorGalleryAsset/annaDekor (11).jpg'
import annaDekor33 from '@/assets/decorGalleryAsset/annaDekor (11).webp'

import annaDekor34 from '@/assets/decorGalleryAsset/annaDekor (12).heic'
import annaDekor35 from '@/assets/decorGalleryAsset/annaDekor (12).jpg'
import annaDekor36 from '@/assets/decorGalleryAsset/annaDekor (12).webp'

import annaDekor37 from '@/assets/decorGalleryAsset/annaDekor (13).heic'
import annaDekor38 from '@/assets/decorGalleryAsset/annaDekor (13).jpg'
import annaDekor39 from '@/assets/decorGalleryAsset/annaDekor (13).webp'

import annaDekor40 from '@/assets/decorGalleryAsset/annaDekor (14).heic'
import annaDekor41 from '@/assets/decorGalleryAsset/annaDekor (14).jpg'
import annaDekor42 from '@/assets/decorGalleryAsset/annaDekor (14).webp'

import annaDekor43 from '@/assets/decorGalleryAsset/annaDekor (15).heic'
import annaDekor44 from '@/assets/decorGalleryAsset/annaDekor (15).jpg'
import annaDekor45 from '@/assets/decorGalleryAsset/annaDekor (15).webp'

import annaDekor46 from '@/assets/decorGalleryAsset/annaDekor (16).heic'
import annaDekor47 from '@/assets/decorGalleryAsset/annaDekor (16).jpg'
import annaDekor48 from '@/assets/decorGalleryAsset/annaDekor (16).webp'

import annaDekor49 from '@/assets/decorGalleryAsset/annaDekor (17).heic'
import annaDekor50 from '@/assets/decorGalleryAsset/annaDekor (17).jpg'
import annaDekor51 from '@/assets/decorGalleryAsset/annaDekor (17).webp'

import annaDekor52 from '@/assets/decorGalleryAsset/annaDekor (18).heic'
import annaDekor53 from '@/assets/decorGalleryAsset/annaDekor (18).jpg'
import annaDekor54 from '@/assets/decorGalleryAsset/annaDekor (18).webp'

import annaDekor55 from '@/assets/decorGalleryAsset/annaDekor (19).heic'
import annaDekor56 from '@/assets/decorGalleryAsset/annaDekor (19).jpg'
import annaDekor57 from '@/assets/decorGalleryAsset/annaDekor (19).webp'

import annaDekor58 from '@/assets/decorGalleryAsset/annaDekor (20).heic'
import annaDekor59 from '@/assets/decorGalleryAsset/annaDekor (20).jpg'
import annaDekor60 from '@/assets/decorGalleryAsset/annaDekor (20).webp'

import annaDekor62 from '@/assets/decorGalleryAsset/annaDekor (21).webp'
import annaDekor63 from '@/assets/decorGalleryAsset/annaDekor (22).webp'

import annaDekor64 from '@/assets/decorGalleryAsset/annaDekor (22).heic'
import annaDekor65 from '@/assets/decorGalleryAsset/annaDekor (23).heic'
import annaDekor66 from '@/assets/decorGalleryAsset/annaDekor (23).webp'

import annaDekor67 from '@/assets/decorGalleryAsset/annaDekor (24).webp'
import annaDekor68 from '@/assets/decorGalleryAsset/annaDekor (25).webp'
import annaDekor69 from '@/assets/decorGalleryAsset/annaDekor (26).webp'

import annaDekor70 from '@/assets/decorGalleryAsset/annaDekor (27).webp'
import annaDekor71 from '@/assets/decorGalleryAsset/annaDekor (28).webp'
import annaDekor72 from '@/assets/decorGalleryAsset/annaDekor (29).webp'



const dialog = ref(false)
const heroAlt = ref([
  {
    src: 'pexels-andrea-piacquadio-3830745.jpg',
    heading: 'Galeria e fotove',
  },
])
const selectedImage = ref(null)
const photoArr = ref([
  { path: annaDekor1, alt: 'anna dekor festa' },
  { path: annaDekor2, alt: 'anna dekor festa' },
  { path: annaDekor3, alt: 'anna dekor festa' },
  { path: annaDekor4, alt: 'anna dekor festa' },
  { path: annaDekor5, alt: 'anna dekor festa' },
  { path: annaDekor6, alt: 'anna dekor festa' },
  { path: annaDekor8, alt: 'anna dekor festa' },
  { path: annaDekor9, alt: 'anna dekor festa' },
  { path: annaDekor10, alt: 'anna dekor festa' },
  { path: annaDekor11, alt: 'anna dekor festa' },
  { path: annaDekor12, alt: 'anna dekor festa' },
  { path: annaDekor13, alt: 'anna dekor festa' },
  { path: annaDekor14, alt: 'anna dekor festa' },
  { path: annaDekor15, alt: 'anna dekor festa' },
  { path: annaDekor16, alt: 'anna dekor festa' },
  { path: annaDekor17, alt: 'anna dekor festa' },
  { path: annaDekor18, alt: 'anna dekor festa' },
  { path: annaDekor19, alt: 'anna dekor festa' },
  { path: annaDekor20, alt: 'anna dekor festa' },
  { path: annaDekor21, alt: 'anna dekor festa' },
  { path: annaDekor22, alt: 'anna dekor festa' },
  { path: annaDekor23, alt: 'anna dekor festa' },
  { path: annaDekor24, alt: 'anna dekor festa' },
  { path: annaDekor25, alt: 'anna dekor festa' },
  { path: annaDekor26, alt: 'anna dekor festa' },
  { path: annaDekor27, alt: 'anna dekor festa' },
  { path: annaDekor28, alt: 'anna dekor festa' },
  { path: annaDekor29, alt: 'anna dekor festa' },
  { path: annaDekor30, alt: 'anna dekor festa' },
  { path: annaDekor31, alt: 'anna dekor festa' },
  { path: annaDekor32, alt: 'anna dekor festa' },
  { path: annaDekor33, alt: 'anna dekor festa' },
  { path: annaDekor34, alt: 'anna dekor festa' },
  { path: annaDekor35, alt: 'anna dekor festa' },
  { path: annaDekor36, alt: 'anna dekor festa' },
  { path: annaDekor37, alt: 'anna dekor festa' },
  { path: annaDekor38, alt: 'anna dekor festa' },
  { path: annaDekor39, alt: 'anna dekor festa' },
  { path: annaDekor40, alt: 'anna dekor festa' },
  { path: annaDekor41, alt: 'anna dekor festa' },
  { path: annaDekor42, alt: 'anna dekor festa' },
  { path: annaDekor43, alt: 'anna dekor festa' },
  { path: annaDekor44, alt: 'anna dekor festa' },
  { path: annaDekor45, alt: 'anna dekor festa' },
  { path: annaDekor46, alt: 'anna dekor festa' },
  { path: annaDekor47, alt: 'anna dekor festa' },
  { path: annaDekor48, alt: 'anna dekor festa' },
  { path: annaDekor49, alt: 'anna dekor festa' },
  { path: annaDekor50, alt: 'anna dekor festa' },
  { path: annaDekor51, alt: 'anna dekor festa' },
  { path: annaDekor52, alt: 'anna dekor festa' },
  { path: annaDekor53, alt: 'anna dekor festa' },
  { path: annaDekor54, alt: 'anna dekor festa' },
  { path: annaDekor55, alt: 'anna dekor festa' },
  { path: annaDekor56, alt: 'anna dekor festa' },
  { path: annaDekor57, alt: 'anna dekor festa' },
  { path: annaDekor58, alt: 'anna dekor festa' },
  { path: annaDekor59, alt: 'anna dekor festa' },
  { path: annaDekor60, alt: 'anna dekor festa' },
  { path: annaDekor62, alt: 'anna dekor festa' },
  { path: annaDekor63, alt: 'anna dekor festa' },
  { path: annaDekor64, alt: 'anna dekor festa' },
  { path: annaDekor65, alt: 'anna dekor festa' },
  { path: annaDekor66, alt: 'anna dekor festa' },
  { path: annaDekor67, alt: 'anna dekor festa' },
  { path: annaDekor68, alt: 'anna dekor festa' },
  { path: annaDekor69, alt: 'anna dekor festa' },
  { path: annaDekor70, alt: 'anna dekor festa' },
  { path: annaDekor71, alt: 'anna dekor festa' },
  { path: annaDekor72, alt: 'anna dekor festa' }
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
