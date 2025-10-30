<template>
    <div class="container mx-auto p-4 flex justify-center flex-col">
        <div class="card w-96 bg-base-100 shadow-sm">
            <div class="card-body">
                <span class="badge badge-xs badge-warning">Composant OneFriend.vue</span>
                <div class="flex justify-between">
                    <h2 class="text-3xl font-bold">{{name}}</h2>
                </div>
                <ul class="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Id : {{ id }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Tel: {{ phone }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mail : {{ email }}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span class="badge" :class="premium ? 'badge-warning':'badge-ghost'">{{ premium ? 'Un ami en OR': 'Un ami en PLOMB' }}</span>
                    </li>
                </ul>
               
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
    phone: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    premium:{
        type:Boolean,
    }

})

</script>