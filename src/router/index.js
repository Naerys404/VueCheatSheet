import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({

    history: createWebHistory(),
    //routes pour notre page Home (format classique)
    routes : [
        {
            path:'/',
            alias : '/home',
            name : 'home',
            component:()=> import('../views/AppHome.vue')
        },
        //lazy loading du composant
        {
            path:'/contact',
            name : 'contact',
            component:()=> import('../views/AppContact.vue')
        },

    ]

});

export default router;