# Monito Pets Store - SWD392 Project

This project is a software system developed for the SWD392 course: Software Design and Architecture at FPT University. The course focuses on the concepts and methods for the architectural design of software systems that are complex enough to require a team effort over an extended period.

## Project Overview

[...SOMETHING...]

## Tech Stack

The project is divided into two main parts: a client-side application and a server-side application.

### Client (Frontend)

- **Framework/Library:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** [...SOMETHING...]
- **State Management:** [...SOMETHING...]
- **Routing:** React Router DOM

### Server (Backend)

- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB (using Mongoose)
- **Authentication:** [...SOMETHING...]

## Project Structure

```
monito-pets-store/
├── client/         # React frontend application
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── vite.config.ts
├── server/         # Express backend application
│   ├── src/
│   │   ├── configs/
│   │   └── index.ts
│   ├── .env.example
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm or yarn
- MongoDB instance running

### Server Setup

1.  **Navigate to the server directory:**
    ```bash
    cd server
    ```
2.  **Create a `.env` file:**
    Copy the contents of [server/.env.example](server/.env.example) into a new file named `.env`.
    Update the `MONGO_URI` and other variables as needed.
    ```
    // filepath: server/.env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/monito_pets_store_db // Or your MongoDB connection string
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The server will typically start on `http://localhost:5000` (or the `PORT` specified in your `.env` file).

### Client Setup

1.  **Navigate to the client directory:**
    ```bash
    cd client
    ```
2.  **Create a `.env` file (if needed for API keys or specific configurations):**
    You can copy [client/.env.example](client/.env.example) if you have environment-specific configurations for the client.
    ```
    // filepath: client/.env
    // Example: VITE_API_BASE_URL=http://localhost:5000/api
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The client application will typically start on `http://localhost:5173` (Vite's default port).

---

_This README was generated with assistance from GitHub Copilot._
