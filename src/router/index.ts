// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Top from '../pages/Top.vue'
import HoloGura from '../pages/HoloGura.vue'
import MomosuzuNene from '../pages/MomosuzuNene.vue'
import OmaruPoruka from '../pages/OmaruPoruka.vue'
import IchijouRirika from '../pages/IchijouRirika.vue'
import JuufuuteiRaden from '../pages/JuufuuteiRaden.vue'

const routes = [
  { 
    path: '/',
    name: 'Top',
    component: Top
  },
  { 
    path: '/hologura',
    name: 'HoloGura',
    component: HoloGura
  },
  { 
    path: '/momosuzunene',
    name: 'MomosuzuNene',
    component: MomosuzuNene
  },
  { 
    path: '/omaruporuka',
    name: 'OmaruPoruka',
    component: OmaruPoruka
  },
  { 
    path: '/ichijouririka',
    name: 'IchijouRirika',
    component: IchijouRirika
  },
  { 
    path: '/juufuuteiraden',
    name: 'JuufuuteiRaden',
    component: JuufuuteiRaden
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
