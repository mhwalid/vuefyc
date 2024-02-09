// store/wallet.ts
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

    async getTransactionsByUser(userId: number): Promise<void> {
      try {
        const response = await fetch(`http://localhost:8080/app/transactions/users/${userId}`);
        const data = await response.json();

        // Assuming the response structure is an array of transactions
        this.transactions = data;
      } catch (error) {
        console.error('Error fetching transactions:', error);
        // Handle error as needed
      }
    },

    async sellShare(volume: number, sharePriceId: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/transactions/sell', {
          method: 'POST',
          body: JSON.stringify({
            volume,
            sharePriceId,
          }),
        });

        const data = await response.json();
        console.log('Sell Share Response:', data);
      } catch (error) {
        console.error('Error selling share:', error);
      }
    },

    async buyShare(volume: number, sharePriceId: number): Promise<void> {
      try {
        const response = await fetch('http://localhost:8080/app/transactions/buy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            volume,
            sharePriceId,
          }),
        });

        const data = await response.json();
        console.log('Buy Share Response:', data);
      } catch (error) {
        console.error('Error buying share:', error);
      }
    },
  },
});
