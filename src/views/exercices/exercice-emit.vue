<template>
    <div class="container mx-auto p-4 justify-center flex flex-col">
        <h1 class="text-2xl text-primary font-bold">Exercice des EMITS</h1>
        <div class="flex flex-wrap">
            <div v-for="amis in lesAmis">
                <OneFriend v-on:mon-event-premium-update="parentUpdatePremium" v-on:delete-my-friend="deleteMyFriend" :name="amis.name" :email="amis.email" :id="amis.id" :phone="amis.phone" :premium="amis.premium"/>
            </div>
            <div class="bg-accent p-10 rounded-xl">{{ lesAmis }}</div>
        </div>
        
    </div>
    
</template>

<script setup lang="js">
import { ref } from 'vue';
import OneFriend from '../../components/OneFriend.vue';

const parentUpdatePremium = (eventPremium) => {
    let ami = lesAmis.value.find((ami)=> ami.id == eventPremium);
    ami.premium = !ami.premium;
}

const deleteMyFriend = (deleteFriend) => {
    lesAmis.value = lesAmis.value.filter(ami => ami.id !== deleteFriend);
}

const lesAmis = ref([
    {
        id: '001',
        name: 'Janine De La Vega',
        phone: '01234 5678 991',
        email: 'janine@delavega.com',
        premium: false
    },
    {
        id: '002',
        name: 'Eric Reptile',
        phone: '01234 5678 991',
        email: 'eric@reptile.com',
        premium: true
    },
    {
        id: '003',
        name: "Jean Kreps",
        phone: '+338765477',
        email: 'jean@kreps.com',
        premium: true
    },
    {
        id: '004',
        name: "Goulive",
        phone: '+338765477',
        email: 'goulive@seagal.com',
        premium: true
    },
    {
        id: '005',
        name: "JAROD",
        phone: '+338765477',
        email: 'jarod@seagal.com',
        premium: true
    },
    {
        id: '006',
        name: "GussDX",
        phone: '+338765477',
        email: 'gussdx@seagal.com',
        premium: true
    }
]);

</script>
