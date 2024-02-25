import { defineStore } from 'pinia';

  interface SharePrice{
    name:string
  }

  interface SharePriceState {
    sharePrice: SharePrice;
  }
  
  export const useSharePriceStore = defineStore('sharePrice', {
    state: (): SharePriceState => ({
      sharePrice: String,
    }),
  
  actions: {
    async getSharePriceName(id: number){
      try {
        const response = await fetch(`http://localhost:8080/app/sharePrices`, { credentials: "include" });
        const data = await response.json();
        this.sharePrice = data
      } catch (error) {
        throw new Error('Erreur lors de la récupération de l\'action par son nom : ' + error);
      }
    },
  },
});