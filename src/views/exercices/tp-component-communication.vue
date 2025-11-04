<template>
    <div class="container mx-auto p-4 justify-center flex flex-col">
        <h1 class="text-3xl text-primary font-bold my-5">TP Component Communication</h1>
        <div class="flex flex-wrap bg-accent rounded-2xl p-5 my-10 mx-auto">
            <UserActive :nom="utilisateur.nom" :age="utilisateur.age"></UserActive>
           
        </div> 
        <div class="flex flex-wrap bg-base-100 rounded-2xl p-5 my-10 mx-auto">
                  <UserData @submit="update"></UserData>
        </div> 
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import UserData from '../../components/UserData.vue';
import UserActive from '../../components/UserActive.vue';


let utilisateur = ref({
    nom: 'Jinx',
    age: 21
})

const update = (submitted) =>{
    let newName =  submitted.nom.value;
    let newAge = submitted.age.value;
   
   utilisateur.value.nom = newName
   utilisateur.value.age = newAge
}

</script>
