<template>
  <div class="pt-4 items-center justify-center place-items-center content-center ">
    <h1 class=" p-4 text-4xl font-bold dark:text-white text-center pt-56 ">Accueil</h1>
    <div class="h-full grid grid-cols-3 gap-4 content-normal text-center pt-10 px-3">
      <div class="pb-5 flex">
        <router-link class=" h-10 w-lvw text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/'>
          Home
        </router-link>
      </div>
      <div class="pb-5 flex">
        <router-link class=" w-lvw text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/login'>
          Se connecter
        </router-link>
      </div>
      <div class="pb-5 flex">
        <router-link class=" w-lvw text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/register'>
          S'enregistrer
        </router-link>
      </div>
      <div class="pt-5 flex">
        <router-link class=" w-lvw text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/sharePriceHistories'>
          Historique des cours de l’action
        </router-link>
      </div>
      <div class="pt-5 flex">
        <router-link class="w-lvw text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/transaction'>
          Transaction
        </router-link>
      </div>
      <div class="pt-5 flex">
        <router-link class="w-lvw text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                     to='/userLogin'>
          connexion utilisateur
        </router-link>
      </div>
    </div>

    <div class="container mx-auto px-4">
      <SharePriceHistoryall/>
    </div>
  </div>
</template>
<script lang="ts" setup>
import SharePriceHistoryall from '../components/SharePriceHistory/ShowAll.vue'
</script>
