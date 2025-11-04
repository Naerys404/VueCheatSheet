<template>
<div class="flex flex-col items-center justify-center p-5">
    <h2 class="text-2xl font-bold mb-5">Composant UserActive: Affichage des données utilisateur</h2>

    <h3 class="text-xl font-bold">{{ props.nom }}</h3>
    <h4 class="text-xl">{{ props.age }} ans</h4>
</div>
</template>

<script setup lang="js">
import { defineProps } from 'vue';


const props = defineProps({
    nom: {
        type: String,
        required: true,
    },
    age: {
        type:Number,
        required: true,
    }
})

</script>