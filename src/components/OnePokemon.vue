<template>
    <div class="flex flex-wrap justify-center gap-5">
        <div class="card bg-base-100 w-96 shadow-sm my-1">
            <figure>
                <img :src=sprite :alt=name />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{{id}} - {{ name }}</h2>
                <p>{{ category }}</p>
            </div>
        </div>
    </div>
   
</template>

<script setup lang="js">
import { defineProps } from 'vue';

defineProps({
    id: {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    sprite : {
         type:String,
    }
  

})

</script>