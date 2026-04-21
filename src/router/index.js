import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import DepartmentPage from '@/views/DepartmentPage.vue'
import LogisticsPage from '@/views/LogisticsPage.vue'

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
    name: 'department',
    component: DepartmentPage
  },
  {
    path: '/about/logistics',
    name: 'logistics',
    component: LogisticsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router