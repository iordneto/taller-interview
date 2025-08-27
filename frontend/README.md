# Frontend - Transaction System

This is the frontend of the transaction system built with React, TanStack Query, Tailwind CSS and Shadcn UI.

## Features

- ✅ Transaction listing with automatic cache
- ✅ Add new transactions
- ✅ Responsive and modern interface
- ✅ Loading states and error handling
- ✅ Suspense for asynchronous loading
- ✅ Automatic cache invalidation after mutations

## Technologies Used

- **React 19** - Frontend framework
- **TanStack Query** - Server state management and cache
- **Tailwind CSS** - Styling
- **Shadcn UI** - Interface components
- **TypeScript** - Static typing
- **Vite** - Build tool

## How to run

1. Make sure the backend is running on port 3000
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the project in development mode:

   ```bash
   yarn dev
   ```

4. Access http://localhost:5173

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Shadcn UI base components
│   ├── TransactionList.tsx
│   └── AddTransactionForm.tsx
├── hooks/               # React Query custom hooks
├── services/            # API services
├── types/               # TypeScript type definitions
└── lib/                 # Utilities
```

## Implemented Features

### Cache and Performance

- 5-minute automatic cache for transactions
- Smart invalidation after mutations
- Suspense boundaries for better UX
- React Query Devtools (development mode)

### Interface

- Responsive design (mobile-first)
- Loading and error states
- Visual feedback for actions
- Form validation

### API Integration

- Complete interface typing
- Robust error handling
- Automatic retry for network failures
