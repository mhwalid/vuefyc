import { defineStore } from 'pinia';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  wallet: string; // ou number si le montant du porte-monnaie est toujours un nombre
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
        const response = await fetch('http://localhost:8080/app/users');
        const data = await response.json();
        // Supposant que la structure de réponse est un objet User
        return this.user = data.user;
        
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'utilisateur :', error);
        // Gérer l'erreur selon les besoins
      }
    },
    async patchWallet(value: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/users/wallet', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            value,
          }),
        });

        // Si vous avez besoin de traiter la réponse, vous pouvez le faire ici
         const data = await response.json();
         console.log(data)
      } catch (error) {
        console.error('Erreur lors de la mise à jour du porte-monnaie de l\'utilisateur :', error);
        // Gérer l'erreur selon les besoins
      }
    },

    async patchUserInfo(firstName: string, lastName: string): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/users/info', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
          }),
        });

        // Si vous avez besoin de traiter la réponse, vous pouvez le faire ici
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.error('Erreur lors de la mise à jour des informations utilisateur :', error);
        // Gérer l'erreur selon les besoins
      }
    },
  },
});