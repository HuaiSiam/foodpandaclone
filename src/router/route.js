
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/Aboutus.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/aboutus', component: About }
]

export const router = new createRouter({
    history: createWebHistory(),
    routes
})