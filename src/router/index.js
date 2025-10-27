import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../views/AppHome.vue";
import AppContact from "../views/AppContact.vue";

const router = createRouter({

    history: createWebHistory(),
    //routes pour notre page Home
    routes : [
        {
            path:'/',
            alias : '/home',
            name : 'home',
            component: AppHome
        },
         {
            path:'/contact',
            name : 'contact',
            component: AppContact
        },

    ]

});

export default router;