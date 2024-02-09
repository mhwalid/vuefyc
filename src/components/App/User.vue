<!-- UserComponent.vue -->
<template>
    <div>
      <h2>Informations de l'utilisateur :</h2>
      <div v-if="user">
      <p>id : {{ user.id }}</p>  
      <p>Frist name {{ user.first_name }}</p>  
      <p>Last name: {{ user.last_name }}</p>  
      <p>email :{{ user.email }}</p>  
      <p>wallet :  {{ user.wallet }} </p>  
      </div>
      <p v-else>Chargement en cours...</p>

      <div class="c">
        <div>
          <label for="firstName">Prénom:</label>
          <input id="firstName" v-model="firstName" type="text" required>
        </div>
        <div>
          <label for="lastName">Nom:</label>
          <input id="lastName" v-model="lastName" type="text" required>
        </div>
        <button @click="updateUserInfo">Mettre à jour les informations</button>
      </div>
      <div class="c">
        <div>
          <label for="walletValue">Montant du porte-monnaie:</label>
          <input id="walletValue" v-model.number="walletValue" type="number" required>
        </div>
        <button @click="updateWallet">Mettre Wallet</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref,onMounted } from 'vue';
  import { useUserStore } from '../../stores/User.ts';
  let user=ref();
  const firstName = ref('');
  const lastName = ref('');
  const walletValue = ref(0);

  let userStore = useUserStore();

  const getuser =async () => {
    user = await userStore.getOne();
   console.log(user.first_name)
  };

  const updateUserInfo = async () => {
  await userStore.patchUserInfo(firstName.value, lastName.value);
  
  };

  const updateWallet = async () => {
  await userStore.patchWallet(walletValue.value);
  };



  onMounted( async() => {
    getuser();

  });
  </script>
  