# Coding League API

Small Express backend for the first product loop.

## Run

```powershell
npm run dev:api
```

The API runs on `http://localhost:4000`.

## Endpoints

- `GET /api/health`
- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/leaderboard`

The current implementation uses in-memory users. Data resets when the server restarts.
