import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(VueRouter);

// const routes = [
//     {
//         path: "/home",
//         component: () => import('../components/Home')
//     },
//     {
//         path: "/about",
//         component: () => import('../components/About')
//     }
// ];

const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/about', component: About},
    ],
    mode: 'history',
    base: process.env.BASE_URL,
    // routes
})

export default router;