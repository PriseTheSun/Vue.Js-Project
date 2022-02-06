import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dash from '../views/Dash.vue'

import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'raiz',
        component: Home
    }, {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/produtos',
        name: 'Produtos',
        component: Produtos
    },
    {
        path: '/Dash',
        name: 'Dash',
        component: Dash
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router