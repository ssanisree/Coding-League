import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function LeaderboardPage({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('week')

  const leaderboardData = [
    { rank: 1, initials: 'AK', name: 'Aarav K.', badge: 'LEGEND', xp: 4820, percent: 95, bgColor: 'bg-yellow-900' },
    { rank: 2, initials: 'PR', name: 'Priya R.', badge: 'ARCHITECT', xp: 3910, percent: 79, bgColor: 'bg-green-900' },
    { rank: 3, initials: 'MS', name: 'Mihir S.', badge: 'DEBUGGER', xp: 2240, percent: 50, bgColor: 'bg-gray-700' },
    { rank: 4, initials: 'SR', name: 'Sneha R.', badge: 'DEBUGGER', xp: 1680, percent: 36, bgColor: 'bg-purple-900' },
    { rank: 5, initials: 'VK', name: 'Vikram K.', badge: 'DEBUGGER', xp: 1420, percent: 28, bgColor: 'bg-blue-900' },
  ]

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-20 px-10 bg-ca-dark-bg text-ca-dark-ink">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black mb-2 text-white">Leaderboard</h1>
          <p className="text-gray-500 font-mono text-sm mb-10">Your rank. Your reputation. Rise through the tiers.</p>

          {/* Timeframe selector */}
          <div className="flex gap-2 mb-8">
            {(['week', 'month', 'all'] as const).map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded transition-colors ${
                  timeframe === tf
                    ? 'bg-ca-dark-gold text-ca-dark-bg'
                    : 'bg-ca-dark-white border border-ca-dark-bg2 text-gray-500 hover:text-gray-400'
                }`}
              >
                {tf === 'week' && 'This Week'}
                {tf === 'month' && 'This Month'}
                {tf === 'all' && 'All Time'}
              </button>
            ))}
          </div>

          {/* Tier info */}
          <div className="mb-12 space-y-2">
            <div className="flex items-center gap-3 p-3 rounded bg-yellow-900 border border-yellow-800">
              <span className="font-mono text-xs font-bold uppercase">LEGEND</span>
              <span className="font-mono text-xs text-gray-300">Top 1% globally. Invite-only tournaments.</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded bg-ca-dark-white border border-ca-dark-bg2">
              <span className="font-mono text-xs font-bold uppercase">ARCHITECT</span>
              <span className="font-mono text-xs text-gray-500">Top 20%. System design league access.</span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded bg-ca-dark-white border border-ca-dark-bg2">
              <span className="font-mono text-xs font-bold uppercase">DEBUGGER</span>
              <span className="font-mono text-xs text-gray-500">Getting started. All battles open.</span>
            </div>
          </div>

          {/* Leaderboard table */}
          <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded-lg overflow-hidden">
            {/* Header */}
            <div className="bg-ca-dark-bg2 border-b border-dashed border-gray-700 px-6 py-3 grid grid-cols-5 gap-6 font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">
              <div>Rank</div>
              <div>Player</div>
              <div>Progress</div>
              <div>Tier</div>
              <div>XP</div>
            </div>

            {/* Rows */}
            {leaderboardData.map((row) => (
              <div
                key={row.rank}
                className="border-b border-dashed border-gray-700 px-6 py-4 grid grid-cols-5 gap-6 items-center last:border-b-0 hover:bg-ca-dark-bg2 transition-colors"
              >
                <div className={`font-mono text-base font-bold ${row.rank === 1 ? 'text-ca-dark-gold' : 'text-ca-dark-ink'}`}>
                  #{row.rank}
                </div>
                <div className="flex items-center gap-3">
                  <div className={`${row.bgColor} w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold text-white`}>
                    {row.initials}
                  </div>
                  <span className="font-bold text-sm text-ca-dark-ink">{row.name}</span>
                </div>
                <div className="h-2 bg-ca-dark-bg2 rounded-sm">
                  <div
                    className={`h-full rounded-sm ${row.rank === 1 ? 'bg-ca-dark-gold' : row.rank === 2 ? 'bg-green-600' : 'bg-gray-600'}`}
                    style={{ width: `${row.percent}%` }}
                  ></div>
                </div>
                <span className="font-mono text-xs font-bold uppercase px-2 py-1 rounded border border-ca-dark-bg2 text-gray-500">
                  {row.badge}
                </span>
                <div className="font-mono text-xs font-bold text-ca-dark-ink">{row.xp} XP</div>
              </div>
            ))}
          </div>

          {/* Your rank placeholder */}
          <div className="mt-8 p-6 bg-ca-dark-white border border-ca-dark-bg2 rounded">
            <p className="text-gray-500 font-mono text-sm">Sign in to see your ranking and compete!</p>
          </div>
        </div>
      </div>
    </>
  )
}
