# Project Structure:

```text
prediction-market-nextjs/
├─ app/
│  ├─ api/
│  │  └─ markets/
│  │     └─ route.ts        # Backend API routes for markets
│  └─ page.tsx              # Frontend UI for creating/loading markets
├─ lib/
│  └─ mongodb.ts            # MongoDB connection helper (optional)
├─ package.json             # Project dependencies
├─ tsconfig.json            # TypeScript configuration
└─ .env.local               # Environment variables (MongoDB URI)
```

# Prediction Market Mini Project (Next.js Fullstack)

A small fullstack prediction market demo built with:

- Next.js (App Router + React)
- In-memory API for storing markets (can be swapped with MongoDB)
- TypeScript + React state management
- JSON API fetch integration

## Features

- Create market with a question
- Load market list
- Display market status and creation time

## How to Run

```bash
npm install
npm run dev
