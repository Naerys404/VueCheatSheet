<template>
    <div class="m-5 p-5 flex flex-col gap-3 items-center">
        <h1 class="text-xl font-bold"> TP : Exercice Dynamic Styling 2</h1>
        <input type="text" class="input my-5" v-model="inputClass">
        <h2 :class="classChoice">Hello World (classe dynamique){{ inputClass }}</h2>
        <input type="text" class="input my-5" :style="colorChoice" v-model="inputColor">
        <h2>Hello World (classe dynamique){{ inputColor }}</h2>
        <button type="button" class="btn btn-accent">Afficher 1er titre</button>

    </div>
</template>

<script setup lang="js">

import { ref, watch } from 'vue';

let inputClass = ref('')
let inputColor = ref('')
let classChoice = ref('')
let colorChoice = ref('')


watch(inputClass, (wordCheck)=> {
    if(wordCheck === "Hello"){
        classChoice.value = 'maclasse'+wordCheck;
    } else if (wordCheck === "World"){
        classChoice.value = 'maclasse'+wordCheck;
    } else {classChoice.value = ''}
})



</script>

<style scoped>
.maClasseHello {
    background-color: aqua;
    color:blue;
}

.maClasseWorld{
    background-color: blue;
    color:aqua;
} 
</style>