<template>
    <div class="container mx-auto p-4 flex justify-center flex-col">
        <h1 class="text-2xl text-primary font-bold">Exercice des props : les amis</h1>
        <div v-for="amis in lesAmis">
            <OneFriend :name="amis.name" :email="amis.email" :id="amis.id" :phone="amis.phone" :premium="amis.premium"/>
        </div>
        
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import OneFriend from '../../components/OneFriend.vue';


const lesAmis = ref([
    {
        id: 'lasticot',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'lasticot2',
        name: 'COCO L ASTICOT',
        phone: '01234 5678 991',
        email: 'coco@lasticot.com',
        premium: true
    },
    {
        id: 'kimonoSurUnFrigo',
        name: "Steven Seagal",
        phone: '+338765477',
        email: 'steven@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'yoyoyo',
        name: "JAROD",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    },
    {
        id: 'GUS',
        name: "GussDX",
        phone: '+338765477',
        email: 'jAROD@seagal.com',
        premium: true
    }
]);


</script>
