// store/sharePriceHistory.ts
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
        const response = await fetch('http://localhost:8080/app/sharePriceHistories');
        const data = await response.json();
         this.sharePriceHistories = data;
      } catch (error) {
        console.error('Error fetching sharePriceHistories:', error);
       
      }
    },

    async getSharePriceHistoryById(sharePriceId: number): Promise<void> {
      try {
        const response = await fetch(`http://localhost:8080/app/sharePriceHistories/sharePrices/1`);
        const data = await response.json();
        this.sharePriceHistories = data;
      } catch (error) {
        console.error('Error fetching sharePriceHistory by ID:', error);
      }
    },
    async getname(Id: number): Promise<void> {
      try {
        const response = await fetch(`http://localhost:8080/app/sharePrices/${Id}`);
        const data = await response.json();
        return data.sharePrice.name
      } catch (error) {
        console.error('Error fetching sharePriceHistory by ID:', error);
      }
    },
  },
});
