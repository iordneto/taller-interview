import { useState } from "react";
import { useCreateTransaction } from "../hooks/useTransactions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import type { CreateTransactionDTO } from "../types/transaction";

export function AddTransactionForm() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const createTransactionMutation = useCreateTransaction();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || !description.trim()) {
      return;
    }

    const transactionData: CreateTransactionDTO = {
      amount: numericAmount,
      description: description.trim(),
    };

    createTransactionMutation.mutate(transactionData, {
      onSuccess: () => {
        setAmount("");
        setDescription("");
      },
    });
  };

  const isSubmitDisabled =
    !amount ||
    !description.trim() ||
    isNaN(parseFloat(amount)) ||
    createTransactionMutation.isPending;

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Transaction</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium mb-2">
              Amount
            </label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              disabled={createTransactionMutation.isPending}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <Input
              id="description"
              type="text"
              placeholder="Transaction description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={createTransactionMutation.isPending}
            />
          </div>

          {createTransactionMutation.error && (
            <div className="text-red-600 text-sm">
              Error creating transaction:{" "}
              {createTransactionMutation.error instanceof Error
                ? createTransactionMutation.error.message
                : "Unknown error"}
            </div>
          )}

          <Button type="submit" disabled={isSubmitDisabled} className="w-full">
            {createTransactionMutation.isPending
              ? "Creating..."
              : "Create Transaction"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
