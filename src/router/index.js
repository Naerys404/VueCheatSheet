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
        {
            path:'/about',
            alias:'/a-propos',
            name : 'about',
            component:()=> import('../views/AppAbout.vue')
        },
        {
            path:'/text-interpolation',
            name : 'Text interpolation',
            component:()=> import('../views/lessons/TextInterpolation.vue')
        },
        {
            path:'/exo-interpolation',
            name : 'exercice interpolation',
            component:()=> import('../views/exercices/exerciceInterpolation.vue')
        }

    ]

});

export default router;