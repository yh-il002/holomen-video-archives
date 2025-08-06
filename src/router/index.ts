// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Top from '../pages/Top.vue'
import HoloGura from '../pages/HoloGura.vue'
import OozoraSubaru from '../pages/OozoraSubaru.vue'
import MomosuzuNene from '../pages/MomosuzuNene.vue'
import OmaruPoruka from '../pages/OmaruPoruka.vue'
import IchijouRirika from '../pages/IchijouRirika.vue'
import JuufuuteiRaden from '../pages/JuufuuteiRaden.vue'
import MoriCalliope from '../pages/MoriCalliope.vue'
import NanashiMumei from '../pages/NanashiMumei.vue'
import OuroKronii from '../pages/OuroKronii.vue'
import FuwaMoco from '../pages/FuwaMoco.vue'

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
    path: '/oozorasubaru',
    name: 'OozoraSubaru',
    component: OozoraSubaru
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
  { 
    path: '/moricalliope',
    name: 'MoriCalliope',
    component: MoriCalliope
  },
  { 
    path: '/nanashimumei',
    name: 'NanashiMumei',
    component: NanashiMumei
  },
  { 
    path: '/ourokronii',
    name: 'OuroKronii',
    component: OuroKronii
  },
  { 
    path: '/fuwamoco',
    name: 'FuwaMoco',
    component: FuwaMoco
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
