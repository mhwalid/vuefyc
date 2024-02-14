import { defineStore } from 'pinia';

interface Transaction {
  id: number;
  value: number;
  volume: number;
  type_transaction: string;
  transacted_at: string;
  user_id: number;
  share_price_history_id: number;
}

interface TransactionState {
  transactions: Transaction[];
}

export const useTransactionStore = defineStore('transaction', {
  state: (): TransactionState => ({
    transactions: [],

  }),

  actions: {
    async sellShare(volume: number, sharePriceId: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/transactions/sell', {
          credentials: "include",
          method: 'POST',
          body: JSON.stringify({
            volume,
            sharePriceId,
          }),
        });

        await response.json();
      } catch (error) {
        throw new Error('Erreur lors de la vente de l\'action : ' + error);
      }
    },

    async buyShare(volume: number, sharePriceId: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/transactions/buy', {
          credentials: "include",
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            volume,
            sharePriceId,
          }),
        });

        await response.json();
      } catch (error) {
        throw new Error('Erreur lors de l\'achat de l\'action : ' + error);
      }
    },
  },
});
