<template>
  <section :class="$vuetify.theme.dark ? 'black' : 'white'" class="py-16">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col class="text-center">
              <h2
                class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4 title-style"
              >
                Tabela e ofertave
              </h2>

              <h4 class="my-10 title">
                Më poshtë do të gjeni tabelën e plotë të çmimeve për setet fotografike, si dhe
                tabelën e çmimeve për dekorimet e eventeve.
              </h4>
              <p v-if="showExplenation" style="width: 65%" class="my-5 mx-auto title">
                Në të gjitha skenografitë përfshihen veshje për vajza 0-6 vjeçe, veshje për djem 0-3
                vjeç, si dhe veshje për shtatzëna dhe familjarët për skenat festive. Në skenografi
                marrin pjesë fëmijët dhe prindërit, ndërsa për familjarët e tjerë ka një pagesë
                shtesë prej 1000 ALL, duke përfshirë edhe një foto të edituar në Photoshop.
              </p>
              <p v-else style="width: 65%" class="my-5 mx-auto title">
                Paketat qe jane shfaqur me poshte jane paketat baze qe Anna Dekor ofron per ju por
                detajet e seciles pakete mund te modifikohen ne baze te prefrences suaj.
              </p>
              <div class="text-center">
                <v-btn-toggle
                  v-model="planDuration"
                  active-class="primary darken-1"
                  borderless
                  mandatory
                  light
                  @update:model-value="changePackage(planDuration)"
                  color="white"
                >
                  <v-btn value="photography"> Set fotografik </v-btn>
                  <v-btn value="event"> Dekor Eventi </v-btn>
                </v-btn-toggle>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mx-auto row-container" style="max-width: 1920px">
        <v-col
          v-for="(plan, ix) in planDuration === 'photography' ? plans : event"
          :key="`plan-${ix}`"
          cols="12"
          md="2"
        >
          <v-card :color="plan.color" max-width="400" class="mx-auto" :class="cardClass">
            <h3
              class="text-h4 text-center font-weight-black text-white pt-5"
              v-text="plan.plan"
            ></h3>
            <!-- <v-card-text
              class="text-center subtitle-1 white--text py-2"
              v-text="plan.description"
            ></v-card-text> -->
            <h5 class="text-h5 font-weight-black text-center text-white pt-0">
              {{ plan.priceAll }}
            </h5>
            <br />
            <v-row :class="rowDetailContainer">
              <v-list>
                <v-list-item v-for="(feature, ik) in plan.features" :key="`feature-${ik}`" dense>
                  <template v-slot:prepend>
                    <v-icon class="icon-style" :icon="feature.icon"></v-icon>
                  </template>
                  <v-list-item-content>
                    <v-list-item-title class="text-list-style" v-text="feature.text">
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-divider></v-divider>
                </v-list-item>
              </v-list>
            </v-row>
            <v-row class="justify-center">
              <v-btn
                @click="openDialog(plan)"
                color="primary"
                rounded
                class="reservation-button"
              >
                Rezervo
              </v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="isDialogOpen" max-width="600">
        <ContactUsDialog
          :title="planDuration == 'photography' ? dialogTitlePhotography : dialogTitleEvent"
          @close="isDialogOpen = false"
          :packageValue = "planDuration == 'photography' ? dialogTitlePhotography : dialogTitleEvent"
          :packageType = "choosedTitle"
          />
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ref, onMounted } from 'vue'
const showExplenation = ref(true)
const planDuration = ref('photography')
import ContactUsDialog from '@/components/ContactUsDialog.vue'
const cardClass = ref('card-style-for-photography')
const rowDetailContainer = ref('row-detail-container-photo')

