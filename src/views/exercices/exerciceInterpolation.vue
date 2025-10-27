<template>
    <div class="m-10">
        <h1 class="text-xl my-5">Exercice interpolation</h1>
        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th></th>
                        <th>Variable</th>
                        <th>Valeur</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr>
                        <th>1</th>
                        <td>unLivre</td>
                        <td>{{ unLivre }}</td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                        <th>2</th>
                        <td>isOnline</td>
                        <td>{{ isOnline }}</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                        <th>3</th>
                        <td>unNombre</td>
                        <td>{{ unNombre }}</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>unTableau</td>
                        <td>{{ unTableau }}</td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>unTableau[0]</td>
                        <td>{{ unTableau[0] }}</td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>unObjet</td>
                        <td>{{ unObjet }}</td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>unObjet.name</td>
                        <td>{{ unObjet.name }}</td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>unObjet['name']</td>
                        <td>{{ unObjet['name'] }}</td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>unObjet.tel</td>
                        <td>{{ unObjet.tel }}</td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>functionTest()</td>
                        <td>{{ test() }}</td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>Ternaire</td>
                        <td>{{ (1 =='1') ? "COOL" : "PAS COOL" }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="js">

import { ref } from 'vue';

const unLivre = ref('Les mémoires de Steven Seagal');
const isOnline = ref(false);
const unNombre = ref(123456789);
const unTableau = ref(['texte', 85]);
const unObjet = ref({ "name": "Plop", "tel": "0102030405" });
const test = () => {
    return "Hello World";
};


</script>