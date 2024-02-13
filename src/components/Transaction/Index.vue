<!-- YourComponent.vue -->
<template>
    <div>
      <h2>Transactions:</h2>
      <ul>
        <li v-for="transaction in transactionStore.transactions" :key="transaction.id">
          {{ transaction.transacted_at }} - {{ transaction.value }} - {{ transaction.type_transaction }}
        </li>
      </ul>
  
    <div><label>Volume: </label>
    <input v-model="volume" type="number" /></div>

    <div>
        <label>Share Price ID: </label>
    <input v-model="sharePriceId" type="number" />
    </div>


    <button @click="sellShare">Sell Share</button>
    <button @click="buyShare">Buy Share</button>
    </div>
 
    <div class="flex flex-col items-center justify-center px-2 py-2 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-2 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Transactions
              </h1>
              <div class="space-y-4 md:space-y-6" >
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume</label>
                      <input type="number" v-model="volume" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </div>
                  <button  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold" @click="sellShare"  >Sign in</button>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                      <input type="number" v-model="sharePriceId"  name="password" id="password"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                  </div>
                  <button  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold" @click="buyShare"  >Sign in</button>
                </div>
          </div>
      </div>
  </div>
    
</template>


  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useTransactionStore } from '../../stores/transaction.ts';
  import { useRouter } from 'vue-router';
  const transactionStore = useTransactionStore();
  const volume = ref(0); 
  const sharePriceId = ref(0); 
  
  const getTransactions = () => {
    if (transactionStore.userId) {
      transactionStore.getTransactionsByUser(transactionStore.userId);
    } else {
      console.error('User ID not set. Please set the user ID first.');
    }
  };
  
  const sellShare = () => {
    transactionStore.sellShare(volume.value, sharePriceId.value);
  };
  
  const buyShare = () => {
    transactionStore.buyShare(volume.value, sharePriceId.value);
  };

// onMounted(() => {
//   // Automatically fetch transactions when the component is mounted
//   getTransactions();
// });
  </script>
  