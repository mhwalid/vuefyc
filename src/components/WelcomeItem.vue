<template>
          <h1 class="p-4 text-center text-2xl">Home</h1>
          <div class="h-full grid grid-cols-3 gap-4 content-normal">
            <div><router-link to='/' > Home</router-link></div>
            <div><router-link to='/login' > Se connecter</router-link></div>
            <div><router-link to='/register' >S'enregistrer </router-link></div>
            <div><router-link to='/sharePriceHistories' >Historique des cours de l’action</router-link></div>
            <div><router-link to='/transaction' >Transaction</router-link></div>
            <div><router-link to='/UserLogin' >connexion utilisateur </router-link></div>
          </div>
          <div class="container mx-auto px-4">
            <SharePriceHistoryall/>
          </div>
</template>
<script setup lang="ts">
import SharePriceHistoryall from '../components/SharePriceHistory/ShowAll.vue'
</script>
