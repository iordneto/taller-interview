# Transaction System

A full-stack transaction management application built with modern web technologies. The system consists of a robust REST API backend and a responsive React frontend for managing financial transactions.

## 🏗️ Architecture Overview

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│                 │ ◄─────────────► │                 │
│    Frontend     │                 │     Backend     │
│   (React App)   │                 │   (Express API) │
│                 │                 │                 │
└─────────────────┘                 └─────────────────┘
     Port 5173                           Port 3000
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **Yarn** (recommended) or npm

### 1. Backend Setup (Required First)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
yarn install

# Start development server
yarn dev
```

The backend API will be available at `http://localhost:3000`

### 2. Frontend Setup

```bash
# Navigate to frontend directory (in a new terminal)
cd frontend

# Install dependencies
yarn install

# Start development server
yarn dev
```

The frontend application will be available at `http://localhost:5173`

## 📦 Project Structure

```
transaction-system/
├── backend/                 # REST API Server
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── schemas/         # Data validation
│   │   ├── types/           # TypeScript definitions
│   │   └── lib/             # Utilities & middleware
│   ├── package.json
│   └── README.md           # Backend documentation
│
├── frontend/               # React Application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API integration
│   │   ├── types/          # TypeScript definitions
│   │   └── lib/            # Utilities
│   ├── package.json
│   └── README.md          # Frontend documentation
│
└── README.md              # This file
```

## 🛠️ Backend Features

- **RESTful API** - Clean REST endpoints for transaction management
- **TypeScript** - Full type safety and modern JavaScript features
- **Data Validation** - Input validation using Zod schemas
- **CORS Support** - Cross-origin resource sharing enabled
- **Clean Architecture** - Separation of concerns with dependency injection
- **Hot Reload** - Development server with automatic restart

### Backend Technologies

- Node.js + Express.js
- TypeScript
- Zod (validation)
- CORS middleware

## 🎨 Frontend Features

- **Modern React** - Built with React 19 and latest features
- **Smart Caching** - TanStack Query for server state management
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Component Library** - Shadcn UI for consistent design
- **Real-time Updates** - Automatic cache invalidation and updates
- **Error Handling** - Comprehensive error states and loading indicators
- **Suspense** - Async loading with React Suspense

### Frontend Technologies

- React 19
- TanStack Query
- Tailwind CSS
- Shadcn UI
- TypeScript
- Vite

## 🔌 API Endpoints

### Get All Transactions

```http
GET http://localhost:3000/
```

### Create Transaction

```http
POST http://localhost:3000/
Content-Type: application/json

{
  "amount": 100.50,
  "description": "Transaction description"
}
```

## 🎯 Key Features

### Transaction Management

- ✅ **View Transactions** - List all transactions with real-time updates
- ✅ **Add Transactions** - Create new transactions with validation
- ✅ **Responsive Interface** - Works seamlessly on desktop and mobile
- ✅ **Loading States** - Visual feedback during operations
- ✅ **Error Handling** - User-friendly error messages

### Technical Features

- ✅ **Type Safety** - Full TypeScript coverage in both frontend and backend
- ✅ **Data Validation** - Client and server-side validation
- ✅ **Caching Strategy** - Smart caching with automatic invalidation
- ✅ **Hot Reload** - Development servers with instant updates
- ✅ **Clean Code** - Well-structured, maintainable codebase

## 📖 Detailed Documentation

For detailed setup instructions, API documentation, and development guidelines:

- **Backend Documentation**: See [`backend/README.md`](./backend/README.md)
- **Frontend Documentation**: See [`frontend/README.md`](./frontend/README.md)

## 🔧 Development Workflow

1. **Start Backend** (Terminal 1):

   ```bash
   cd backend && yarn dev
   ```

2. **Start Frontend** (Terminal 2):

   ```bash
   cd frontend && yarn dev
   ```

3. **Access Application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 🚀 Production Deployment

### Backend

```bash
cd backend
yarn build
yarn start
```

### Frontend

```bash
cd frontend
yarn build
yarn preview
```

## 🧪 Testing the System

### Using the Web Interface

1. Open http://localhost:5173
2. Use the form to add new transactions
3. View the transaction list updating in real-time

### Using API directly

```bash
# Create a transaction
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"amount": 100.50, "description": "Test transaction"}'

# Get all transactions
curl http://localhost:3000/
```

## 📝 License

This project is available under the ISC License.
