<template>
    <h1 class="text-2xl m-10 font-bold text-accent">Pokemon props</h1>
    <div class="flex flex-wrap justify-center gap-5">
        <div v-for="(pokemon, index) in pokemons" :key="pokemon.pokedex_id">
            <one-pokemon :id="pokemon.pokedex_id" :name="pokemon.name.fr" :category="pokemon.category" :sprite="pokemon.sprites.regular" ></one-pokemon>
        </div>
    </div>
</template>

<script setup lang="js">

import { onMounted, ref } from 'vue'
import OnePokemon from '../../components/OnePokemon.vue';

let pokemons = ref([]);

const fetchPokemons = async () => {
    try {
        const response = await fetch('https://tyradex.vercel.app/api/v1/gen/1')
        const data = await response.json()
        console.log(data)
        pokemons.value = data
    } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon :', error)
    }
}

onMounted(() => {
   fetchPokemons();

})

</script>