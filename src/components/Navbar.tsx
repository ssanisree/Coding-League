import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthModal } from './AuthModal'
import type { User } from '../lib/api'

interface NavbarProps {
  theme: 'light' | 'dark'
  user?: User | null
  onThemeToggle: () => void
  onAuthSuccess?: (user: User, token: string) => void
  onLogout?: () => void
}

export default function Navbar({
  theme,
  user = null,
  onThemeToggle,
  onAuthSuccess,
  onLogout,
}: NavbarProps) {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')
  const location = useLocation()

  const handleAuthOpen = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-ca-dark-bg" style={{ borderColor: 'var(--nav-border)' }}>
        <div className="max-w-full mx-auto px-10 h-16 flex items-center justify-between gap-8">
          <Link to="/" className="font-mono text-base font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>
            Coding<span style={{ color: '#FFFFFF' }}>League</span>
          </Link>

          <div className="flex items-center gap-12">
            <Link
              to="/dashboard"
              className={`font-mono text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive('/dashboard')
                  ? 'border-b-ca-dark-gold'
                  : 'border-b-transparent'
              }`}
              style={{
                color: isActive('/dashboard') ? 'var(--gold)' : 'var(--nav-link)'
              }}
            >
              Dashboard
            </Link>
            <Link
              to="/battle"
              className={`font-mono text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive('/battle') ? 'border-b-ca-dark-gold' : 'border-b-transparent'
              }`}
              style={{
                color: isActive('/battle') ? 'var(--gold)' : 'var(--nav-link)',
              }}
            >
              Battles
            </Link>
            <Link
              to="/dsa"
              className={`font-mono text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive('/dsa') ? 'border-b-ca-dark-gold' : 'border-b-transparent'
              }`}
              style={{
                color: isActive('/dsa') ? 'var(--gold)' : 'var(--nav-link)',
              }}
            >
              Skill Map
            </Link>
            <Link
              to="/ai-debug"
              className={`font-mono text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive('/ai-debug') ? 'border-b-ca-dark-gold' : 'border-b-transparent'
              }`}
              style={{
                color: isActive('/ai-debug') ? 'var(--gold)' : 'var(--nav-link)',
              }}
            >
              Debug Mode
            </Link>
            <Link
              to="/leaderboard"
              className={`font-mono text-xs font-bold uppercase tracking-wider border-b-2 transition-all whitespace-nowrap ${
                isActive('/leaderboard') ? 'border-b-ca-dark-gold' : 'border-b-transparent'
              }`}
              style={{
                color: isActive('/leaderboard') ? 'var(--gold)' : 'var(--nav-link)',
              }}
            >
              Leaderboard
            </Link>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={onThemeToggle}
              className="w-11 h-6 rounded-full border cursor-pointer relative flex-shrink-0 transition-colors"
              style={{
                background: theme === 'dark' ? 'var(--gold)' : '#333',
                borderColor: theme === 'dark' ? 'var(--gold)' : '#555',
              }}
              aria-label="Toggle dark mode"
            >
              <div
                className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-250 flex items-center justify-center text-xs opacity-100"
                style={{
                  background: theme === 'dark' ? 'var(--nav-bg)' : 'white',
                  color: 'var(--gold)',
                  transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(0)',
                }}
              >
                {theme === 'dark' ? 'D' : 'L'}
              </div>
            </button>

            {user ? (
              <>
                <Link
                  to="/leaderboard"
                  className="font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 border rounded transition-colors"
                  style={{
                    borderColor: 'var(--gold)',
                    background: 'var(--gold)',
                    color: 'var(--nav-bg)',
                  }}
                >
                  {user.name.split(' ')[0]} · {user.xp} XP
                </Link>
                <button
                  onClick={() => onLogout?.()}
                  className="font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 border rounded transition-colors"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'transparent',
                    color: 'var(--nav-link)',
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleAuthOpen('login')}
                  className="font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 border rounded transition-colors"
                  style={{
                    borderColor: 'var(--border)',
                    background: 'transparent',
                    color: 'var(--nav-link)',
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => handleAuthOpen('signup')}
                  className="font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 border rounded transition-colors"
                  style={{
                    borderColor: 'var(--gold)',
                    background: 'var(--gold)',
                    color: 'var(--nav-bg)',
                  }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {showAuth && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onSwitchMode={setAuthMode}
          onAuthSuccess={(nextUser, token) => {
            onAuthSuccess?.(nextUser, token)
            setShowAuth(false)
          }}
        />
      )}
    </>
  )
}
