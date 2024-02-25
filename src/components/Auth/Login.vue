<template>
  <section class="dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div
          class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Se connecter
          </h1>
          <div class="space-y-4 md:space-y-6">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="email">Email</label>
              <input id="email" v-model="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="email"
                     placeholder="name@company.com"
                     required="true" type="email">
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="password">Mot de
                passe</label>
              <input id="password" v-model="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="password" placeholder="••••••••"
                     required="true"
                     type="password">
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                         required="true"
                         type="checkbox">
                </div>
                <div class="ml-3 text-sm">
                  <label class="text-gray-500 dark:text-gray-300" for="remember">Se rappeler de moi</label>
                </div>
              </div>
            </div>
            <button
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 bg-blue-500 hover:bg-blue-700 text-white font-bold"
                @click="login">Sign in
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Vous n'avez pas encore de compte?
              <router-link class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#"
                           to="/register">Se connecter
              </router-link>
            </p>
          </div>
        </div>
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
  