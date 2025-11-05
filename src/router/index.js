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
            path: '/lesson-text-interpolation',
            name: 'Text interpolation',
             meta: {
                description: 'Leçon interpolation'
            },
            component: () => import('../views/lessons/TextInterpolation.vue')
        },
        {
            path: '/exo-interpolation',
            name: 'Exercice interpolation',
             meta: {
                description: 'Exercice interpolation'
            },
            component: () => import('../views/exercices/exerciceInterpolation.vue')
        },
        {
            path: '/lesson-v-html',
            name: 'V-html',
             meta: {
                description: 'Leçon v-html : innerhtml'
            },
            component: () => import('../views/lessons/inline-templating.vue')
        },
        {
            path: '/lesson-v-bind',
            name: 'V-bind',
             meta: {
                description: 'Leçon v-bind : variables'
            },
            component: () => import('../views/lessons/attribute-binding.vue')

        },
        {
            path: '/exo-tp-vbind',
            name: 'Exercice v-bind',
             meta: {
                description: 'Exercice v-bind : variables'
            },
            component: () => import('../views/exercices/tpVbind.vue')
        },
        {
            path: '/lesson-v-on',
            name: 'V-on',
            meta: {
                description: 'Leçon v-on : events'
            },
            component: () => import('../views/lessons/lesson-event-binding.vue')
        },
        {
            path: '/exo-v-on',
            name: 'Exercice v-on',
               meta: {
                description: 'Exercice v-on : events'
            },
            component: () => import('../views/exercices/exerciceV-on.vue')
        },
        {
            path: '/lesson-two-ways-binding',
            name: 'Two ways binding : v-model',
               meta: {
                description: 'Leçon v-model : two ways binding'
            },
            component: () => import('../views/lessons/lesson-two-way-binding.vue')
        },
        {
            path: '/lesson-watchers',
            name: 'Watchers',
               meta: {
                description: 'Leçon watchers'
            },
            component: () => import('../views/lessons/lesson-watchers.vue')
        },
        {
            path: '/lesson-computed',
            name: 'Computed',
               meta: {
                description: 'Leçon computed'
            },
            component: () => import('../views/lessons/lesson-computed-properties.vue')
        },
        {
            path: '/lesson-dynamic-styling',
            name: 'Dynamic-styling',
               meta: {
                description: 'Leçon dynamic styling'
            },
            component: () => import('../views/lessons/lesson-dynamic-styling.vue')
        },
        {
            path: '/lesson-v-if',
            name: 'V-if',
               meta: {
                description: 'Leçon v-if'
            },
            component: () => import('../views/lessons/lesson-conditional-rendering.vue')
        },
        {
            path: '/lesson-v-for',
            name: 'V-for',
             meta: {
                description: 'Leçon v-for'
            },
            component: () => import('../views/lessons/lesson-list-rendering.vue')
        },
        {
            path: '/exo-watcher',
            name: 'Exercice watcher',
             meta: {
                description: 'Exercice Watcher'
            },
            component: () => import('../views/exercices/exo-watcher.vue')
        },
        {
            path: '/exo-styling',
            name: 'Exercice dynamic styling',
             meta: {
                description: 'Exercice Dynamic styling 1'
            },
            component: () => import('../views/exercices/exo-styling.vue')
        },
        {
            path: '/exo-styling-2',
            name: 'Exercice dynamic styling-2',
            meta: {
                description: 'Exercice Dynamic styling 2'
            },
            component: () => import('../views/exercices/exo-styling-2.vue')
        },
        {
            path: '/exo-v-for',
            name: 'Exercice v-for',
            meta: {
                description: 'Exercice v-for'
            },
            component: () => import('../views/exercices/exo-v-for.vue')
        },
        {
            path: '/exo-v-if',
            name: 'Exercice v-if',
             meta: {
                description: 'Exercice v-if'
            },
            component: () => import('../views/exercices/exo-v-if.vue')
        },
        {
            path: '/exo-lifecycle',
            name: 'Exercice lifecycle',
             meta: {
                description: 'Exercice lifecycle'
            },
            component: () => import('../views/exercices/exo-lifecycle.vue')
        },
        {
            path: '/lesson-life-cycle',
            name: 'Lifecycle',
             meta: {
                description: 'Leçon lifecycle'
            },
            component: () => import('../views/lessons/lesson-lifecycle.vue')
        },
        {
            path: '/exo-life-cycle-correction',
            name: 'Lifecycle correction',
             meta: {
                description: 'Correction exercice lifecycle'
            },
            component: () => import('../views/exercices/exercice-lifecycle-api.vue')
        },
        {
            path: '/exo-props',
            name: 'Props',
             meta: {
                description: 'Exercice props'
            },
            component: () => import('../views/exercices/exo-props.vue')
        },
        {
            path: '/exo-emit',
            name: 'Emits',
             meta: {
                description: 'Exercice emits'
            },
            component: () => import('../views/exercices/exercice-emit.vue')
        },
        {
            path: '/exo-pokeprops',
            name: 'Exercice fetch Pokemon : Props',
             meta: {
                description: 'Fetch pokemon + props'
            },
            component: () => import('../views/exercices/exo-pokemonProps.vue')
        },
        {
            path: '/exo-tp-emit-props',
            name: 'TP-emits-props',
             meta: {
                description: 'TP sur les emits et props'
            },
            component: () => import('../views/exercices/tp-component-communication.vue')
        },
        {
            path: '/lesson-props',
            name: 'Props',
             meta: {
                description: 'Leçon sur les props'
            },
            component: () => import('../views/lessons/lesson-props.vue')
        },
        {
            path: '/lesson-emit',
            name: 'Emits',
             meta: {
                description: 'Leçon sur emits'
            },
            component: () => import('../views/lessons/lesson-emit.vue')
        },
        {
            path: '/lesson-pinia',
            name: 'Pinia',
             meta: {
                description: 'Leçon sur Pinia'
            },
            component: () => import('../views/lessons/lesson-lib-pinia.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            meta: {
                description: 'Page non trouvée'
            },
            component: () => import('../views/not-found.vue')
        },
        {
            path: '/lesson-router',
            name: 'lesson-router',
            meta: {
                description: 'Router dans Vue.js'
            },
            component: () => import('../views/lessons/lesson-router.vue')
        },
        {
            path: '/lesson-ChartJS',
            name: 'ChartJS',
            meta: {
                description: 'Utilisation de ChartJS'
            },
            component: () => import('../views/lessons/lesson-lib-chartjs.vue')
        },
        {
            path: '/exercices',
            name: 'exercices',
            meta: {
                description: 'Hub d\'exercices'
            },
            component: () => import('../views/all-exercices.vue')
        },
        {
            path: '/lessons',
            name: 'lessons',
            meta: {
                description: 'Hub de leçons'
            },
            component: () => import('../views/all-lessons.vue')
        },
        {
            path: '/articles',
            name: 'articles',
            meta: {
                description: 'Article'
            },
            component: () => import('../views/firebase-articles-manager.vue')
        },
        {
            path: '/connexion',
            name: 'auth',
            meta: {
                description: 'Connexion'
            },
            component: () => import('../views/AppAuth.vue')
        },
                
        {
            path: "/details/:id/:itemName", //Exemple de route avec 2 paramètres  
            name: "Details",
            component: () => import("../views/../components/DetailsPage.vue"),
            props:true
        },
    ]

});

export default router;