const isDialogOpen = ref(false)
const dialogTitlePhotography = ref('Set fotografik')
const dialogTitleEvent = ref('Dekor eventi')
const choosedTitle = ref(null)
const openDialog = (item) =>{
  console.log(item)
  choosedTitle.value = `Paketa: ${item.plan}`
  isDialogOpen.value=true
}
const plans = ref([
  {
    plan: 'Small',
    elevation: 0,
    color: 'primary darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '9.000 ALL',
    yearly: '$100',
    features: [
      {
        icon: ' mdi-image',
        text: '100 Foto (shkrepje)',
      },
      {
        icon: 'mdi-image-edit',
        text: '8 Foto te edituara',
      },
      {
        icon: 'mdi-arrange-bring-to-front',
        text: '2 Skenografi',
      },
    ],
  },
  {
    plan: 'Medium',
    elevation: 0,
    color: 'green darken-2',
    description: 'Rekomandohet per familje',
    priceAll: '12.000 ALL',
    yearly: '$400',
    features: [
      {
        icon: ' mdi-image',
        text: '150 foto (shkrepje)',
      },
      {
        icon: 'mdi-image-edit',
        text: '12 Foto te edituara',
      },
      {
        icon: 'mdi-arrange-bring-to-front',
        text: '3 Skenografi',
      },
    ],
  },
  {
    plan: 'Large',
    elevation: 0,
    color: 'orange darken-3',
    description: 'Rekomandohet per familje',
    priceAll: '15.000 ALL',
    yearly: '$1000',
    features: [
      {
        icon: ' mdi-image',
        text: '250 foto (shkrepje)',
      },
      {
        icon: 'mdi-image-edit',
        text: '15 Foto te edituara',
      },
      {
        icon: 'mdi-arrange-bring-to-front',
        text: '4 Skenografi',
      },
      {
        icon: 'mdi-image-filter-frames',
        text: '10 Foto te printuara (10x15)',
      },
    ],
  },
  {
    plan: 'Ekstra',
    elevation: 0,
    color: 'orange darken-3',
    description: 'Rekomandohet per detaje',
    priceAll: '20.000 ALL',
    yearly: '$1000',
    features: [
      {
        icon: ' mdi-image',
        text: '500 foto (shkrepje)',
      },
      {
        icon: 'mdi-image-edit',
        text: '25 Foto te edituara',
      },
      {
        icon: 'mdi-arrange-bring-to-front',
        text: 'Skenografi pa limit',
      },
      {
        icon: 'mdi-image-filter-frames',
        text: '5 foto te printuara (15x20)',
      },
      {
        icon: 'mdi-image-filter-frames',
        text: '10 foto te printuara (10x15)',
      },
    ],
  },
  {
    plan: 'Super',
    elevation: 0,
    color: 'orange darken-3',
    description: 'Rekomandohet per detaje',
    priceAll: '30.000 ALL',
    yearly: '$1000',
    features: [
      {
        icon: ' mdi-image',
        text: 'Foto pa limit (shkrepje)',
      },
      {
        icon: 'mdi-image-edit',
        text: '25 Fotot te edituara',
      },
      {
        icon: 'mdi-arrange-bring-to-front',
        text: 'Skenografi pa limit',
      },
      {
        icon: 'mdi-image-filter-frames',
        text: '30 Foto te lara(10x15)',
      },
      {
        icon: 'mdi-video-account',
        text: 'Video profesionale 4k',
      },
    ],
  },
])
const event = ref([
  {
    plan: 'Paketa 1',
    elevation: 0,
    color: 'primary darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '15.000 ALL',
    features: [
      {
        icon: '  mdi-shape-square-plus',
        text: 'Dekor (Baner, tullumbace,emer)',
      },
    ],
  },
  {
    plan: 'Paketa 2',
    elevation: 0,
    color: 'green darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '25.000 ALL',
    features: [
      {
        icon: ' mdi-shape-square-plus',
        text: 'Dekor',
      },
      {
        icon: ' mdi-image',
        text: 'Foto ne studio',
      },
      {
        icon: ' mdi-table-picnic',
        text: 'Dekor tavoline',
      },
      {
        icon: ' mdi-image-album',
        text: '10 foto te lara',
      },
    ],
  },
  {
    plan: 'Paketa 3',
    elevation: 0,
    color: 'green darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '30.000 ALL',
    features: [
      {
        icon: ' mdi-shape-square-plus',
        text: 'Dekor',
      },
      {
        icon: ' mdi-image',
        text: 'Foto ne event',
      },
      {
        icon: ' mdi-image',
        text: 'Foto ne studio',
      },
      {
        icon: 'mdi-table-picnic',
        text: 'Dekor tavoline',
      },
      {
        icon: 'mdi-image-album',
        text: '10 foto te lara',
      },
    ],
  },
  {
    plan: 'Ekstra',
    elevation: 0,
    color: 'orange darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '55.000 ALL',
    features: [
      {
        icon: '  mdi-shape-square-plus',
        text: 'Dekor',
      },
      {
        icon: ' mdi-image',
        text: 'Foto ne event',
      },
      {
        icon: ' mdi-image',
        text: 'Foto ne studio',
      },
      {
        icon: ' mdi-table-picnic',
        text: 'Dekor tavoline',
      },
      {
        icon: ' mdi-image-album',
        text: '10 foto te lara',
      },
    ],
  },
  {
    plan: 'New',
    elevation: 0,
    color: 'orange darken-1',
    description: 'Rekomandohet per cifte',
    priceAll: '700 EURO',
    features: [
      {
        icon: ' mdi-shape-square-plus',
        text: 'Dekor',
      },
      {
        icon: ' mdi-image-multiple',
        text: 'Foto ne event',
      },
      {
        icon: ' mdi-image-multiple',
        text: 'Foto ne studio',
      },
      {
        icon: ' mdi-table-picnic',
        text: 'Dekor tavoline',
      },
      {
        icon: 'mdi-image-edit',
        text: 'Fotopjate e personalizuar',
      },
      {
        icon: 'mdi-party-popper',
        text: 'Animator',
      },
      {
        icon: ' mdi-video-4k-box',
        text: 'Video 4K',
      },
      {
        icon: 'mdi-image-album',
        text: '10 foto te lara',
      },
    ],
  },
])

