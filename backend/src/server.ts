import express from "express";
import { makeTransactionController } from "./controllers/transaction.controller";
import { validateTransaction } from "./lib/middlewares";
import { transactionSchema } from "./schemas/transaction.schema";

const app = express();
app.use(express.json());

const transactionController = makeTransactionController();

app.post("/", validateTransaction(transactionSchema), (req, res) => {
  transactionController.createTransaction(req, res);
});

app.get("/", (req, res) => {
  transactionController.getAllTransactions(req, res);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
