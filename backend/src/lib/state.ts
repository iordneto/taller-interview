import { Transaction } from "../types/transaction";

type State = {
  monetaryTransactions: Transaction[];
};

const initialState: State = {
  monetaryTransactions: [],
};

const state: State = initialState;

const addMonetaryTransaction = (transaction: Transaction) => {
  state.monetaryTransactions.push(transaction);

  return transaction;
};

const getAllMonetaryTransactions = () => {
  return state.monetaryTransactions;
};

export { addMonetaryTransaction, getAllMonetaryTransactions };
