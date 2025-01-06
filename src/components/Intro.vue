<template>
  <section id="intro" class="py-16">
    <v-container>
      <v-responsive class="max-auto mx-auto text-center" max-width="600">
        <v-avatar color="#ef476f" size="70" class="mb-8">
          <v-icon x-large dark>mdi-camera</v-icon>
        </v-avatar>

        <h2 class="text-h4 text-md-h3 text-center font-weight-black mb-7">
          3 Arsye pse duhet te beni sa me shum fotografi
        </h2>
        <p class="title font-weight-light">
          Bërja e sa më shumë fotografi sjell një përvojë të pasur dhe
          emocionale. Përmes linzave të aparatit, hapesh ndaj një bote të re,
          grumbullon kujtime të paharrueshme, dhe shpreh shpirtin dhe njohuritë
          në mënyrë më të thellë. Fotografia është një mjet i shkëlqyeshëm për
          të shprehur krijimtarinë tuaj dhe për të ndarë me të tjerët bukuritë
          që zbuloni në udhën tuaj të përditshme.
        </p>
      </v-responsive>

      <v-row class="pt-12">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <v-row no-gutters>
            <v-col :cols="card.callout ? 9 : 12">
              <div class="pr-2">
                <div class="text--disabled" v-text="card.subtitle"></div>
                <h4
                  class="text-uppercase mt-1 mb-4"
                  style="letter-spacing: 0.15em"
                  v-text="card.title"
                ></h4>
                <p v-text="card.text"></p>
              </div>
            </v-col>
            <v-col v-if="card.callout" cols="2">
              <span
                class="text-h3 font-weight-bold"
                style="opacity: 0.2; color: #ef476f"
                >{{ card.callout }}</span
              >
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
      cards: [
        {
          title: 'Mbajtja e kujtimeve',
          subtitle: 'Kujtime',
          text: "Fotografia është një mjet i fuqishëm për të kapur momente të veçanta dhe për të mbajtur kujtimet e rëndësishme. Duke bërë foto, ti krijon një histori vizuale të jetës dhe aventurave të tua, që mund t'i shohësh dhe t'i ndajësh me të tjerët në të ardhmen.",
          callout: '01',
        },
        {
          title: 'Shprehja artistike',
          subtitle: 'Artistike',
          text: 'Fotografia është një formë e artit dhe mund të shërbejë si një mënyrë e shkëlqyeshme për të shprehur veten. Përmes kompozimit, ngjyrave, dritës, dhe detajeve të imazhit, mund të krijojmë imazhe unike dhe të bëjmë një deklaratë artistike.',
          callout: '02',
        },
        {
          title: 'Fotografia si mjet i shprehjes së emocioneve',
          subtitle: 'Emocione',
          text: 'Përmes fotografi të veçanta, mund të shprehim emocione, ndjenja dhe histori pa fjalë. Fotografia është një mënyrë e fuqishme për të përcjellë ndjenjat dhe për të krijuar lidhje emocionale me veten, të tjerët, dhe botën që na rrethon.',
          callout: '03',
        },
      ],
    }
  },
}
</script>
