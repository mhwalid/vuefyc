// store/userLogin.ts
import { defineStore } from 'pinia';

interface UserLogin {
  id: number;
  user_id: number;
  login_at: string;
}

interface UserLoginState {
  userLogins: UserLogin[];
}

export const useUserLoginStore = defineStore('userLogin', {
  state: (): UserLoginState => ({
    userLogins: [],
  }),

  actions: {
    async getAllUserLogins(): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/admin/userLogins', { credentials: "include" });
        const data = await response.json();

        // Supposant que la structure de réponse est un tableau d'objets UserLogin
        this.userLogins = data.userLogins;
        console.log(this.userLogins)
      } catch (error) {
        console.error('Erreur lors de la récupération des connexions d\'utilisateur :', error);
        // Gérer l'erreur selon les besoins
      }
    },
  },
});
