<template>
    <div class="m-5 p-5 flex flex-col gap-3 items-center">
        <h1 class="text-xl">Exercice Watchers</h1>
        <p class="badge badge-ghost p-4">{{ counter }}</p>
        <button class="btn btn-success" @click="increment">+</button>

    </div>
</template>

<script setup lang="js">

import { ref, watch } from 'vue';

const counter = ref(0);

function increment() {
    counter.value++;
}

watch(counter, (limit) => {
    if (limit === 7){
        counter.value = 0;
    }
})


</script>