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
        {
            path: '/two-ways-binding',
            name: 'two-ways-binding',
            component: () => import('../views/lessons/lesson-two-way-binding.vue')
        },
        {
            path: '/watchers',
            name: 'watchers',
            component: () => import('../views/lessons/lesson-watchers.vue')
        },
        {
            path: '/computed',
            name: 'computed',
            component: () => import('../views/lessons/lesson-computed-properties.vue')
        },
        {
            path: '/dynamic-styling',
            name: 'dynamic-styling',
            component: () => import('../views/lessons/lesson-dynamic-styling.vue')
        },
        {
            path: '/v-if',
            name: 'v-if',
            component: () => import('../views/lessons/lesson-conditional-rendering.vue')
        },
        {
            path: '/v-for',
            name: 'v-for',
            component: () => import('../views/lessons/lesson-list-rendering.vue')
        },
        {
            path: '/exo-watcher',
            name: 'exo-watcher',
            component: () => import('../views/exercices/exo-watcher.vue')
        },
        {
            path: '/exo-styling',
            name: 'exo-styling',
            component: () => import('../views/exercices/exo-styling.vue')
        },
        {
            path: '/exo-styling-2',
            name: 'exo-styling-2',
            component: () => import('../views/exercices/exo-styling-2.vue')
        },
        {
            path: '/exo-v-for',
            name: 'exo-v-for',
            component: () => import('../views/exercices/exo-v-for.vue')
        },
        {
            path: '/exo-v-if',
            name: 'exo-v-if',
            component: () => import('../views/exercices/exo-v-if.vue')
        },
        {
            path: '/exo-lifecycle',
            name: 'exo-lifecycle',
            component: () => import('../views/exercices/exo-lifecycle.vue')
        },
        {
            path: '/life-cycle',
            name: 'life-cycle',
            component: () => import('../views/lessons/lesson-lifecycle.vue')
        },
    ]

});

export default router;