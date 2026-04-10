import { useState, type FormEvent } from 'react'
import { login, signup, type User } from '../lib/api'

interface AuthModalProps {
  mode: 'login' | 'signup'
  onClose: () => void
  onSwitchMode: (mode: 'login' | 'signup') => void
  onAuthSuccess?: (user: User, token: string) => void
}

export function AuthModal({ mode, onClose, onSwitchMode, onAuthSuccess }: AuthModalProps) {
  const [currentMode, setCurrentMode] = useState(mode)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [college, setCollege] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSwitchMode = (newMode: 'login' | 'signup') => {
    setCurrentMode(newMode)
    setError('')
    onSwitchMode(newMode)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response =
        currentMode === 'login'
          ? await login({ email, password })
          : await signup({ name, email, college, password })

      onAuthSuccess?.(response.user, response.token)
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : 'Authentication failed.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="bg-ca-dark-bg border border-ca-dark-bg2 rounded-lg p-10 w-full max-w-sm relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-4 bg-none border-none font-mono text-base text-ca-muted cursor-pointer hover:text-ca-dark-ink transition-colors"
          aria-label="Close auth modal"
        >
          X
        </button>

        <div className="font-mono text-base font-bold text-ca-dark-gold mb-1">
          Coding<span className="text-ca-muted">League</span>
        </div>
        <div className="font-mono text-xs text-ca-muted mb-7">
          {currentMode === 'login' ? 'Welcome back. Enter the Coding League.' : 'Join the Coding League.'}
        </div>

        <div className="flex gap-0 border border-ca-dark-bg2 rounded overflow-hidden mb-6">
          <button
            type="button"
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
            type="button"
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

        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          {currentMode === 'signup' && (
            <>
              <Field
                label="Full Name"
                type="text"
                placeholder="Arjun Mehta"
                value={name}
                onChange={setName}
              />
              <Field
                label="College"
                type="text"
                placeholder="IIT Bombay"
                value={college}
                onChange={setCollege}
              />
            </>
          )}

          <Field
            label={currentMode === 'signup' ? 'College Email' : 'Email'}
            type="email"
            placeholder="you@college.edu"
            value={email}
            onChange={setEmail}
          />
          <Field
            label="Password"
            type="password"
            placeholder={currentMode === 'signup' ? 'Create a strong password' : 'Password'}
            value={password}
            onChange={setPassword}
          />

          {error && <div className="font-mono text-xs text-ca-dark-red">{error}</div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-ca-dark-gold border border-ca-dark-gold rounded text-ca-dark-bg cursor-pointer mt-1 hover:bg-transparent hover:text-ca-dark-gold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? currentMode === 'login'
                ? 'Logging In...'
                : 'Creating...'
              : currentMode === 'login'
                ? 'Log In'
                : 'Create Account'}
          </button>

          <div className="flex items-center gap-3 my-1">
            <div className="flex-1 h-px bg-ca-dark-bg2"></div>
            <div className="font-mono text-xs text-ca-muted">or</div>
            <div className="flex-1 h-px bg-ca-dark-bg2"></div>
          </div>

          <button
            type="button"
            className="w-full py-3 font-mono text-xs font-bold uppercase tracking-wider bg-transparent border border-ca-dark-bg2 rounded text-ca-muted cursor-pointer hover:border-ca-dark-ink hover:text-ca-dark-ink transition-colors"
          >
            Continue with Google
          </button>

          <div className="font-mono text-xs text-ca-muted text-center mt-2">
            {currentMode === 'login' ? 'No account? ' : 'Already have an account? '}
            <button
              type="button"
              onClick={() => handleSwitchMode(currentMode === 'login' ? 'signup' : 'login')}
              className="text-ca-dark-gold cursor-pointer hover:underline"
            >
              {currentMode === 'login' ? 'Sign up free' : 'Log in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

interface FieldProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

function Field({ label, type, placeholder, value, onChange }: FieldProps) {
  return (
    <div>
      <label className="font-mono text-xs font-bold uppercase tracking-wider text-ca-muted block mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full px-3.5 py-3 bg-ca-dark-bg2 border border-ca-dark-bg2 rounded text-ca-dark-ink font-mono text-xs outline-none focus:border-ca-dark-gold transition-colors"
      />
    </div>
  )
}
