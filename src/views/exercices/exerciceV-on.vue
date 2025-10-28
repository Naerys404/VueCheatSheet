<template>
    <div class="m-5 shadow-md p-10 rounded-2xl">
        <h1 class="text-xl font-bold">Event binding Mode : Composition</h1>
        <div class="flex items-center justify-center p-5">
            <button @click.right="decrement(11)" class="btn w-1 mx-5 btn-error">-</button>
            <p class="font-bold">le nombre: {{ nombre }}</p>
            <button @click.middle="increment(99)" class="btn w-1 mx-5 btn-success">+</button>
        </div>
    </div>

     <div class="container mx-auto p-4 md:p-8">
        <div class="card bg-base-100 shadow-xl rounded-box p-6">
            <h5 class="card-title text-2xl font-bold mb-4">TP Event Binding Mode</h5>

            <!-- Section pour la gestion des événements de clavier -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2"><code>v-on:keyup</code> ou <code>@keyup</code></h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte</span>
                    </div>
                    <input type="text" @keyup="getInput" placeholder="Tapez ici..."
                        class="input input-bordered w-full" />
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>Le contenu de l'input est : <span class="badge badge-accent">{{ inputKeyUp }}</span></p>
                </div>
            </div>

            <!-- Section pour le modificateur d'événement .esc -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Modificateur d'événement</h6>

                <label class="form-control w-full">
                    <div class="label">
                        <span class="label-text">Saisissez du texte et appuyez sur 'Échap'</span>
                    </div>
                    <input type="text"
                        placeholder="Tapez et appuyez sur 'Esc'" class="input input-bordered w-full" @keydown.esc.prevent="submit"/>
                </label>
                <div class="mt-3 p-3 bg-base-100 rounded-box shadow">
                    <p>La valeur confirmée par 'Échap' est : <span class="badge badge-primary">{{ submittedInput }}</span></p>
                </div>
            </div>

            <!-- Section pour l'événement de clic -->
            <div class="mt-6 mb-4 card bg-base-200 shadow-lg rounded-box p-4">
                <h6 class="text-xl font-semibold mb-2">Événement <code>@click</code></h6>

                <button class="btn btn-error text-white" @click="alertEvent">
                    Afficher une alerte
                </button>
            </div>
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

let inputKeyUp = ref("");
let submittedInput = ref("")

let getInput = (event) => {
    inputKeyUp.value = event.target.value;
}

let submit = (event) => {
    console.log(event.target.value)
    submittedInput.value = event.target.value; 
}

let alertEvent = (event) => {
    alert('Plop');
}


</script>