import { Suspense } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import type { Transaction } from "../types/transaction";

function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isPositive = transaction.amount > 0;

  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div className="flex-1">
        <p className="font-medium">{transaction.description}</p>
        <p className="text-sm text-gray-500">ID: {transaction.id}</p>
      </div>
      <div
        className={`text-lg font-semibold ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isPositive ? "+" : ""}${transaction.amount.toFixed(2)}
      </div>
    </div>
  );
}

function TransactionListContent() {
  const { data: transactions, isLoading, error } = useTransactions();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-red-600">
            Error loading transactions:{" "}
            {error instanceof Error ? error.message : "Unknown error"}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            No transactions found
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transactions ({transactions.length})</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </CardContent>
    </Card>
  );
}

export function TransactionList() {
  return (
    <Suspense
      fallback={
        <Card>
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          </CardContent>
        </Card>
      }
    >
      <TransactionListContent />
    </Suspense>
  );
}
