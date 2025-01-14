<template>
  <section id="hero">
    <v-row>
      <v-img
        v-for="(item, i) in heroAlt"
        :key="i"
        height="30vh"
        width="100%"
        :src="item.src"
        :aspect-ratio="1"
        cover
        class="gradient-fill v-img"
      >
        <v-row class="text-container">
          <v-col>
            <h1 class="text-style text-md-h2 text-sm-h3 text-h4 font-weight-black text-center">
              {{ item.heading.toUpperCase() }}
            </h1>
          </v-col>
        </v-row>
      </v-img>
    </v-row>
    <v-row>
      <span> test </span>
    </v-row>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'

// Definoni props-in dhe bëjeni atë reactive
const props = defineProps({
  heroAlt: {
    type: Array,
    default: () => [],
  },
})

// Hero data tani është reactive dhe mund të përdoret direkt
const heroAlt = ref(props.heroAlt)
</script>

<style>
.gradient-fill .v-responsive__content {
  background: rgb(0, 0, 0);
  background: linear-gradient(to right, rgba(3, 12, 41, 0.7), rgba(5, 11, 31, 0.7));
}
.text-style {
  color: white;
}
.text-container {
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
