<template>
    <div>
      <h2>Connexions d'utilisateur :</h2>
      <ul>
        <li v-for="userLogin in userLoginStore.userLogins" :key="userLogin.id">
          {{ userLogin.login_at }} - User ID: {{ userLogin.user_id }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useUserLoginStore } from '../../stores/UserLogin.ts';
  
  const userLoginStore = useUserLoginStore();
  
  onMounted(() => {
    userLoginStore.getAllUserLogins();
  });
  </script>
  