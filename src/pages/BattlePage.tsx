import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'

interface Player {
  name: string
  rank: string
  badge: string
  completion: number
  isOnline: boolean
  code: string
}

export default function BattlePage({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [timeRemaining, setTimeRemaining] = useState(864) // 14:24 in seconds
  const [fullscreenPlayer, setFullscreenPlayer] = useState<1 | 2 | null>(null)
  const wpmData = [114, 118, 112, 120, 116]

  const player1: Player = {
    name: 'VIKRAM S.',
    rank: 'EXPERT_LATEST',
    badge: 'DEBUGGER',
    completion: 72.4,
    isOnline: true,
    code: `const protocol = require( '@stealth/core' );
const { analyze } = protocol;

async function initializeSync () {
  try {
    await analyze.handshake();
    console.log( 'System_Ready' );
  }
  catch (e) {
    throw new Error('AUTH_FAILED');
  }
}`
  }

  const player2: Player = {
    name: 'RAHUL K.',
    rank: 'RUNTIME_WARRIOR',
    badge: 'ARCHITECT',
    completion: 98.9,
    isOnline: false,
    code: `const protocol = require( '@stealth/core' );
const { analyze } = protocol;

async function initializeSync () {
  try {
    await analyze.handshake();
    console.log( 'System_Ready' );
  }
  catch (e) {
    throw new Error('AUTH_FAILED');
  }
}`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const toggleFullscreen = (player: 1 | 2) => {
    setFullscreenPlayer(fullscreenPlayer === player ? null : player)
  }

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      {fullscreenPlayer && (
        <div className="fixed inset-0 z-50 bg-ca-dark-bg text-white flex flex-col pt-16">
          <div className="px-10 py-2 max-w-full flex flex-col flex-1">
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden flex-1 flex flex-col">
              <div className="bg-ca-dark-bg px-4 py-2 border-b border-ca-dark-bg2 flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">
                  {fullscreenPlayer === 1 ? 'Python Runtime v3.4' : 'Code Engine: v1.0'}
                </div>
                <button onClick={() => toggleFullscreen(fullscreenPlayer)} className="font-mono text-xs text-ca-dark-gold hover:text-ca-dark-gold opacity-70 hover:opacity-100 transition-opacity" title="Exit Fullscreen">
                  Exit Fullscreen
                </button>
              </div>
              <div className="p-4 bg-ca-dark-bg2 font-mono text-sm leading-relaxed text-gray-300 flex-1 overflow-y-auto">
                {(fullscreenPlayer === 1 ? player1.code : player2.code).split(/\n/).map((line: string, idx: number) => (
                  <div key={idx} className="flex gap-6 hover:bg-gray-900 hover:bg-opacity-20">
                    <span className="text-gray-600 select-none flex-shrink-0 w-8">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {!fullscreenPlayer && (
        <div className="min-h-screen pt-16 bg-ca-dark-bg text-white flex flex-col">
        {/* Battle Content */}
        <div className="px-10 py-2 max-w-full flex flex-col flex-1">
          {/* Players Header - Narrower Cards */}
          <div className="grid grid-cols-3 gap-2 mb-1 items-center h-fit">
            {/* Player 1 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-1">
              <div className="flex flex-col items-center text-center gap-0.5">
                <div className="w-8 h-8 rounded border-2 border-ca-dark-gold bg-gray-700 flex items-center justify-center text-xs font-bold text-ca-dark-gold">
                  VS
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white leading-none">{player1.name}</h3>
                  <p className="font-mono text-xs text-gray-500 uppercase leading-none text-opacity-80">{player1.rank}</p>
                  <div className="flex items-center gap-1.5 justify-center mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    <span className="font-mono text-xs text-green-400">ONLINE</span>
                  </div>
                </div>
                <div className="w-full mt-0.5">
                  <div className="w-full h-1 bg-gray-700 rounded overflow-hidden">
                    <div className="h-full bg-ca-dark-gold" style={{ width: `${player1.completion}%` }}></div>
                  </div>
                  <div className="font-mono text-xs font-bold text-ca-dark-gold text-center mt-0.5">{player1.completion.toFixed(1)}%</div>
                </div>
              </div>
            </div>

            {/* Timer - Center */}
            <div className="flex items-center justify-center">
              <div className="bg-ca-dark-gold text-ca-dark-bg rounded px-4 py-1 text-center shadow-2xl border-2 border-ca-dark-gold w-full">
                <div className="font-mono text-xs text-opacity-70 text-ca-dark-bg leading-none">TIME REMAINING</div>
                <div className="font-black text-4xl tracking-tight leading-none">{formatTime(timeRemaining)}</div>
              </div>
            </div>

            {/* Player 2 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-1">
              <div className="flex flex-col items-center text-center gap-0.5">
                <div className="w-8 h-8 rounded border-2 border-red-700 bg-gray-700 flex items-center justify-center text-xs font-bold text-red-400">
                  RK
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white leading-none">{player2.name}</h3>
                  <p className="font-mono text-xs text-gray-500 uppercase leading-none text-opacity-80">{player2.rank}</p>
                  <div className="flex items-center gap-1.5 justify-center mt-0.5">
                    <span className="font-mono text-xs text-gray-400">OFFLINE</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                <div className="w-full mt-0.5">
                  <div className="w-full h-1 bg-gray-700 rounded overflow-hidden">
                    <div className="h-full bg-red-500" style={{ width: `${player2.completion}%` }}></div>
                  </div>
                  <div className="font-mono text-xs font-bold text-red-400 text-center mt-0.5">{player2.completion.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Battle Area - Code Editors */}
          <div className="grid grid-cols-2 gap-2 mb-0 flex-1 auto-rows-fr">
            {/* Left Code Editor - Player 1 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden flex flex-col">
              <div className="bg-ca-dark-bg px-3 py-1 border-b border-ca-dark-bg2 flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Python Runtime v3.4</div>
                <button
                  onClick={() => toggleFullscreen(1)}
                  className="font-mono text-xs text-ca-dark-gold hover:text-ca-dark-gold opacity-60 hover:opacity-100 transition-opacity"
                  title="Fullscreen"
                >
                  ⛶
                </button>
              </div>
              <div className="p-2 bg-ca-dark-bg2 font-mono text-xs leading-relaxed text-gray-300 flex-1 overflow-y-auto">
                {player1.code.split(/\n/).map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-gray-600 select-none">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Code Editor - Player 2 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden flex flex-col">
              <div className="bg-ca-dark-bg px-3 py-1 border-b border-ca-dark-bg2 flex items-center justify-between">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Code Engine: v1.0</div>
                <button
                  onClick={() => toggleFullscreen(2)}
                  className="font-mono text-xs text-ca-dark-gold hover:text-ca-dark-gold opacity-60 hover:opacity-100 transition-opacity"
                  title="Fullscreen"
                >
                  ⛶
                </button>
              </div>
              <div className="p-2 bg-ca-dark-bg2 font-mono text-xs leading-relaxed text-gray-300 flex-1 overflow-y-auto">
                {player2.code.split(/\n/).map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-gray-600 select-none">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 py-4 border-t border-ca-dark-bg2 flex items-center justify-between">
            <div className="font-mono text-xs text-gray-500">
              © 2024 CODING_LEAGUE // v1.0 ENCRYPTION ACTIVE
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="font-mono text-xs text-gray-500 hover:text-ca-dark-gold transition-colors">
                GITHUB
              </a>
              <a href="#" className="font-mono text-xs text-gray-500 hover:text-ca-dark-gold transition-colors">
                DISCORD
              </a>
              <a href="#" className="font-mono text-xs text-gray-500 hover:text-ca-dark-gold transition-colors">
                LEGAL: PROVISIONS
              </a>
              <a href="#" className="font-mono text-xs text-gray-500 hover:text-ca-dark-gold transition-colors">
                PRIVACY: ENCRYPTION
              </a>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  )
}
