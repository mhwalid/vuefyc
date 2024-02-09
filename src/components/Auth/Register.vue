<!-- Register.vue -->
<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label>
          First Name:
          <input v-model="firstName" type="text" />
        </label>
        <br />
        <label>
          Last Name:
          <input v-model="lastName" type="text" />
        </label>
        <br />
        <label>
          Email:
          <input v-model="email" type="text" />
        </label>
        <br />
        <label>
          Password:
          <input v-model="password" type="password" />
        </label>
        <br />
        <label>
          Wallet:
          <input v-model="wallet" type="number" />
        </label>
        <br />
        <label>
          Accept CDU:
          <input v-model="isCdu" type="checkbox" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  

  <script lang="ts">
  import { useAuthStore } from '../../stores/auth.ts';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default {
    setup() {
      const userStore = useAuthStore();
      const router = useRouter();
       let firstName = ref('');
       let lastName= ref('');
       let email= ref('');
       let password= ref('');
       let wallet = ref('');
       let isCdu = ref('');
       
      const register = () => {
        userStore.register(firstName.value,lastName.value,email.value,password.value,wallet.value,isCdu.value,null);
        router.push('/')
      };

      return {
        user: userStore,
        register,
        firstName,
        lastName,
        email,
        password,
        wallet,
        isCdu
      };
    },
    }
  </script>