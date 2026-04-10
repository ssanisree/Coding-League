export interface User {
  id: string
  name: string
  email: string
  college: string
  xp: number
  streak: number
}

export interface AuthResponse {
  token: string
  user: User
}

export interface LeaderboardRow {
  rank: number
  name: string
  badge: string
  xp: number
}

interface SignupPayload {
  name: string
  email: string
  college: string
  password: string
}

interface LoginPayload {
  email: string
  password: string
}

export function signup(payload: SignupPayload) {
  return request<AuthResponse>('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export function login(payload: LoginPayload) {
  return request<AuthResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
}

export async function getLeaderboard() {
  const data = await request<{ leaderboard: LeaderboardRow[] }>('/api/leaderboard')
  return data.leaderboard
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message =
      typeof data === 'object' &&
      data !== null &&
      'error' in data &&
      typeof data.error === 'string'
        ? data.error
        : 'Something went wrong.'

    throw new Error(message)
  }

  return data as T
}
