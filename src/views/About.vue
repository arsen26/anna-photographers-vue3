<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <AboutUsHero :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col cols="12"> </v-col>
            <v-col cols="12" md="6">
              <p>
                Anna Photographers është një biznes i themeluar me pasion dhe vizion. Eksperienca e
                tij fillon në 3 mars 2016, kur u themelua me qëllim të ofrimit të shërbimeve të
                fotografisë me një ndjesi të veçantë artistike.
              </p>
              <blockquote class="text-h4 pa-5 my-4 font-weight-thin">
                …The journey is never ending. There's always gonna be growth and improvemen, you
                just gotta take it all in and do what's right, continue to grow...
              </blockquote>
              <p>
                Në vitin 2019, Anna Photographers shënoi një hap të rëndësishëm duke shtuar një risi
                të re në gamën e shërbimeve të ofruara: dekorat festive.
              </p>
            </v-col>
            <v-col cols="12" md="6">
              <p>
                Ky inovacion e bëri Anna Photographers të njohur për më shumë se thjesht fotografi.
                Përveç punimeve të jashtëzakonshme fotografike, kompania filloi të ofronte edhe
                dekore të personalizuara për ngjarje të ndryshme. Kjo përfshin dekorime të veçanta
                për festat e lindjes, dasmat, ngjarje korporatave dhe çdo moment tjetër të
                rëndësishëm në jetën e klientëve. Ekipi i Anna Photographers, duke pasur përparësi
                inovacionin dhe përshtatjen me kërkesat e ndryshme të klientëve, ka zhvilluar një
                koleksion të gjerë të dekoracioneve festive. Klientët kanë mundësinë të zgjedhin nga
                gamë e gjerë e stileve dhe temave, duke siguruar që çdo ngjarje të mbahet në një
                atmosferë magjepsëse dhe të paharrueshme.
              </p>
              <p>
                Me këtë zgjerim të shërbimeve, Anna Photographers dëshiron të krijojë një përvojë të
                plotë për klientët e tyre, duke ofruar jo vetëm imazhe të mrekullueshme, por edhe
                një atmosferë festive dhe të kujdesit të plotë për çdo detaj. Nga fotografia te
                dekorat festive, Anna Photographers është destinacioni i përsosur për ata që
                dëshirojnë të mbajnë kujtimet e tyre në një formë të veçantë dhe të bukur.
              </p>
            </v-col>
          </v-row>
        </v-container>
        <Team :our-team="ourTeam" />

        <v-row v-for="(items, index) in ourVision" :key="index" no-gutters>
          <v-col cols="12" md="6" align-self="center">
            <v-img max-height="800" :src="items.photo" lazy-src="pexels-canva-studio-3277806.jpg">
            </v-img>
          </v-col>
          <v-col cols="12" md="6" align-self="center">
            <div class="pa-lg-16 pa-md-10 px-4 py-16">
              <h2 class="text-h3 text-center font-weight-black title-style">
                {{ items.title }}
              </h2>
              <h3 class="text-h5 text-uppercase font-weight-thin text-center my-8">
                {{ items.subtitle }}
              </h3>
              <p>
                {{ items.description }}
              </p>
            </div>
          </v-col>
        </v-row>
        <Timeline />
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import AboutUsHero from '@/components/AboutUsHero.vue'
import Team from '@/components/Team.vue'
import Timeline from '@/components/Timeline.vue'
import teamWork from '@/assets/teamwork.jpg'
import Flajdon from '@/assets/flajdon.jpg'
import Xheke from '@/assets/xhekja.jpg'
import Vovi from '@/assets/vovi.webp'
import WorkingPerson from '@/assets/workingPerson.jpg'
const heroAlt = ref([
  {
    src: teamWork,
    heading: ' Rreth nesh ',
  },
])
const ourTeam = ref([
  {
    name: 'Flajdon Cenollari',
    position: 'Photo Editor / Decor implementer',
    phone: '+1 (987) 1625346',
    email: 'flajdon@gmail.com',
    photo: Flajdon,
  },
  {
    name: 'Anxhela Shkurta Cenollari',
    position: 'Photograper / Decor planner / Photo-video editor',
    phone: '+1 (987) 5894684',
    email: 'anxhir.as@gmail.com',
    photo: Xheke,
  },
  {
    name: 'Rovina Shkurta Canollari',
    position: 'Photographer / Decor planner / PR',
    phone: '+1 (987) 6982456',
    email: 'rovinacanollari@gmail.com',
    photo: Vovi,
  },
])
console.log(ourTeam.value, '=>> our team')
const ourVision = ref([
  {
    title: 'Vizioni yne',
    subtitle: 'Cfare na pret ne te ardhmen?',
    photo: WorkingPerson,
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Doloremque laudantium, totam rem aperiam. ',
  },
])
const head = () => {
  return {
    title: 'About Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
      },
    ],
  }
}
</script>

<style scoped>
.title-style {
  font-family: 'chonburi';
  letter-spacing: 0.2rem !important;
  color: #030f0f;
}
</style>
