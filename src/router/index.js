import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({

    history: createWebHistory(),
    //routes pour notre page Home (format classique)
    routes: [
        {
            path: '/',
            alias: '/home',
            name: 'home',
            component: () => import('../views/AppHome.vue')
        },
        //lazy loading du composant
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/AppContact.vue')
        },
        {
            path: '/about',
            alias: '/a-propos',
            name: 'about',
            component: () => import('../views/AppAbout.vue')
        },
        {
            path: '/text-interpolation',
            name: 'Text interpolation',
            component: () => import('../views/lessons/TextInterpolation.vue')
        },
        {
            path: '/exo-interpolation',
            name: 'exercice interpolation',
            component: () => import('../views/exercices/exerciceInterpolation.vue')
        },
        {
            path: '/v-html',
            name: 'lesson v-html',
            component: () => import('../views/lessons/inline-templating.vue')
        },
        {
            path: '/v-bind',
            name: 'lesson v-bind',
            component: () => import('../views/lessons/attribute-binding.vue')
        },
        {
            path: '/tp-vbind',
            name: 'exo v-bind',
            component: () => import('../views/exercices/tpVbind.vue')
        },
        {
            path: '/v-on',
            name: 'v-on',
            component: () => import('../views/lessons/lesson-event-binding.vue')
        },
        {
            path: '/exo-v-on',
            name: 'exo-v-on',
            component: () => import('../views/exercices/exerciceV-on.vue')
        },
    ]

});

export default router;