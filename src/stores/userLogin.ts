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
        this.userLogins = data.userLogins;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des connexions d\'utilisateur : ' + error);
      }
    },
  },
});