// const cardClass = computed(()=>{
//   if(planDuration=='photography'){
//     console.log('eshte per foto')
//     return 'card-style-for-photography'
//   }else{
//     console.log('nuk eshte per foto')
//     return 'card-style-for-event'
//   }
// })

const changePackage = (item) => {
  console.log('u ndr', item)
  if (item == 'event') {
    cardClass.value = 'card-style-for-event'
    rowDetailContainer.value = 'row-detail-container-event'
    console.log(rowDetailContainer.value)
    showExplenation.value = false
  } else {
    cardClass.value = 'card-style-for-photography'
    rowDetailContainer.value = 'row-detail-container-photo'
    console.log(rowDetailContainer.value)
    showExplenation.value = true
  }
}
</script>

<style scoped>
.title-style {
  font-family: 'chonburi';
  letter-spacing: 0.2rem !important;
}
@media (min-width: 1310px) and (max-width: 1410px) {
  .card-style-for-photography {
    max-height: 600px;
    justify-content: center !important;
  }
}
@media (max-width: 1310px) {
  .card-style-for-photography {
    min-height: 550px;
    justify-content: center !important;
  }
  .row-detail-container-photo {
    background-color: white;
    min-height: 450px !important;
  }
}

.reservation-button {
  margin-top: -70px !important;
  min-width: 80% !important;
}
.card-style-for-photography {
  max-height: 500px;
  justify-content: center !important;
}

.card-style-for-event {
  max-width: 700px !important;
  background-color: red;
}

.row-detail-container-photo {
  background-color: white;
  min-height: 380px;
}
.row-detail-container-event {
  background-color: white;
  min-height: 480px;
}
.row-container {
  width: 100% !important;
  display: flex;
  min-width: 320px !important;
  justify-content: center;
}
.icon-style {
  display: inline-block !important  ;
  margin-bottom: 5px;
}

.text-list-style {
  padding-top: 0px;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word;
}
</style>
