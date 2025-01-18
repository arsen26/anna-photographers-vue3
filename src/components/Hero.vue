<template>
  <section id="hero" class="carousel-section">
    <v-carousel
      height="calc(102vh - 64px)"
      theme="light"
      cycle
      show-arrows-on-hover
      draggable="true"
      hide-delimiters
      class="carousel-container"
    >
      <v-carousel-item
        v-for="(carousel, carindex) in carouselsData"
        :key="carindex"
        :src="carousel.src"
        cover
        class="gradient-fill"
        width="100%"
      >
      <div
    class="carousel-background"
    :style="{ backgroundImage: `url(${carousel.src})` }"
  ></div>
        <v-container fluid>
          <div class="carousel-image" style="max-width: 600px; z-index: 2">
            <div class="text-h2 mb-3 text-sm-h3 text-h5 font-weight-black white--text">
              {{ carousel.heading.toUpperCase() }}
            </div>
            <p class="mb-5 white--text">{{ carousel.subHeading }}</p>
            <v-btn @click="sendToPhoneNumber" style="background-color: #ef476f; color: white" class="my-3">
              <v-icon left large color="white">mdi-phone</v-icon>
              Rezervoni tani
            </v-btn>
            <span class="mx-2 my-4"></span>
            <v-btn @click="sendToInstagram" text class="my-3" variant="outlined">
              <v-icon left large color="#ef476f">mdi-instagram</v-icon>
              Instagram
            </v-btn>
          </div>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import background1 from '@/assets/background1.jpg'

const carouselsData = ref([
  {
    src: background1,
    heading: 'Photoshooting Në Ambientet tona',
    subHeading:
      'Anna Photographers sjellë një eksperiencë unike të photoshooting-ut në studio, ku eleganca takon talentin. Në ambientet tona të veçanta, kujtimet tuaja bëhen pjesë e një historie të bukur vizuale.',
  },
  {
    src: background1,
    heading: ' Secili Moment Shndërrohet në Art ',
    subHeading:
      'Zhyteni në një botë të imazheve të paharrueshme me shërbimet fotografi të ofruara nga Anna Photographers. Studio jonë e veçantë ofron ambiente të përshtatshme për çdo lloj seti fotografik, duke bërë secilin moment të jetë një vepër arti.',
  },
  {
    src: background1,
    heading: ' Photoshooting ne ambjentet e studios sone ',
    subHeading:
      'Studio Fotografike Anna Photographers është një oaz i fotografisë, ku çdo moment bëhet një përrallë e bukur. Me pasion për detajet dhe shpirt artistik, ofrojmë një eksperiencë të jashtëzakonshme të photoshooting-ut. Ambientet tona të studios janë dizajnuar me kujdes për një atmosferë të rehatshme dhe inspiruese. Me teknologji moderne dhe ekip të talentuar, jemi të përkushtuar për të kapur shenjat më të bukura dhe emocionet më autentike të çdo momenti.',
  },
  {
    src: background1,
    heading: ' Editim te fotove tuaja deri ne detaje ',
    subHeading:
      'Studio Fotografike Anna Photographers është burimi juaj i besueshëm për një editim të fotos së jashtëzakonshëm. Me pasion dhe kujdes të veçantë, synojmë të përmirësojmë çdo detaj. Qëllimi ynë i vetëm është të sjellim kujtimet tuaja në nivele të reja të shkëlqimit përmes aftësisë sonë të pasur në editim fotografik.',
  },
])
const sendToPhoneNumber = () => {
  window.location.href = 'tel:+355696754600';
}

const sendToInstagram = () => {
  window.open('https://www.instagram.com/annaphotographers', '_blank');
}

</script>

<style scoped>
/* .carousel-background {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
} */


.carousel-image {
  color: white;
  position: absolute;
  left: 20%;
  top: 30%;
  z-index: 2;
}

.carousel-section {
  margin-top: 5px;
}
.gradient-fill {
  background: linear-gradient(to right, rgba(3, 12, 41, 0.75), rgba(5, 11, 31, 0.65));
  position: relative;
  overflow: hidden;
}
</style>
