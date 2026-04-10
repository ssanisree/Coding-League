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

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-16 bg-ca-dark-bg text-white">
        {/* Battle Content */}
        <div className="px-10 py-6 max-w-full">
          {/* Players Header - Narrower Cards */}
          <div className="grid grid-cols-3 gap-4 mb-4 items-start">
            {/* Player 1 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-3">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded border-2 border-ca-dark-gold bg-gray-700 flex items-center justify-center text-xs font-bold text-ca-dark-gold">
                  VS
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white leading-tight">{player1.name}</h3>
                  <p className="font-mono text-xs text-gray-500 uppercase mb-1 leading-tight">{player1.rank}</p>
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-mono text-xs text-green-400">ONLINE</span>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-mono text-xs text-gray-500 mb-1">PROGRESS</div>
                  <div className="w-full h-1.5 bg-gray-700 rounded overflow-hidden mb-1">
                    <div className="h-full bg-ca-dark-gold" style={{ width: `${player1.completion}%` }}></div>
                  </div>
                  <div className="font-mono text-xs font-bold text-ca-dark-gold">{player1.completion.toFixed(1)}%</div>
                </div>
              </div>
            </div>

            {/* Timer - Center */}
            <div className="flex items-center justify-center h-full">
              <div className="bg-ca-dark-gold text-ca-dark-bg rounded px-8 py-6 text-center shadow-2xl border-2 border-ca-dark-gold w-full">
                <div className="font-mono text-xs text-opacity-70 text-ca-dark-bg mb-2">TIME REMAINING</div>
                <div className="font-black text-7xl tracking-tight">{formatTime(timeRemaining)}</div>
              </div>
            </div>

            {/* Player 2 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-3">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded border-2 border-red-700 bg-gray-700 flex items-center justify-center text-xs font-bold text-red-400">
                  RK
                </div>
                <div>
                  <h3 className="font-mono text-xs font-bold text-white leading-tight">{player2.name}</h3>
                  <p className="font-mono text-xs text-gray-500 uppercase mb-1 leading-tight">{player2.rank}</p>
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <span className="font-mono text-xs text-gray-400">OFFLINE</span>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="font-mono text-xs text-gray-500 mb-1">PROGRESS</div>
                  <div className="w-full h-1.5 bg-gray-700 rounded overflow-hidden mb-1">
                    <div className="h-full bg-red-500" style={{ width: `${player2.completion}%` }}></div>
                  </div>
                  <div className="font-mono text-xs font-bold text-red-400">{player2.completion.toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Battle Area - Code Editors */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Left Code Editor - Player 1 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden">
              <div className="bg-ca-dark-bg px-4 py-3 border-b border-ca-dark-bg2">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Python Runtime v3.4</div>
              </div>
              <div className="p-6 bg-ca-dark-bg2 font-mono text-xs leading-relaxed text-gray-300 max-h-96 overflow-y-auto">
                {player1.code.split('\n').map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-gray-600 select-none">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Code Editor - Player 2 */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden">
              <div className="bg-ca-dark-bg px-4 py-3 border-b border-ca-dark-bg2">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500">Code Engine: v1.0</div>
              </div>
              <div className="p-6 bg-ca-dark-bg2 font-mono text-xs leading-relaxed text-gray-300 max-h-96 overflow-y-auto">
                {player2.code.split('\n').map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="text-gray-600 select-none">{String(idx + 1).padStart(2, '0')}</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Battle Stats */}
          <div className="grid grid-cols-5 gap-4 mb-6">
            {/* System Status */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">System Status</div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gray-400">Stable</span>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-xs text-gray-600">NETWORK: 12ms JITTER</div>
                <div className="font-mono text-xs text-gray-600">SPECTATORS: 1,402 ACTIVE</div>
              </div>
            </div>

            {/* Protocol Status */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">Protocol</div>
              <div className="space-y-1.5">
                <div className="font-mono text-xs text-gray-400">v1.0 ENCRYPTION ACTIVE</div>
                <div className="font-mono text-xs text-gray-600">CURRENT BATTLE:</div>
                <div className="font-mono text-xs text-ca-dark-gold">ALGORITHM COMPLEXITY</div>
              </div>
            </div>

            {/* WPM Evolution */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">WPM Evolution</div>
              <div className="flex items-end justify-center gap-1 h-16">
                {wpmData.map((wpm, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-ca-dark-gold to-ca-dark-gold rounded-t"
                    style={{ height: `${(wpm / 120) * 100}%` }}
                  ></div>
                ))}
              </div>
              <div className="font-mono text-xs text-ca-dark-gold text-center mt-2 font-bold">114 AVG</div>
            </div>

            {/* Cognitive Load */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">Cognitive Load</div>
              <div className="flex items-center justify-center h-16">
                <div className="text-center">
                  <div className="font-mono text-sm font-bold text-green-400 mb-1">OPTIMAL</div>
                  <div className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center">
                    <span className="font-mono text-xs text-green-400">67%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bypass Success */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
              <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-3">Bypass Success</div>
              <div className="flex items-center justify-center h-16">
                <div className="text-center">
                  <div className="font-mono text-3xl font-black text-ca-dark-gold mb-1">8/10</div>
                  <div className="w-full h-1 bg-gray-700 rounded overflow-hidden">
                    <div className="h-full bg-ca-dark-gold" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live Spectators */}
          <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4">
            <div className="font-mono text-xs text-gray-500 uppercase tracking-wider mb-4 pb-3 border-b border-ca-dark-bg2">
              🔴 Live Spectators
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'K_DEV_99', desc: 'YOUNG DISRUPTION /', level: 8 },
                { name: 'COVERAGE', desc: 'JUNIOR ARCHITECT', level: 5 },
                { name: 'PIXEL_PUNCH', desc: 'ARCHITECT', level: 12 },
              ].map((spectator, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 rounded bg-ca-dark-bg hover:bg-opacity-80 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400">
                    👤
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs font-bold text-white">{spectator.name}</div>
                    <div className="font-mono text-xs text-gray-500">{spectator.desc}</div>
                  </div>
                  <div className="font-mono text-xs text-green-400 font-bold">LvL {spectator.level}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 py-4 border-t border-ca-dark-bg2 flex items-center justify-between">
            <div className="font-mono text-xs text-gray-500">
              © 2024 CODING_LEAGUE // PROTOCOL_v1.0
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
    </>
  )
}
