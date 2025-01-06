<template>
  <section
    :class="$vuetify.theme.dark ? 'grey darken-4' : 'grey lighten-4'"
    class="py-16"
  >
    <v-container fluid class="text-center">
      <v-row>
        <v-col>
          <h2 class="text-h4 text-sm-h3 text-capitalize font-weight-black mb-4">
            Skuadra
          </h2>
          <p>Kush përkujdeset për detajet dhe përsosmëritë?</p>
          <div>
            <p>
              Ekipi ynë i profesionistëve është përgjegjës për të siguruar që
              çdo detaj të jetë i përsosur.
            </p>
            <p>
              Ne merremi me çdo aspekt të fotografive tuaja dhe dekorit, duke u
              siguruar që çdo imazh dhe çdo element dekorativ të jetë i
              përshtatur dhe i realizuar në mënyrën më të mirë të mundshme.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item, i) in ourTeam" :key="`person-${i}`">
          <v-sheet
            class="py-12 px-6"
            style="height: 550px !important; padding-bottom: 400px !important"
            outlined
            shaped
          >
            <v-avatar size="240"
              ><img
                :src="`/team/${item.photo}`"
                :lazy-src="`team/${item.photo}`"
                alt="John"
            /></v-avatar>
            <div class="text-h5 text-uppercase font-weight-black mt-6 mb-2">
              {{ item.name }}
            </div>
            <div class="text--disabled text-uppercase">
              {{ item.position }}
            </div>
            <div class="text-h6 font-weight-black mt-8">{{ item.phone }}</div>
            <div
              class="subtitle-1 mt-3 email-at-teammember"
              @click="sendToEmail(item.email)"
            >
              {{ item.email }}
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  props: {
    ourTeam: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    sendToEmail(person) {
      // console.log(person, '=-=>> person')
      window.open(`mailto:${person.email}`)
    },
  },
}
</script>

<style scoped>
.email-at-teammember {
  cursor: pointer;
}
</style>
