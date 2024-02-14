// store/auth.ts
import { defineStore } from 'pinia';
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
        this.isAuthenticated();
      } catch (error) {
        console.error('Error logging in:', error);
        throw new Error('Login failed'); // Gérer les erreurs de manière appropriée
      }
    },

    async logout(): Promise<void> {
      try {
        await fetch('http://localhost:8080/auth/logout', { credentials: "include" });
        localStorage.removeItem("user");
      } catch (error) {
        console.error('Error logging out:', error);
      } 
    },

    async isAuthenticated(): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/auth/whoiam',{ credentials: "include" });
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.userLogin));
      } catch (error) {
        console.error('Error fetching sharePriceHistories:', error);
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
      } catch (error) {
        console.error('Error registering:', error);
        throw new Error('Registration failed'); // Gérer les erreurs de manière appropriée
      }
    },
  },
});
