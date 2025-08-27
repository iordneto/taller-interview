# Backend - Transaction System API

A robust REST API for managing financial transactions built with Node.js, Express, TypeScript, and Zod validation.

## Features

- ✅ **RESTful API** - Clean REST endpoints for transaction management
- ✅ **TypeScript** - Full type safety and modern JavaScript features
- ✅ **Data Validation** - Input validation using Zod schemas
- ✅ **CORS Support** - Cross-origin resource sharing enabled
- ✅ **In-Memory Storage** - Simple data persistence for development
- ✅ **Dependency Injection** - Clean architecture with DI pattern
- ✅ **Error Handling** - Comprehensive error handling and validation

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Static typing for JavaScript
- **Zod** - Schema validation library
- **CORS** - Cross-origin resource sharing middleware
- **ts-node-dev** - Development server with hot reload

## API Endpoints

### Get All Transactions

```http
GET /
```

**Response:**

```json
[
  {
    "id": "uuid-string",
    "amount": 100.5,
    "description": "Transaction description"
  }
]
```

### Create Transaction

```http
POST /
Content-Type: application/json

{
  "amount": 100.50,
  "description": "Transaction description"
}
```

**Response:**

```json
{
  "id": "uuid-string",
  "amount": 100.5,
  "description": "Transaction description"
}
```

**Validation Rules:**

- `amount`: Must be a number (required)
- `description`: Must be a string (required)

## Project Structure

```
src/
├── controllers/          # Request handlers
│   └── transaction.controller.ts
├── services/            # Business logic
│   └── transaction.service.ts
├── schemas/             # Validation schemas
│   └── transaction.schema.ts
├── types/               # TypeScript type definitions
│   └── transaction.ts
├── lib/                 # Utilities and middleware
│   ├── middlewares.ts
│   └── state.ts
├── server.ts            # Express server setup
└── index.ts            # Application entry point
```

## How to Run

### Prerequisites

- Node.js (v18 or higher)
- Yarn or npm

### Installation

1. **Navigate to backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```

### Development

**Start development server:**

```bash
yarn dev
# or
npm run dev
```

The server will start on `http://localhost:3000` with hot reload enabled.

### Production

**Build the project:**

```bash
yarn build
# or
npm run build
```

**Start production server:**

```bash
yarn start
# or
npm start
```

## Architecture

### Clean Architecture Pattern

The project follows clean architecture principles with clear separation of concerns:

- **Controllers** - Handle HTTP requests and responses
- **Services** - Contain business logic and data operations
- **Schemas** - Define data validation rules
- **Types** - Provide TypeScript interfaces
- **Middleware** - Handle cross-cutting concerns like validation

### Dependency Injection

The application uses a simple dependency injection pattern with factory functions:

- `makeTransactionController()` - Creates controller with injected service
- `makeTransactionService()` - Creates service with injected dependencies

### Data Storage

Currently uses in-memory storage for simplicity. The architecture supports easy migration to databases like PostgreSQL, MongoDB, or others.

## Development Features

- **Hot Reload** - Automatic server restart on file changes
- **Type Safety** - Full TypeScript coverage
- **Input Validation** - Automatic request validation with detailed error messages
- **CORS Enabled** - Ready for frontend integration
- **Clean Logging** - Console logging for development debugging

## Testing the API

### Using curl

**Get all transactions:**

```bash
curl http://localhost:3000/
```

**Create a transaction:**

```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"amount": 100.50, "description": "Test transaction"}'
```

### Expected Responses

**Success Response (GET):**

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "amount": 100.5,
    "description": "Test transaction"
  }
]
```

**Success Response (POST):**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "amount": 100.5,
  "description": "Test transaction"
}
```

**Validation Error Response:**

```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "amount",
      "message": "Amount must be a number and is required"
    }
  ]
}
```
