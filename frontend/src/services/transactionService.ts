import type { Transaction, CreateTransactionDTO } from "../types/transaction";

const API_BASE_URL = "http://localhost:3000";

export const transactionService = {
  async getAllTransactions(): Promise<Transaction[]> {
    const response = await fetch(`${API_BASE_URL}/`);
    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    return response.json();
  },

  async createTransaction(data: CreateTransactionDTO): Promise<Transaction> {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to create transaction");
    }
    return response.json();
  },
};
