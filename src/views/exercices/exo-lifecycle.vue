<template>
    <div class="container mx-auto p-4 flex justify-center flex-col">
        <h1 class="text-2xl text-primary font-bold">Une simple requête HTTP GET</h1>
        <div class="flex flex-col m-5">
            <h2 class='text-xl text-secondary font-bold mb-5'>Les pokemons</h2>
            <div v-if="pokemons">
                <span class="badge badge-info m-1" v-for="(pokemon, index) in pokemons" :key="index" >{{ pokemon.name }}</span>
            </div>
        </div>
        <div class="flex flex-col m-5">
            <h2 class='text-xl text-secondary font-bold mb-5'>Météo Toulouse </h2>
            <ul class="list" v-if="meteo">
                <li class="list-row">Température max: <span class="badge badge-error">{{ meteo.fcst_day_0.tmax }}
                        °C</span></li>
                <li class="list-row">Température min: <span class="badge badge-info">{{ meteo.fcst_day_0.tmin }}
                        °C</span> </li>
                <li class="list-row">Température actuelle :<span class="badge badge-success">{{
                    meteo.current_condition.tmp }} °C</span></li>
                <li class="list-row">Condition météo: <span class="badge badge-ghost">{{
                    meteo.current_condition.condition }}</span></li>
            </ul>

        </div>
    </div>
</template>

<script setup lang="js">
import { ref, onBeforeUnmount, onMounted, onBeforeMount } from 'vue';

let meteo = ref('');
let pokemons = ref([]);

onBeforeMount(() => {

    async function getWeather() {
        try {
            const response = await fetch("https://prevision-meteo.ch/services/json/toulouse");
            const data = await response.json();
            meteo.value = data;
        } catch (error) {
            console.error("Erreur :", error);
        }
    }

    async function getPokemons() {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
            if (response.ok) {
                const data = await response.json();
                pokemons.value = data.results;

            } else {
                throw new Error('Erreur: Erreur de récupération des données.')
            }


        } catch (error) {
            console.error("Erreur :", error);
        }
    }

    getWeather();
    getPokemons();

})

onBeforeUnmount(() => {

})



</script>
