import { Request, Response } from "express";
import TransactionService, {
  makeTransactionService,
} from "../services/transaction.service";

class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  async createTransaction(req: Request, res: Response) {
    const { amount, description } = req.body;

    const transaction = this.transactionService.createTransaction({
      amount,
      description: description,
    });

    res.status(201).json(transaction);
  }

  async getAllTransactions(req: Request, res: Response) {
    const transactions = this.transactionService.getAllTransactions();

    res.status(200).json(transactions);
  }
}

/* Prepared for dependency injection */
export const makeTransactionController = () => {
  return new TransactionController(makeTransactionService());
};

export default TransactionController;
