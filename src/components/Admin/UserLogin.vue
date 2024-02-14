<template>
  <div class="pt-4 items-center justify-center place-items-center content-center ">
    <h1 class=" p-4 text-4xl font-bold dark:text-white text-center ">Liste des connexions</h1>
    <div class="pt-4 relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="px-6 py-3" scope="col">
            id
          </th>
          <th class="px-6 py-3" scope="col">
            Identifant
          </th>
          <th class="px-6 py-3" scope="col">
            Connecter le
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="userLogin in userLoginStore.userLogins" :key="userLogin.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white" scope="row">
            {{ userLogin.id }}
          </th>
          <td class="px-6 py-4">
            {{ userLogin.user_id }}
          </td>
          <td class="px-6 py-4">
            {{ formatDate(userLogin.login_at) }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import {useUserLoginStore} from '@/stores/userLogin';

const userLoginStore = useUserLoginStore();

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(2);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

onMounted(() => {
  userLoginStore.getAllUserLogins();
});
</script>
  