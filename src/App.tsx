import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    // Set initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const initialTheme = savedTheme || 'dark'

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
    document.documentElement.style.colorScheme = initialTheme
  }, [])

  useEffect(() => {
    // Update data-theme attribute when theme changes
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    // Intersection Observer for reveal animations
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

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar theme={theme} onThemeToggle={toggleTheme} />
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
          } />
          <Route path="/dsa" element={<DSA theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/coding-league" element={<CodingLeague theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/leaderboard" element={<LeaderboardPage theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/ai-debug" element={<AIDebugMode theme={theme} onThemeToggle={toggleTheme} />} />
          <Route path="/battle" element={<BattlePage theme={theme} onThemeToggle={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
