<template>
  <div>
    <h1 class="text-2xl p-5 text-accent font-bold">Articles Manager (Firebase Realtime Database)</h1>
    <FirebaseAddArticle></FirebaseAddArticle>
<FirebaseListArticles></FirebaseListArticles>
  </div>
</template>

<script setup lang='js'>
import FirebaseListArticles from '../components/FirebaseListArticles.vue';
import FirebaseAddArticle from '../components/FirebaseAddArticle.vue'
</script>

<style scoped lang="css">
</style>