import { useState } from 'react'

interface AuthModalProps {
  mode: 'login' | 'signup'
  onClose: () => void
  onSwitchMode: (mode: 'login' | 'signup') => void
}

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState(mode)

  const handleSwitchMode = (newMode: 'login' | 'signup') => {
    setCurrentMode(newMode)
    onSwitchMode(newMode)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="bg-ca-dark-bg border border-ca-dark-bg2 rounded-lg p-10 w-full max-w-sm relative shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 bg-none border-none font-mono text-base text-ca-muted cursor-pointer hover:text-ca-dark-ink transition-colors"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="font-mono text-base font-bold text-ca-dark-gold mb-1">
          Coding<span className="text-ca-muted">League</span>
        </div>
        <div className="font-mono text-xs text-ca-muted mb-7">
          {currentMode === 'login' ? 'Welcome back. Enter the Coding League.' : 'Join the Coding League.'}
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border border-ca-dark-bg2 rounded overflow-hidden mb-6">
          <button
            onClick={() => handleSwitchMode('login')}
            className={`flex-1 py-2 font-mono text-xs font-bold uppercase tracking-wider border-none cursor-pointer transition-all ${
              currentMode === 'login'
                ? 'bg-ca-dark-gold text-ca-dark-bg'
                : 'bg-transparent text-ca-muted hover:text-ca-dark-ink'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => handleSwitchMode('signup')}
            className={`flex-1 py-2 font-mono text-xs font-bold uppercase tracking-wider border-none cursor-pointer transition-all ${
              currentMode === 'signup'
                ? 'bg-ca-dark-gold text-ca-dark-bg'
                : 'bg-transparent text-ca-muted hover:text-ca-dark-ink'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {currentMode === 'login' && (
          <form className="flex flex-col gap-3.5">
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@college.edu"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-ca-dark-gold border border-ca-dark-gold rounded text-ca-dark-bg cursor-pointer mt-1 hover:bg-transparent hover:text-ca-dark-gold transition-colors"
            >
              Log In →
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-ca-dark-bg2"></div>
              <div className="font-mono text-xs text-ca-muted">or</div>
              <div className="flex-1 h-px bg-ca-dark-bg2"></div>
            </div>

            {/* Google button */}
            <button
              type="button"
              className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-transparent border border-ca-dark-bg2 rounded text-ca-muted cursor-pointer hover:border-ca-dark-ink hover:text-ca-dark-ink transition-colors flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              </svg>
              Continue with Google
            </button>

            <div className="font-mono text-xs text-ca-muted text-center mt-2">
              No account? <button onClick={() => handleSwitchMode('signup')} className="text-ca-dark-gold cursor-pointer hover:underline">Sign up free</button>
            </div>
          </form>
        )}

        {/* Signup Form */}
        {currentMode === 'signup' && (
          <form className="flex flex-col gap-3.5">
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Arjun Mehta"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                College Email
              </label>
              <input
                type="email"
                placeholder="you@college.edu"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                College
              </label>
              <input
                type="text"
                placeholder="IIT Bombay"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a strong password"
                className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-ca-dark-gold border border-ca-dark-gold rounded text-ca-dark-bg cursor-pointer mt-1 hover:bg-transparent hover:text-ca-dark-gold transition-colors"
            >
              Create Account ↗
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-1">
              <div className="flex-1 h-px bg-ca-dark-bg2"></div>
              <div className="font-mono text-xs text-ca-muted">or</div>
              <div className="flex-1 h-px bg-ca-dark-bg2"></div>
            </div>

            {/* Google button */}
            <button
              type="button"
              className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-transparent border border-ca-dark-bg2 rounded text-ca-muted cursor-pointer hover:border-ca-dark-ink hover:text-ca-dark-ink transition-colors flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              </svg>
              Continue with Google
            </button>

            <div className="font-mono text-xs text-ca-muted text-center mt-2">
              Already have an account? <button onClick={() => handleSwitchMode('login')} className="text-ca-dark-gold cursor-pointer hover:underline">Log in</button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
