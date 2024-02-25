<template>
  <div class="flex flex-col items-center justify-center px-2 py-2 mx-auto md:h-screen lg:py-0">
    <button @click="sellShare"></button>
    <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div class="p-2 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Transactions
        </h1>
        <div class="space-y-4 md:space-y-6">
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Volume</label>
            <input v-model="volume" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   type="number">
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">sharePrice
              Id</label>
            <input v-model="sharePriceId" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   type="number">
          </div>
          <button
              class="mr-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold"
              @click="sellShare">vendre
          </button>
          <button
              class=" bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold"
              @click="buyShare">Acheter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useTransactionStore} from '@/stores/transaction';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const transactionStore = useTransactionStore();
const volume = ref(0);
const sharePriceId = ref(0);

const sellShare = () => {
  transactionStore.sellShare(volume.value, sharePriceId.value);
  toast.success("vente realisee avec succes ", {
        autoClose: 1000,
      }); // ToastOptions
};

const buyShare = () => {
  transactionStore.buyShare(volume.value, sharePriceId.value);
  toast.success("l'achat a ete effectué avec succes ", {
        autoClose: 1000,
      }); // ToastOptions
};

</script>
  