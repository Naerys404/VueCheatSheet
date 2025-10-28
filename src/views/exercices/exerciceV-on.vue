<template>
    <div class="m-5 shadow-md p-10 rounded-2xl">
        <h1 class="text-xl font-bold">Event binding Mode : Composition</h1>
        <div class="flex items-center justify-center p-5">
            <button @click="decrement(11)" class="btn w-1 mx-5 btn-error">-</button>
            <p class="font-bold">le nombre: {{ nombre }}</p>
            <button @click="increment(99)" class="btn w-1 mx-5 btn-success">+</button>
        </div>
    </div>
</template>


<script setup lang="js">
import { ref } from 'vue';

let nombre = ref(0);

let decrement = (nb) => {
    nombre.value -= nb;
}
let increment = (nb) => {
    nombre.value += nb;
}


</script>