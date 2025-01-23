<template>
  <section>
    <v-row no-gutters>
      <v-col cols="12">
        <HeroAlt :hero-alt="heroAlt" />
        <v-container>
          <v-row class="py-16">
            <v-col md="5" cols="12">
              <div class="text-h6 font-weight-bold mb-5 title-style">Our Office</div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-map-marker </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>ADRESA</v-list-item-title>
                    <v-list-item-subtitle
                      >Misto Mame, Rruga Thoma Koxhaj, Kashar 1001</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-email </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>EMAIL</v-list-item-title>
                    <v-list-item-subtitle
                      >anxhir@gmail.com</v-list-item-subtitle
                    >
                    <v-list-item-subtitle
                      >annaphotographers@yahoo.com</v-list-item-subtitle
                    >
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-phone </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>PHONE</v-list-item-title>
                    <v-list-item-subtitle>+355 69 749 6384</v-list-item-subtitle>
                    <!-- <v-list-item-subtitle>(650) 555-1234</v-list-item-subtitle> -->
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="text-h6 font-weight-bold mt-12 mb-5 title-style">
                Business Hours
              </div>
              <v-list two-line class="transparent">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>MONDAY to FRIDAY </v-list-item-title>
                    <v-list-item-subtitle>9am to 7pm</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <!-- <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>SATURDAY</v-list-item-title>
                    <v-list-item-subtitle>9am to 2pm</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="primary"> mdi-clock </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>SUNDAY</v-list-item-title>
                    <v-list-item-subtitle>cLOSED</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item> -->
              </v-list>
            </v-col>
            <v-col md="7" cols="12">
              <div class="text-h4 font-weight-black mb-8 title-style">Dergoni Email</div>

              <footerContactForm />
            </v-col>
          </v-row>
        </v-container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.1242974401672!2d19.772467459522165!3d41.31980078245276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031a222e48ff1%3A0x1d747a32a885ed0f!2sAnna%20Photographer!5e0!3m2!1sen!2s!4v1736976096277!5m2!1sen!2s"
          width="100%"
          height="600"
          frameborder="0"
          style="border: 0; display: block"
          allowfullscreen="true"
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import footerContactForm from '@/components/footerContactForm.vue'
import HeroAlt from '@/components/AboutUsHero.vue';
import { ref } from 'vue';
import ContactImg from '@/assets/contact.jpg'
const heroAlt= ref([
        {
          src: ContactImg,
          heading: ' Contact Us ',
        },
      ])


 const head = () => {
    return {
      title: 'Contact Us',
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
.title-style{
  font-family: "chonburi";

}
#footer-top {
  display: none !important;
}
</style>
