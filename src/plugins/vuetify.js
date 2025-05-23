// src/plugins/vuetify.js
import 'vuetify/styles' // Importo stilet e Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // Për ikona Material Design
import { en } from 'vuetify/locale'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Ikonat default
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    defaultLocale: 'en',
    messages: { en }, // Mund të shtosh gjuhë të tjera këtu
  },
  theme: {
    defaultTheme: 'light',
    colors: {
      cyan: '#00BCD4',
      green: '#4CAF50',
      pink: '#E91E63',
      amber: '#FFC107',
      orange: '#FF9800',
    },
  },
})
