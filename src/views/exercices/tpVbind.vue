<template>
    <div class="m-5 p-5 flex flex-col gap-3 items-center">
        <h1 class="text-xl">Tp Databinding : User profile Card</h1>
        <div class="avatar">
            <div class="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingwoman@192.webp" />
            </div>
        </div>
        <h3 class="font-bold text-lg">{{ name }}</h3>
        <input type="text" :value class="input">
        <p>Age: <span class="badge badge-accent">{{ age }} ans</span></p>
        <p>Age +10 : <span class="badge badge-primary">{{ age + 10 }} ans</span></p>
        <p>Nombre fétiche :<span class="badge badge-accent">{{ number }}</span></p>

    </div>
</template>

<script setup lang="js">

import { ref } from 'vue';

let name = ref('Yelling woman');
let value = ref(name);
let age = ref(30);
let number = ref(rand());

function rand(){
    return Math.floor(Math.random()*1000000);
}

</script>