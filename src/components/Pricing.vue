<template>
  <section :class="$vuetify.theme.dark ? 'black' : 'white'" class="py-16">
    <v-container>
      <v-row>
        <v-col>
          <v-row no-gutters>
            <v-col class="text-center">
              <h2 class="text-h4 text-md-h3 text-center font-weight-black text-capitalize mb-4">
                Tabela e ofertave
              </h2>

              <p class="my-10 title">
                Më poshtë do të gjeni tabelën e plotë të çmimeve për setet fotografike, si dhe
                tabelën e çmimeve për dekorimet e eventeve.
              </p>
              <div class="text-center">
                <v-btn-toggle
                  v-model="planDuration"
                  active-class="primary darken-1"
                  borderless
                  mandatory
                  light
                  color="white"
                >
                  <v-btn value="priceAll"> Set fotografik </v-btn>
                  <v-btn value="yearly"> Dekor Eventi </v-btn>
                </v-btn-toggle>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mx-auto row-container" style="max-width: 1920px">
        <v-col v-for="(plan, ix) in plans" :key="`plan-${ix}`" cols="12" md="2">
          <v-card :color="plan.color" max-width="400" class="mx-auto card-style">
            <h3
              class="text-h4 text-center font-weight-black white--text pt-5"
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
            <v-row class="row-detail-container">
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
              <v-btn color="primary" rounded class="reservation-button"> Rezervo </v-btn>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      planDuration: 'priceAll',
      plans: [
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
      ],
    }
  },
}
</script>

<style scoped>
@media (min-width: 1310px) and (max-width: 1410px) {
  .card-style {
    max-height: 600px;
    justify-content: center !important;
  }
}
@media (max-width: 1310px) {
  .card-style {
    min-height: 550px;
    justify-content: center !important;
  }
  .row-detail-container {
  background-color: white;
  min-height: 450px !important;
}
}

.reservation-button {
  margin-top: -70px !important;
  min-width: 80% !important;
}
.card-style {
  max-height: 500px;
  justify-content: center !important;
}
.row-detail-container {
  background-color: white;
  min-height: 360px;
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
