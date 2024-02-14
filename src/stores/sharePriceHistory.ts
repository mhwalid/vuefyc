import { defineStore } from 'pinia';

interface SharePriceHistory {
  id: number;
  old_volume: number;
  old_value: number;
}

interface SharePriceHistoryState {
  sharePriceHistories: SharePriceHistory[];
}

export const useSharePriceHistoryStore = defineStore('sharePriceHistory', {
  state: (): SharePriceHistoryState => ({
    sharePriceHistories: [],
  }),

  actions: {
    async getAllSharePriceHistories(): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/sharePriceHistories', { credentials: "include" });
        const data = await response.json();
        this.sharePriceHistories = data;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des cours des actions : ' + error);
      }
    },

    async getSharePriceHistoryById(sharePriceId: number): Promise<void> {
      try {
        const response = await fetch(`http://localhost:8080/app/sharePriceHistories/sharePrices/1`, { credentials: "include" });
        const data = await response.json();
        this.sharePriceHistories = data;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des cours d\'une action : ' + error);
      }
    },

    async getSharePriceName(id: number): Promise<void> {
      try {
        const response = await fetch(`http://localhost:8080/app/sharePrices/${id}`, { credentials: "include" });
        const data = await response.json();
        return data.sharePrice.name
      } catch (error) {
        throw new Error('Erreur lors de la récupération de l\'action par son nom : ' + error);
      }
    },
  },
});
