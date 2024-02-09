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
  