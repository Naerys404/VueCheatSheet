<template>
    <div class="m-5 p-5 flex flex-col gap-3 items-center">
        <h1 class="text-xl">Exercice Dynamic Styling</h1>
        <div class="flex gap-5 my-5">
            <div class="card w-96 shadow-sm" :style="style1" @click="changeColor1">
                <div class="card-body">
                    <h2 class="card-title">Card title 1</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
            <div class="card w-96 shadow-sm" :style="style2" @click="changeColor2">
                <div class="card-body">
                    <h2 class="card-title">Card title 2</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
        </div>
        <div class="flex gap-5 my-5">
            <div class="card w-96 shadow-sm" @click="toggleClass1"
                :class="{ 'colorChange1': defaultColor3, 'colorDefault': !defaultColor3 }">
                <div class="card-body">
                    <h2 class="card-title">Card title 3</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
            <div class="card w-96 shadow-sm" @click="toggleClass2"
                :class="{ 'colorChange2': defaultColor4, 'colorDefault': !defaultColor4 }">
                <div class="card-body">
                    <h2 class="card-title">Card title 4</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="js">

import { ref } from 'vue';

const style1 = ref({
    backgroundColor: "white",
})

const style2 = ref({
    backgroundColor: "white",
})

const defaultColor3 = ref(true);
const defaultColor4 = ref(true);

function changeColor1() {
    style1.value.backgroundColor = style1.value.backgroundColor === 'white' ? 'cyan' : 'white';
}
function changeColor2() {
    style2.value.backgroundColor = style2.value.backgroundColor === 'white' ? 'violet' : 'white';
}


function toggleClass1() {
    defaultColor3.value = !defaultColor3.value;
}
function toggleClass2() {
    defaultColor4.value = !defaultColor4.value;
}

</script>

<style scoped>
.colorDefault {
    background-color: white;
}

.colorChange1 {
    background-color: cadetblue;
}

.colorChange2 {
    background-color: darkorange;
}
</style>