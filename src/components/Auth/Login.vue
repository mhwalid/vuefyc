<!-- Login.vue -->
<template>
   <div>
    <h2>Login</h2>
   
      <label>
        Username:
        <input v-model="email" type="text" />
      </label>
      <br />
      <label>
        Password:
        <input v-model="password" type="password" />
      </label>
      <br />
      <button  @click="login" >Login</button>
   
  </div>
     
  </template>
  
  <script lang="ts">

  import { useAuthStore } from '@/stores/auth'; // Assurez-vous que le chemin est correct
  import {ref} from 'vue';
  import {useRouter} from 'vue-router';


  export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    let email = ref('');
    let password = ref('');

    const login = () => {
      authStore.login(email.value, password.value);
      router.push('/')
    };

    return {
      user: authStore,
      login,
      email,
      password,
    };
  },   

}
  </script>
  