import { useState, useEffect } from 'react'
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
import type { User } from './lib/api'

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

  return (
    <div className="min-h-screen">
      <Navbar
        theme={theme}
        user={user}
        onThemeToggle={toggleTheme}
        onAuthSuccess={handleAuthSuccess}
        onLogout={handleLogout}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <Battle />
      <Leaderboard />
      <Skills />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
