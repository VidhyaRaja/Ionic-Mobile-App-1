import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ScannerPage from '../views/ScannerPage.vue'
import NewTicketPage from '../views/NewTicketPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/scan',
    name: 'Scanner',
    component: ScannerPage
  },
  {
    path: '/new_ticket',
    name: 'NewTicket',
    component: NewTicketPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
