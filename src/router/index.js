import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import CDOPage from '@/views/CDOPage.vue'
import OOLPage from '@/views/OOLPage.vue'
import ResourcePage from '@/views/ResourcePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/about/department',
    name: 'cdo',
    component: CDOPage
  },
  {
    path: '/about/logistics',
    name: 'ool',
    component: OOLPage
  },
  {
    path: '/about/resource',
    name: 'resource',
    component: ResourcePage
  }
]

const router = createRouter({
  history: createWebHistory('/skif_new/v2/'),
  routes
})

export default router