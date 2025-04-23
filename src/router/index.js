import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import Gallery from '@/views/Gallery.vue'
import Pricing from '@/views/Pricing.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },
    { path: '/about', name: 'About', component: About },
    { path: '/gallery', name: 'Gallery', component: Gallery },
    { path: '/pricing', name: 'Pricing', component: Pricing },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/HomeView', redirect: '/' },
  ],
})

export default router
