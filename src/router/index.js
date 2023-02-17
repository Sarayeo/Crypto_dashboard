import { createRouter, createWebHashHistory } from 'vue-router'
import DashView from '../views/DashView.vue'


const routes = [
  {
    path: '/',
    name: 'dash',
    component: DashView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
