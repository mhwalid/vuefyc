import { defineStore } from 'pinia';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  wallet: number;
  isCdu: boolean;
  cduAcceptedAt: string | null;
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
          body: JSON.stringify({
            email,
            password,
          }),
        })
        this.isAuthenticated();
      } catch (error) {
        throw new Error('Erreur lors de la connexion : ' + error);
      }
    },

    async logout(): Promise<void> {
      try {
        await fetch('http://localhost:8080/auth/logout', { credentials: "include" });
        localStorage.removeItem("user");
      } catch (error) {
        throw new Error('Erreur lors de la déconnexion : ' + error);
      }
    },

    async isAuthenticated(): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/auth/whoiam', { credentials: "include" });
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data.userLogin));
      } catch (error) {
        throw new Error('Erreur lors de la vérification de l\'authentification : ' + error);
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

        this.user = await response.json();
      } catch (error) {
        throw new Error('Erreur lors de l\'inscription');
      }
    },
  },
});
