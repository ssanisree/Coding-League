import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Battle from './components/Battle'
import Leaderboard from './components/Leaderboard'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DSA from './pages/DSA'
import CodingLeague from './pages/CodingLeague'
import LeaderboardPage from './pages/LeaderboardPage'
import AIDebugMode from './pages/AIDebugMode'
import BattlePage from './pages/BattlePage'
import DashboardPage from './pages/DashboardPage'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    return savedTheme || 'dark'
  })
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('coding-league-user')
    if (!savedUser) return null

    try {
      return JSON.parse(savedUser) as User
    } catch {
      localStorage.removeItem('coding-league-user')
      return null
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  const handleAuthSuccess = (nextUser: User, token: string) => {
    setUser(nextUser)
    localStorage.setItem('coding-league-user', JSON.stringify(nextUser))
    localStorage.setItem('coding-league-token', token)
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('coding-league-user')
    localStorage.removeItem('coding-league-token')
  }

  const navbarProps = {
    theme,
    user,
    onThemeToggle: toggleTheme,
    onAuthSuccess: handleAuthSuccess,
    onLogout: handleLogout,
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Navbar {...navbarProps} />
                <Hero />
                <HowItWorks />
                <Features />
                <Battle />
                <Leaderboard />
                <Skills />
                <Testimonials />
                <CTA />
                <Footer />
              </>
            )}
          />
          <Route path="/dsa" element={<DSA theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/coding-league" element={<CodingLeague theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/leaderboard" element={<LeaderboardPage theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/ai-debug" element={<AIDebugMode theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/battle" element={<BattlePage theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/dashboard" element={<DashboardPage theme={theme} onThemeToggle={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
