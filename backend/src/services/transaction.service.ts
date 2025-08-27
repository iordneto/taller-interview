import {
  addMonetaryTransaction,
  getAllMonetaryTransactions,
} from "../lib/state";
import { TransactionDTO } from "../types/transaction";

class TransactionService {
  constructor() {}

  createTransaction(transaction: TransactionDTO) {
    const newTransaction = addMonetaryTransaction({
      id: crypto.randomUUID(),
      ...transaction,
    });

    return newTransaction;
  }

  getAllTransactions() {
    return getAllMonetaryTransactions();
  }
}

/* Prepared for dependency injection */
export const makeTransactionService = () => {
  return new TransactionService();
};

export default TransactionService;
