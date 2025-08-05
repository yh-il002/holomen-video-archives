// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import HoloGura from '../pages/HoloGura.vue';
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/hologura', name: 'HoloGura', component: HoloGura },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
