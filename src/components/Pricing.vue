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
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
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
                  <v-btn value="monthly"> Set fotografik </v-btn>
                  <v-btn value="yearly"> Dekor Eventi </v-btn>
                </v-btn-toggle>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mx-auto row-container" style="max-width: 1400px">
        <v-col v-for="(plan, ix) in plans" :key="`plan-${ix}`" cols="12" md="2">
          <v-hover v-slot="{ hover }">
            <v-card
              :elevation="hover ? 24 : plan.elevation"
              :color="plan.color"
              max-width="400"
              :class="hover ? 'zoom' : 'notzoom'"
              class="mx-auto transition-swing"
            >
              <h3
                class="text-h4 text-center font-weight-black white--text pt-5"
                v-text="plan.plan"
              ></h3>
              <v-card-text
                class="text-center subtitle-1 white--text py-2"
                v-text="plan.description"
              ></v-card-text>
              <h5 class="text-h5 font-weight-black text-center text-white pt-0">
                {{ plan.monthly }}
                <!-- <span class="subtitle-1"
                  >per {{ planDuration === 'monthly' ? 'month' : 'year' }}</span
                > -->
              </h5>
              <br>
              <v-row>
                  <v-list style="max-width: max-content;">
                <v-list-item v-for="(feature, ik) in plan.features" :key="`feature-${ik}`" dense>
                  <!-- <v-list-item-icon>
                    <v-icon>
                      {{ feature.icon }}
                    </v-icon>
                  </v-list-item-icon> -->
                  <template v-slot:prepend>
                    <v-icon class="icon-style" :icon="feature.icon"></v-icon>
                  </template>
                  <v-list-item-content>
                    <v-list-item-title
                      class="text-list-style"
                      v-text="feature.text"
                    > </v-list-item-title>
                  </v-list-item-content>
                  <v-divider></v-divider>
                </v-list-item>
                <v-list-item>
                  <v-btn color="primary" large block rounded class="mx-auto my-3"> Rezervo </v-btn>
                </v-list-item>
              </v-list>
              </v-row>

            </v-card></v-hover
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      planDuration: 'monthly',
      plans: [
        {
          plan: 'Small',
          elevation: 0,
          color: 'primary darken-1',
          description: 'Rekomandohet per cifte',
          monthly: '9.000 ALL',
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
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: '10 email addreses',
            // },
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: 'free domain with annual plan',
            // },
            // {
            //   icon: 'mdi-video-account',
            //   text: '4X pricessing power',
            // },

          ],
        },
        {
          plan: 'Medium',
          elevation: 0,
          color: 'green darken-2',
          description: 'Rekomandohet per familje',
          monthly: '12.000 ALL',
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
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: '10 email addreses',
            // },
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: 'free domain with annual plan',
            // },
            // {
            //   icon: 'mdi-video-account',
            //   text: '4X pricessing power',
            // },

          ],
        },
        {
          plan: 'Large',
          elevation: 0,
          color: 'orange darken-3',
          description: 'Rekomandohet per familje',
          monthly: '15.000 ALL',
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
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: 'free domain with annual plan',
            // },
            // {
            //   icon: 'mdi-video-account',
            //   text: '4X pricessing power',
            // },

          ],
        },
        {
          plan: 'Ekstra',
          elevation: 0,
          color: 'orange darken-3',
          description: 'Rekomandohet per detaje',
          monthly: '20.000 ALL',
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
            // {
            //   icon: 'mdi-video-account',
            //   text: '4X pricessing power',
            // },

          ],
        },
        {
          plan: 'Super',
          elevation: 0,
          color: 'orange darken-3',
          description: 'Rekomandohet per detaje',
          monthly: '30.000 ALL',
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
            // {
            //   icon: 'mdi-image-filter-frames',
            //   text: 'unlimited addreses',
            // },
            {
              icon: 'mdi-image-filter-frames',
              text: '30 Foto te lara(10x15)',
            },
            {
              icon: 'mdi-video-account',
              text: 'Video profesionale',
            }

          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.row-container {
  width: 100% !important;
  display: flex;
  justify-content: center;
}
.icon-style {
  display: inline-block !important  ;
  margin-bottom: 5px;
}

.text-list-style {
  /* font-size: 13px; */
  padding-top: 0px;
  white-space: normal;
  overflow-wrap: break-word;
  word-wrap: break-word; /* Mbështetje për shfletues më të vjetër */
}


</style>
