export interface Transaction {
  id: string;
  amount: number;
  description: string;
}

export interface CreateTransactionDTO {
  amount: number;
  description: string;
}
