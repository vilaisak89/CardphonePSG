import { createWebHistory, createRouter } from "vue-router";

import Home from "../Pages/Home.vue";
import Setting from "../Pages/Setting.vue";
import Login from "../Pages/Login.vue";
import Register from "../Pages/Register.vue";

export const routes = [
    {
        path:'/',
        redirect:'/home',
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
    },
    {
        name: 'setting',
        path: '/setting',
        component: Setting,
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior () {
        window.scrollTo(0,0)
    }
});

export default router;