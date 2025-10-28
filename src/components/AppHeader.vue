<template>
    <div class="navbar bg-base-100 shadow-sm px-10 z-10" id="navbar">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <details>
                            <summary>Lessons</summary>
                            <ul class="p-2">
                                <li>
                                    <router-link to="/v-html" class="hover:text-primary">V-html</router-link>
                                </li>
                                <li>
                                    <router-link to="/v-bind" class="hover:text-primary">V-bind</router-link>
                                </li>
                                <li>
                                    <router-link to="/v-on" class="hover:text-primary">V-on</router-link>
                                </li>
                                <li>
                                    <router-link to="/text-interpolation" class="hover:text-primary">Text
                                        interpolation</router-link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Exercices</summary>
                            <ul class="p-2">
                                <li>
                                    <router-link to="/exo-interpolation" class="hover:text-primary">Exercice
                                        interpolation</router-link>
                                </li>
                                <li>
                                    <router-link to="/tp-vbind" class="hover:text-primary">TP
                                        V-bind / interpolation </router-link>
                                </li>
                                <li>
                                    <router-link to="/exo-v-on" class="hover:text-primary">Exercice V-On </router-link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <router-link to="/about" class="hover:text-primary">A propos</router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="hover:text-primary">Contact</router-link>
                    </li>
                </ul>
            </div>
            <router-link to="/" class="text-xl">Vue CheatSheet</router-link>
        </div>
        <div class="navbar-center hidden lg:flex z-10">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>Lessons</summary>
                        <ul class="p-2">
                            <li>
                                <router-link to="/v-html" class="hover:text-primary">V-html</router-link>
                            </li>
                            <li>
                                <router-link to="/v-bind" class="hover:text-primary">V-bind</router-link>
                            </li>
                            <li>
                                <router-link to="/v-on" class="hover:text-primary">V-on</router-link>
                            </li>
                            <li>
                                <router-link to="/text-interpolation" class="hover:text-primary">Text
                                    interpolation</router-link>
                            </li>

                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Exercices</summary>
                        <ul class="p-2">
                            <li>
                                <router-link to="/exo-interpolation" class="hover:text-primary">Exercice
                                    interpolation</router-link>
                            </li>
                            <li>
                                <router-link to="/tp-vbind" class="hover:text-primary">TP
                                    V-bind / interpolation </router-link>
                            </li>
                            <li>
                                <router-link to="/exo-v-on" class="hover:text-primary">Exercice V-On </router-link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <router-link to="/about" class="hover:text-primary">A propos</router-link>
                </li>
                <li>
                    <router-link to="/contact" class="hover:text-primary">Contact</router-link>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
        </div>
    </div>
</template>

<style scoped></style>