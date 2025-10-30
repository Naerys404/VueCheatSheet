<template>
    <div class="card w-full max-w-md bg-blue-400 shadow-xl my-4">
        <h4 class="mx-3 card-title text-xl font-bold mb-4">Composant OneFriend.vue</h4>
        <div class="card-body">
            <h2 class="card-title text-primary">
                👤 {{ unAmiName }} - un pote : {{ premiumData ? 'en Or' : 'En Plomb' }}
                <div class="badge" :class="premiumData ? 'badge-success' : 'badge-ghost'">
                    {{ premiumData ? 'Premium' : 'Standard' }}
                </div>
            </h2>

            <div class="space-y-2 text-base-content">
                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-primary">ID</span>
                    {{ id }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-secondary">📞</span>
                    {{ unAmiPhone }}
                </p>

                <p class="flex items-center gap-2">
                    <span class="badge badge-outline badge-accent">📧</span>
                    {{ unAmiMail }}
                </p>
                <button @click="modifPremium" type="button" class="btn btn-primary">Modif Props Premium</button>
            </div>
        </div>
    </div>
</template>


<script setup lang="js">
import { defineProps, ref } from 'vue'

const props = defineProps({
    unAmiId: {
        type: String,
        required: true,
    },
    unAmiName: {
        type: String,
        required: true,
    },
    unAmiPhone: {
        type: String,
        required: true,
    },
    unAmiMail: {
        type: String,
        required: true,
    },
    unAmiPremium: {
        type: Boolean,
        required: false,
        default: true,
    },
})

// Attention INTERDIT de modifier une props directement
// On utilise une variable de données pour stocker la props
// Et ensuite on pourra faire des modif sur la variable qui contient la props
const premiumData = ref(props.unAmiPremium)

const modifPremium = () => {
    premiumData.value = !premiumData.value
}
</script>
