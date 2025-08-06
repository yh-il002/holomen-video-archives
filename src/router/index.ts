// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Top from '../pages/Top.vue'
import MomosuzuNene from '../pages/MomosuzuNene.vue'
import HoloGura from '../pages/HoloGura.vue'

const routes = [
  { 
    path: '/',
    name: 'Top',
    component: Top
  },
  { 
    path: '/momosuzunene',
    name: 'MomosuzuNene',
    component: MomosuzuNene
  },
  { 
    path: '/hologura',
    name: 'HoloGura',
    component: HoloGura
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
