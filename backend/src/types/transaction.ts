type Transaction = {
  id: string;
  amount: number;
  description: string;
};

type TransactionDTO = {
  amount: number;
  description: string;
};

export type { Transaction, TransactionDTO };
