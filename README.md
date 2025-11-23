# Tarkony Express Backend

Minimal Express backend (TypeScript) that fetches third party GraphQL data, stores it in MongoDB and exposes simple REST endpoints.

## Features

- Express + TypeScript
- MongoDB (mongoose)
- CORS, dotenv configuration
- Scheduled cron jobs (optional)
- Example routes for items/categories and health checks

## Prerequisites

- Node.js (v18+ recommended)
- MongoDB running locally or a connection URI

## Quick setup

1. Install dependencies

```powershell
npm install
```

2. Create `.env` in project root:

```
PORT=9001
MONGO_URI=mongodb://localhost:27017/tarkony
```

3. Development

```powershell
npm run dev
# opens server (watch mode via tsx). Default port 9001 if not set in .env
```

4. Build & start (production)

```powershell
npm run build
npm start
```

## Important scripts (from package.json)

- `npm run dev` — start in dev/watch mode (tsx)
- `npm run build` — TypeScript build (watch in current config)
- `npm start` — run compiled code from `dist`

## Key endpoints

- `GET /` — root health
- `GET /DBHealth` — database connection check
- `GET /APIHealth` — upstream API status
- `GET /clearCollections` — clear example collections
- `GET /items` — merged item data
- `GET /categories` — category list

Adjust routes prefix if your routes are mounted under `/api`.

## Cron jobs

Cron tasks are available in `src/cron.ts`. They are disabled by default in `src/index.ts`. Enable `startCronJobs()` in `index.ts` to activate.

## Project layout (important files)

- `src/index.ts` — app entry
- `src/routes.ts` — route definitions
- `src/cron.ts` — scheduled jobs
- `src/mongo.db.ts` — DB helpers (connect, seed, CRUD)
- `src/fetch.ts` — GraphQL fetch + normalize functions
