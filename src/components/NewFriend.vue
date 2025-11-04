<template>
    <div class="bg-accent rounded-2xl p-10 mx-auto my-5 w-full flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold mb-5">Ajouter un nouveau ami</h2>
        <label class="input validator">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </g>
            </svg>
            <input type="text" required placeholder="Nom de l'ami" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3"
                maxlength="30" title="Only letters, numbers or dash" v-model="name" />
        </label>
        <p class="validator-hint">
            Doit contenir de 3 à 30 caractères.
            <br />Contient seulement des lettres, nombres ou /
        </p>
        <label class="input validator">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <g fill="none">
                    <path
                        d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                        fill="currentColor"></path>
                </g>
            </svg>
            <input type="tel" class="tabular-nums" required placeholder="Téléphone de l'ami" pattern="[0-9]*" minlength="10"
                maxlength="10" title="Must be 10 digits" v-model="phone" />
        </label>
        <p class="validator-hint">Doit contenir 10 chiffres</p>

        <label class="input validator">
            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
            </svg>
            <input type="email" placeholder="mail@ami.com" required name="email" v-model="mail"/>
        </label>
        <div class="validator-hint hidden">Entrez une adresse valide</div>
        <div>
            <button class="btn btn-primary mt-5" @click="submit">Ajouter</button>
        </div>
    </div>
    
</template>

<script setup lang="js">
import { defineEmits, ref } from 'vue';

const name = ref();
const phone = ref();
const mail = ref();


const emit = defineEmits(
       { "submit" : (name) => {
            if(name) {return true} 
            else {
                console.warn("Pas d'identifiant: creation impossible.");
                return false;
            }
        }}
);
const submit = () => {
    emit('submit', {name, phone, mail})
}


</script>