import crypto from 'node:crypto'
import cors from 'cors'
import express from 'express'
import { leaderboard } from './data/leaderboard.js'

const app = express()
const port = Number(process.env.PORT || 4000)

const users = new Map()

app.use(cors({ origin: ['http://localhost:5173', 'http://127.0.0.1:5173'] }))
app.use(express.json({ limit: '1mb' }))

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'coding-league-api',
    timestamp: new Date().toISOString(),
  })
})

app.post('/api/auth/signup', (req, res) => {
  const { name, email, college, password } = req.body

  if (!name || !email || !college || !password) {
    return res.status(400).json({ error: 'Name, email, college, and password are required.' })
  }

  const normalizedEmail = String(email).trim().toLowerCase()
  if (users.has(normalizedEmail)) {
    return res.status(409).json({ error: 'An account already exists for this email.' })
  }

  const user = {
    id: crypto.randomUUID(),
    name,
    email: normalizedEmail,
    college,
    xp: 0,
    streak: 0,
  }

  users.set(normalizedEmail, { ...user, password })

  res.status(201).json({
    token: createMockToken(user.id),
    user,
  })
})

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body
  const normalizedEmail = String(email || '').trim().toLowerCase()
  const storedUser = users.get(normalizedEmail)

  if (!storedUser || storedUser.password !== password) {
    return res.status(401).json({ error: 'Invalid email or password.' })
  }

  const { password: _password, ...user } = storedUser

  res.json({
    token: createMockToken(user.id),
    user,
  })
})

app.get('/api/leaderboard', (_req, res) => {
  res.json({ leaderboard })
})

app.use((req, res) => {
  res.status(404).json({ error: `No route found for ${req.method} ${req.path}` })
})

app.listen(port, () => {
  console.log(`Coding League API running at http://localhost:${port}`)
})

function createMockToken(userId) {
  return Buffer.from(`mock-token:${userId}`).toString('base64url')
}
