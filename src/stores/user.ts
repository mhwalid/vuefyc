import { defineStore } from 'pinia';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  wallet: string;
  is_cdu: number;
  cdu_accepted_at: string | null;
  register_at: string;
  updated_at: string;
  unsubscribe_at: string | null;
  is_active: number;
  role_id: number;
}

interface UserState {
  user: User | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
  }),

  actions: {
    async getOne(): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/users', { credentials: "include" });
        const data = await response.json();
        return this.user = data.user;

      } catch (error) {
        throw new Error('Erreur lors de la récupération de l\'utilisateur : ' + error);
      }
    },

    async patchWallet(value: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/users/wallet', {
          credentials: "include",
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value,
          }),
        });

        await response.json();
      } catch (error) {
        throw new Error('Erreur lors de la mise à jour du porte-monnaie de l\'utilisateur : ' + error);
      }
    },

    async patchUserInfo(firstName: string, lastName: string): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/users/info', {
          credentials: "include",
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
          }),
        });
        await response.json();
      } catch (error) {
        throw new Error('Erreur lors de la mise à jour des informations utilisateur : ' + error);
      }
    },
  },
});