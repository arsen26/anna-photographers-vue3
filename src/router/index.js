import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue';
import About from '@/views/About.vue' // Kontrollo gjithashtu nëse skedari është `About.vue` dhe jo `about`
import Gallery from '@/views/gallery.vue'
import Pricing from '@/views/pricing.vue'
import Contact from '@/views/pricing.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App, // Shfaq App.vue në pathin /
    },
    { path: '/about', component: About },
    { path: '/gallery', component: Gallery },
    { path: '/pricing', component: Pricing },
    { path: '/contact', component: Contact }
  ],
})

export default router
