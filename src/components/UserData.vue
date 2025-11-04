<template>
<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend class="fieldset-legend">Composant formulaire d'édition</legend>

  <label class="label">Nom</label>
  <input type="text" class="input" placeholder="Entrez votre nom" v-model="nom"/>

  <label class="label">Age</label>
  <input type="number" class="input" placeholder="Entrez votre âge" v-model="age"/>

  <button type="button" class="btn btn-secondary mt-5" @click="submit">Mettre à jour</button>

</fieldset>
</template>

<script setup lang="js">
import {defineEmits, ref } from 'vue';

const nom = ref('');
const age = ref(null);

const emit = defineEmits(
       { "submit" : (nom) => {
            if(nom) {
                return true
            } else {
                console.warn("Il manque le nom");
                return false;
            }
        }}
);

const submit = () => {
    emit('submit', {nom, age})
}




</script>