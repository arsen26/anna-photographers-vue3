<template>
  <section class="section-container-style darken-1 white--text py-16">
    <v-container>
      <v-row style="color: white">
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black title-style">3 Arsye</h2>
          <div class="text-h5 text-md-h4 text-center font-weight-black py-3 mb-10 title-style">
            Pse duhet te na zgjidhni ne?
          </div>
        </v-col>
      </v-row>
      <v-row style="color: white">
        <v-col
          v-for="(card, index) in cards"
          :key="index"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-avatar
            size="80"
            class="display-1 white font-weight-bold number-style mb-5"
            style="opacity: 1.15; background-color: white; font-size: xx-large"
          >
            {{ card.callout }}
          </v-avatar>

          <div
            class="title text-uppercase mt-1 mb-4 title-style"
            v-text="card.title"
          ></div>

          <p v-text="card.text"></p>
        </v-col>
      </v-row>

      <!-- Button to open the dialog -->
      <v-row class="justify-center">
        <v-btn
          class="reserve-now-button-style"
          @click="isDialogOpen = true"
          x-large
          rounded
          color="white button-text mt-10 px-16"
        >
          <v-icon dark left>mdi-check-bold</v-icon>
          Rezervo tani setin tend
        </v-btn>
      </v-row>

      <!-- Dialog -->
      <v-dialog v-model="isDialogOpen" max-width="600">
        <ContactUsDialog
          :title="'Set Fotografik'"
          @close="isDialogOpen = false"
        />
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { VDateInput } from 'vuetify/labs/VDateInput'
import ContactUsDialog from '@/components/ContactUsDialog.vue'
const selectedPackage = ref('')

const isDialogOpen = ref(false)

const cards = ref([
  {
    title: 'Krijimi i Kujtimeve të Paharrueshme',
    subtitle: 'Best Productivity',
    text: 'Anna Photographers ofron një eksperiencë të jashtëzakonshme për të kapur momentet më të rëndësishme të jetës së klientëve nëpërmjet fotografive të profesionalizuara. Me një angazhim për përkushtim dhe një aftësi të lartë redaktimi, ne sigurojmë që çdo foto të shprehë bukurinë dhe emocionet e çastit.',
    callout: '1',
  },
  {
    title: 'Organizimi i Eventeve me Stil dhe Elegancë',
    subtitle: 'Special Offers',
    text: 'Nëse klientët dëshirojnë të bëjnë një ngjarje të tyre të veçantë, Anna Photographers është zgjedhja e duhur. Ne ofrojmë shërbim fotografik në evente të ndryshme, duke përfshirë dasmat, festat, dhe ngjarjet korporative. Përveç fotografisë së shkëlqyeshme, ofrojmë ndihmë në organizimin dhe dekorimin e eventeve, duke krijuar atmosfera të mrekullueshme dhe të paharrueshme.',
    callout: '2',
  },
  {
    title: 'Cilesi dhe cmime te arsyeshme',
    subtitle: 'Income Flow',
    text: 'Anna Photographers ofron një ambient të veçantë, një studjo fotografike e pajisur me teknologji të fundit për të krijuar sete të personalizuara për fotografi unike. Përkrahur nga një ekip profesionist dhe me aftësi të jashtëzakonshme në editim, ne shndërrojmë çdo set fotografik në një eksperiencë të veçantë. Cmimet e arsyeshme bëjnë që ky eksperiencë të jetë e arritshme për të gjithë ata që dëshirojnë të ruajnë kujtime të paharrueshme nga momentet e tyre të veçanta.',
    callout: '3',
  },
])


</script>

<style scoped>
.title-style{
  font-family: "chonburi";

}
@media (max-width: 900px) {
  .reserve-now-button-style {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
}

.title-style {
  font-weight: 600;
  font-size: large;
}
.number-style {
  color: #ef476f;
}
.section-container-style {
  background-color: #073b4c;
}
</style>
