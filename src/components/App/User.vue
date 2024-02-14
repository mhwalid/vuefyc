<template>
  <div>
    <h2>Informations de l'utilisateur :</h2>
    <div v-if="user">
      <p>id : {{ user.id }}</p>
      <p>Prénom {{ user.first_name }}</p>
      <p>Nom : {{ user.last_name }}</p>
      <p>email :{{ user.email }}</p>
      <p>Argent : {{ user.wallet }} </p>
    </div>
    <p v-else>Chargement en cours...</p>

    <div class="c">
      <div>
        <label for="firstName">Prénom:</label>
        <input id="firstName" v-model="firstName" required type="text">
      </div>
      <div>
        <label for="lastName">Nom:</label>
        <input id="lastName" v-model="lastName" required type="text">
      </div>
      <button @click="updateUserInfo">Mettre à jour les informations</button>
    </div>
    <div class="c">
      <div>
        <label for="walletValue">Montant du porte-monnaie:</label>
        <input id="walletValue" v-model.number="walletValue" required type="number">
      </div>
      <button @click="updateWallet">Mettre Wallet</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {useUserStore} from '@/stores/user';

let user = ref();
const firstName = ref('');
const lastName = ref('');
const walletValue = ref(0);

let userStore = useUserStore();

const getuser = async () => {
  user = await userStore.getOne();
};

const updateUserInfo = async () => {
  await userStore.patchUserInfo(firstName.value, lastName.value);

};

const updateWallet = async () => {
  await userStore.patchWallet(walletValue.value);
};

onMounted(async () => {
  getuser();

});
</script>
  