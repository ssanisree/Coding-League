import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthModal } from './AuthModal'

interface BattleNavbarProps {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
  activePage?: 'dashboard' | 'battles' | 'skill-map' | 'debug-mode' | 'leaderboard'
}

export default function BattleNavbar({ theme, onThemeToggle, activePage = 'battles' }: BattleNavbarProps) {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const handleAuthOpen = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  const isActive = (page: string) => activePage === page

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b h-14 bg-ca-dark-bg border-ca-dark-bg2">
        <div className="max-w-full mx-auto px-10 h-full flex items-center justify-between gap-5">
          {/* Logo */}
          <Link to="/" className="font-mono text-base font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>
            Coding<span style={{ color: '#FFFFFF' }}>League</span>
          </Link>

          {/* Right section with Auth and Level */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={onThemeToggle}
              className="w-11 h-6 rounded-full border cursor-pointer relative flex-shrink-0 transition-colors"
              style={{ 
                background: theme === 'dark' ? 'var(--gold)' : '#333',
                borderColor: theme === 'dark' ? 'var(--gold)' : '#555'
              }}
              aria-label="Toggle dark mode"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full transition-transform duration-250 flex items-center justify-center text-xs opacity-100`}
                style={{
                  background: theme === 'dark' ? 'var(--nav-bg)' : 'white',
                  color: theme === 'dark' ? 'var(--gold)' : 'var(--gold)',
                  transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(0)'
                }}
              >
                {theme === 'dark' ? '☽' : '☀'}
              </div>
            </button>

            {/* Auth buttons */}
            <button
              onClick={() => handleAuthOpen('login')}
              className="font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 border rounded transition-colors"
              style={{ 
                borderColor: 'var(--border)',
                background: 'transparent',
                color: 'var(--nav-link)'
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
                color: 'var(--nav-bg)'
              }}
            >
              Sign Up
            </button>

            {/* Level Badge */}
            <div className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider pl-3 border-l border-ca-dark-bg2">
              🛡️ LvL 12 DEBUGGER
            </div>
          </div>
        </div>
      </nav>

      {/* Battle Route Navbar */}
      <div className="fixed top-14 left-0 right-0 z-40 border-b border-ca-dark-bg2 bg-ca-dark-bg">
        <div className="max-w-full px-10 flex items-center">
          <div className="flex items-center gap-8">
            <Link
              to="/coding-league"
              className={`font-mono text-xs font-bold uppercase tracking-wider py-4 border-b-2 transition-all ${
                isActive('dashboard')
                  ? 'text-ca-dark-gold border-b-ca-dark-gold'
                  : 'text-gray-500 border-b-transparent hover:text-ca-dark-gold hover:border-b-ca-dark-gold'
              }`}
            >
              DASHBOARD
            </Link>
            <Link
              to="/battle"
              className={`font-mono text-xs font-bold uppercase tracking-wider py-4 border-b-2 transition-all ${
                isActive('battles')
                  ? 'text-ca-dark-gold border-b-ca-dark-gold'
                  : 'text-gray-500 border-b-transparent hover:text-ca-dark-gold hover:border-b-ca-dark-gold'
              }`}
            >
              BATTLES
            </Link>
            <button
              className={`font-mono text-xs font-bold uppercase tracking-wider py-4 border-b-2 transition-all ${
                isActive('skill-map')
                  ? 'text-ca-dark-gold border-b-ca-dark-gold'
                  : 'text-gray-500 border-b-transparent hover:text-ca-dark-gold hover:border-b-ca-dark-gold'
              }`}
            >
              SKILL MAP
            </button>
            <button
              className={`font-mono text-xs font-bold uppercase tracking-wider py-4 border-b-2 transition-all ${
                isActive('debug-mode')
                  ? 'text-ca-dark-gold border-b-ca-dark-gold'
                  : 'text-gray-500 border-b-transparent hover:text-ca-dark-gold hover:border-b-ca-dark-gold'
              }`}
            >
              DEBUG MODE
            </button>
            <button
              className={`font-mono text-xs font-bold uppercase tracking-wider py-4 border-b-2 transition-all ${
                isActive('leaderboard')
                  ? 'text-ca-dark-gold border-b-ca-dark-gold'
                  : 'text-gray-500 border-b-transparent hover:text-ca-dark-gold hover:border-b-ca-dark-gold'
              }`}
            >
              LEADERBOARD
            </button>
          </div>
        </div>
      </div>

      {showAuth && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuth(false)}
          onSwitchMode={setAuthMode}
        />
      )}
    </>
  )
}
