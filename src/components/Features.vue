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
        <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="4" class="text-center">
          <v-avatar
            size="80"
            class="display-1 white font-weight-bold number-style mb-5"
            style="opacity: 1.15; background-color: white; font-size: xx-large"
            >{{ card.callout }}</v-avatar
          >

          <div class="title text-uppercase mt-1 mb-4 title-style" v-text="card.title"></div>

          <p v-text="card.text"></p>
          <v-row no-gutters>
            <v-col cols="12"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-row class="justify-center">
          <v-btn
            class="reserve-now-button-style"
            v-bind="activatorProps"
            x-large
            rounded
            color="white button-text mt-10 px-16"
          >
            <v-icon dark left> mdi-check-bold </v-icon>Rezervo tani setin tend
          </v-btn>
        </v-row>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card>
          <v-btn
            icon
            large
            variant="plain"
            @click="isActive.value = false"
            class="close-btn"
            style="position: absolute; top: 10px; right: 10px; z-index: 1"
          >

            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-card-title class="row-container-for-information-title-style">
            Kontakto per rezervim
          </v-card-title>
          <v-card-text>
            Plotesoni te dhenat e meposhtme per te kontaktuar me stafin e Anna Photographers.
          </v-card-text>

          <v-row class="row-container-for-information">
            <v-col>
              <v-text-field v-model="nameValue" label="Emer" variant="outlined"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="surnameValue"
                label="Mbiemer"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="row-container-for-information">
            <v-col>
              <v-text-field
                hide-spin-buttons="true"
                type="number"
                v-model="numberValue"
                label="Nr Tel"
                variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="packageValue"
                label="Paketa qe interesoheni"
                variant="outlined"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="row-container-for-information-text-area">
            <v-textarea v-model="moreMessage" label="Me teper..." variant="outlined"></v-textarea>
          </v-row>

          <v-card-actions class="reserve-button-style">
            <v-spacer></v-spacer>

            <v-btn
              prepend-icon="mdi-check-circle"
              variant="outlined"
              color="primary"
              @click="sendMessageToWhatssApp"
              >Rezervoni</v-btn
            >
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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
const packageValue = ref(null)
const surnameValue = ref(null)
const moreMessage = ref(null)

const sendMessageToWhatssApp = () => {
  console.log('respekte')
  if (!nameValue.value || !surnameValue.value || !numberValue.value || !packageValue.value) {
    alert('Ju lutem plotësoni të gjitha fushat!')
    return
  }
  console.log(
    `His/Her name is: ${nameValue.value},${numberValue.value},${packageValue.value},${surnameValue.value}`,
  )
  const message = `Pershendetje! Une jam ${nameValue.value} ${surnameValue.value},dhe isha i/e interesuar per te bere setin me paketen
  ${packageValue.value} Per te bere rezervimin ky eshte numri im i telefonit ${numberValue.value}. SHENIM: ${moreMessage.value}™`
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
.row-container-for-information-title-style {
  padding-left: 23px;
  margin-bottom: -10px;
  font-weight: 600;
  font-size: large;
}
.reserve-button-style {
  padding-right: 19px;
}
@media (max-width: 900px) {
  .reserve-now-button-style {
    width: 80%;
    align-items: center;
    justify-content: center;
  }
}
.row-container-for-information {
  padding-left: 20px;
  padding-right: 20px;
}
.row-container-for-information-text-area {
  padding-left: 32px;
  padding-right: 32px;
}
.title-style {
  font-weight: 600;
  font-size: large;
}
.button-text {
  color: #ef476f;
}
.number-style {
  color: #ef476f;
}
.section-container-style {
  background-color: #073b4c;
}
</style>
