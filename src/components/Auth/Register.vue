<template>
  <section class="dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <form class="p-6 space-y-4 md:space-y-6 sm:p-8" @submit.prevent="register">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Créer votre compte
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Prénom </label>
              <input v-model="firstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Prenom"
                     required=true type="text">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Nom</label>
              <input v-model="lastName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Nom"
                     required=true type="text">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Email</label>
              <input v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     placeholder="Email"
                     required=true type="email">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">Mot de
                passe</label>
              <input v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••"
                     required=true
                     type="password">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Wallet</label>
              <input v-model="wallet" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     required=true
                     type="number">
            </div>
            <div class="flex items-center mb-4">
              <input id="default-checkbox" v-model="isCdu" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox"
                     value="">
              <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="default-checkbox">Accept
                CDU:</label>
            </div>
            <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold"
                    type="submit">
              Enregistrer
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Si vous avez deja un compte
              <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500" to='/login'>Se
                connecter
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import {useAuthStore} from '@/stores/auth';
import {ref} from 'vue';
import {useRouter} from 'vue-router';

export default {
  setup() {
    const userStore = useAuthStore();
    const router = useRouter();
    let firstName = ref('');
    let lastName = ref('');
    let email = ref('');
    let password = ref('');
    let wallet = ref('');
    let isCdu = ref('');

    const register = () => {
      userStore.register(firstName.value, lastName.value, email.value, password.value, wallet.value, isCdu.value, null);
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