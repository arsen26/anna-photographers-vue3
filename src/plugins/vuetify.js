// src/plugins/vuetify.js
import 'vuetify/styles'; // Importo stilet e Vuetify
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // Për ikona Material Design

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi', // Ikonat default
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
  },
});
