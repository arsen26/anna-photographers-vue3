<template>
  <section id="timeline" class="py-16">
    <v-container>
      <h2 class="text-h3 text-center font-weight-black mb-8">Rrugetimi yne</h2>
      <template>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2
                :class="`headline font-weight-light mb-4 ${year.color}--text`"
              >
                {{ year.title }}
              </h2>
              <div></div>
              {{ year.text }}
            </div>
          </v-timeline-item>
        </v-timeline>
      </template>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      years: [
        {
          title: 'Themelimi',
          color: 'cyan',
          year: '2016',
          text: 'Viti 2016 ishte një kapitull i rëndësishëm në rrugën tonë, në krijimin e "Anna Photographers". E themeluam me një pasion të vecant për fotografinë, ndërkohë që çdo hap i bërë ishte një sfidë dhe veshtiresi e re. Ambjentet e vogla të studjos na bënë të punonim me përpikmëri dhe inovacion. Në këtë vit, përkushtimi ynë për të ofruar shërbime të jashtëzakonshme filloi të krijonte themelet e një rrugëtimi të shkëlqyer në botën e fotografisë.',
        },
        {
          title: 'Ne fillimet e rrugetimit',
          color: 'green',
          year: '2018',
          text: 'Viti 2018 për Anna Photographers ishte një periudhë e rëndësishme zhvillimi. Kemi zgjeruar studion dhe përmirësuar infrastrukturën tonë për të ofruar një shërbim akoma më profesjonal dhe personalizuar për klientët tanë. Në këtë vit, fokusuam në krijimin e një mjedisi më të gjerë dhe të përshtatshëm për të kapur momentet më të veçanta. Ky hap na lejoi të rrisim cilësinë dhe përmbajtjen e shërbimeve tona, duke bërë studion tonë një destinacion më të pëlqyer për klientët e kërkuar.',
        },
        {
          title: 'Përparim dhe Inovacion',

          color: 'pink',
          year: '2019',
          text: 'Në vitin 2019, Anna Photographers theu kufijtë e zakonshme të një studio fotografie, duke hyrë në botën e dekorimeve festive.  Tani, përveç fotografisë së jashtëzakonshme, ofrojmë gjithashtu mundësinë e përshtatjes së ambientit me dekorime të personalizuara për ngjarje të ndryshme. Kjo zgjatje e shërbimeve tona tregon angazhimin tonë për përmirësimin e përvojës së klientit, duke e bërë Anna Photographers një destinacion të plotë për festat dhe ngjarjet e tyre.',
        },
        {
          title: 'Hapësira te reja dhe komoditet per klientet',

          color: 'amber',
          year: '2021',
          text: 'Në vitin 2021, Anna Photographers shënoi një tjetër hap të rëndësishëm në rrugën e saj të suksesit duke zgjeruar edhe më shumë hapësirën e studjos së saj fotografike. Ky vit ishte një periudhë e rritjes dhe përmirësimit të infrastrukturës sonë.Zgjerimi i ambjenteve të studjos solli me vete një shkallë më të lartë komoditeti për klientët, duke krijuar një ambient më i gjerë dhe funksional. Kjo investim na lejoi të eksplorojmë mundësitë e kreativitetit dhe të punojmë me projekte më të gjera dhe komplekse. Studion tonë e rritur tani ofron një shembull të vërtetë të përshtatshmërisë dhe përmirësimit vazhdueshëm që Anna Photographers ka sjellë në industrinë e fotografisë.',
        },
        {
          title:
            'Eksperience e paharrueshme 2016-2023 dhe premtimet e reja per 2024',

          color: 'orange',
          year: '2023',
          text: 'Me krenari shpallim se në vitin 2023, kemi vazhduar të rrisim cilesinë e shërbimit tonë në të gjitha fushat, duke përfshirë dekorimet, setet fotografike dhe përpunimin e imazheve në mënyrë të veçantë. Kjo është rezultat i një përkushtimi të vazhdueshëm për të përmbushur dhe tejkaluar pritjet e klientëve tanë. Premtojmë që shërbimet tona do të jenë edhe më të permisura dhe inovative. Përmirësimet në teknologji dhe njohuritë tona të thelluara do të ndikojnë pozitivisht në çdo aspekt të punës sonë, duke siguruar që klientët tanë të përfitojnë më shumë nga shërbimet tona se kurrë më parë.',
        },
      ],
    }
  },
}
</script>
