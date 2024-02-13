// store/auth.ts
import { defineStore } from 'pinia';
import axios, { AxiosResponse } from 'axios';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  wallet: number;
  isCdu: boolean;
  cduAcceptedAt: string | null;
  // Ajoutez d'autres propriétés utilisateur si nécessaire
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
  }),

  actions: {
    async login(email: string, password: string): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/auth/login', {
          method: 'POST',
          credentials: "include",
          redirect: "follow",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': "true"
          },
          withCredentials: true,
          body: JSON.stringify({
            email,
            password,
          }),
        })

        this.user = response.data;
        this.isAuthenticated = true;
        localStorage.setItem("user", JSON.stringify(email));
      } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Login failed'); // Gérer les erreurs de manière appropriée
      }
    },

    async logout(): Promise<void> {
      try {
        await axios.get('http://localhost:8080/auth/logout', { credentials: "include" });
        localStorage.removeItem("user");
      } catch (error) {
        console.error('Error logging out:', error);
      } finally {
        // Mettez à jour l'état du store après la déconnexion, que l'appel réussisse ou échoue
        this.user = null;
        this.isAuthenticated = false;
      }
    },

    async register(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      wallet: string,
      isCdu: string,
      cduAcceptedAt: null,
    ): Promise<void> {
      try {
        const response = await fetch(
          'http://localhost:8080/auth/register', {
          method: 'POST',
          credentials: "include",
          redirect: "follow",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': "true"
          },
          withCredentials: true,
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            wallet,
            isCdu,
            cduAcceptedAt
          }),
        })

        this.user = response.data;
        this.isAuthenticated = true;
        console.log(response.data)
      } catch (error) {
        console.error('Error registering:', error);
        throw new Error('Registration failed'); // Gérer les erreurs de manière appropriée
      }
    },
  },
});
