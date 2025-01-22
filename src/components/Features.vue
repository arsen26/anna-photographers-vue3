<template>
  <section class="section-container-style darken-1 white--text py-16">
    <v-container>
      <v-row style="color: white">
        <v-col class="text-center">
          <h2 class="text-h4 text-md-h3 text-center font-weight-black">3 Arsye</h2>
          <div class="text-h5 text-md-h4 text-center font-weight-black py-3 mb-10">
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
const nameValue = ref(null)
const numberValue = ref(null)
const dateToSend = ref(null)
const packageValue = ref(null)
const surnameValue = ref(null)
const moreMessage = ref(null)
const sendToWaDate = ref(null)
// const formatDate = (date) => {
//   if (!date) return '' // Kontrolloni nëse data është null ose undefined
//   const d = new Date(date)
//   if (isNaN(d.getTime())) return '' // Kontrolloni nëse data është e vlefshme
//   const day = String(d.getDate()).padStart(2, '0')
//   // console.log(day)
//   const month = String(d.getMonth() + 1).padStart(2, '0') // Muajt janë zero-indeksuar
//   // console.log(month)

//   const year = d.getFullYear()
//   // console.log(year)

//   dateToSend.value = `${day}/${month}/${year}`
//   sendToWaDate.value = dateToSend.value
//   // console.log(dateToSend.value)
// }

const sendMessageToWhatssApp = () => {
  console.log('respekte')
  if (!nameValue.value || !surnameValue.value || !numberValue.value || !packageValue.value) {
    alert('Ju lutem plotësoni të gjitha fushat!')
    return
  }
  // console.log(
  //   `His/Her name is: ${nameValue.value},${numberValue.value},${packageValue.value},${surnameValue.value}`,
  // )
  const message = `Pershendetje! Une jam ${nameValue.value} ${surnameValue.value},dhe isha i/e interesuar per te bere setin me paketen
  ${packageValue.value}, ne date ${sendToWaDate.value}. Per te bere rezervimin ky eshte numri im i telefonit ${numberValue.value}. SHENIM: ${moreMessage.value}™`
  const phoneNumber = '+355697496384'
  if (
    (numberValue.value.includes('+') && numberValue.value.length > 12) ||
    (!numberValue.value.includes('+') && numberValue.value.length > 10)
  ) {
    alert('Numri që keni vendosur nuk është i saktë')
  } else {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }
}
</script>

<style scoped>

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
