import { Suspense } from "react";
import { TransactionList } from "./components/TransactionList";
import { AddTransactionForm } from "./components/AddTransactionForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <header className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Transaction System
          </h1>
          <p className="text-gray-600 mt-2">
            Manage your financial transactions
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <AddTransactionForm />
          </div>

          <div>
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              }
            >
              <TransactionList />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
