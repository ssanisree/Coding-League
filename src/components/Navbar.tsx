import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthModal } from './AuthModal'

interface NavbarProps {
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export default function Navbar({ theme, onThemeToggle }: NavbarProps) {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login')

  const handleAuthOpen = (mode: 'login' | 'signup') => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b h-14" style={{ background: 'var(--nav-bg)', borderColor: 'var(--nav-border)' }}>
        <div className="max-w-7xl mx-auto px-10 h-full flex items-center justify-between gap-5">
          {/* Logo */}
          <Link to="/" className="font-mono text-base font-bold flex-shrink-0" style={{ color: 'var(--gold)' }}>
            Coding<span style={{ color: '#FFFFFF' }}>League</span>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            <li><Link to="/dsa" className="font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-100" style={{ color: 'var(--nav-link)' }}>DSA</Link></li>
            <li><Link to="/coding-league" className="font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-100" style={{ color: 'var(--nav-link)' }}>1v1 Coding League</Link></li>
            <li><Link to="/leaderboard" className="font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-100" style={{ color: 'var(--nav-link)' }}>Leaderboard</Link></li>
            <li><Link to="/ai-debug" className="font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-100" style={{ color: 'var(--nav-link)' }}>AI Debug Mode</Link></li>
          </ul>

          {/* Right section */}
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
              Sign Up ↗
            </button>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
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
