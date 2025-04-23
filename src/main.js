// import './assets/main.css';
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // Vuetify styles
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Sigurohuni që është importuar stili i ikonave MDI

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Krijo Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Krijo aplikacionin dhe regjistro Vuetify
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
