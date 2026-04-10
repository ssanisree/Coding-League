import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function CodingLeague({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [activeTab, setActiveTab] = useState<'available' | 'active' | 'history'>('available')

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-16 px-10 bg-ca-dark-bg text-ca-dark-ink">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black mb-2 text-white">1v1 Coding Battles</h1>
          <p className="text-gray-500 font-mono text-sm mb-10">Real-time head-to-head duels. Same problem, live timer, no excuses.</p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Battles Won</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Win Rate</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Active Battles</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Total Battles</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-dashed border-gray-700">
            {(['available', 'active', 'history'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs font-bold uppercase tracking-wider pb-3 px-4 transition-colors border-b-2 ${
                  activeTab === tab
                    ? 'border-ca-dark-gold text-ca-dark-gold'
                    : 'border-transparent text-gray-500 hover:text-gray-400'
                }`}
              >
                {tab === 'available' && 'Available Battles'}
                {tab === 'active' && 'Active Battles'}
                {tab === 'history' && 'Battle History'}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'available' && (
              <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-8 text-center">
                <p className="text-gray-500 font-mono text-sm">No available battles right now</p>
                <button className="mt-4 font-mono text-xs font-bold uppercase tracking-wider px-6 py-2 bg-ca-dark-gold text-ca-dark-bg rounded hover:opacity-90">
                  Find Random Opponent
                </button>
              </div>
            )}

            {activeTab === 'active' && (
              <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-8 text-center">
                <p className="text-gray-500 font-mono text-sm">No active battles</p>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-8 text-center">
                <p className="text-gray-500 font-mono text-sm">No battle history yet</p>
              </div>
            )}
          </div>

          {/* Quick start */}
          <div className="mt-12 p-8 bg-ca-dark-white border border-ca-dark-bg2 rounded">
            <h3 className="text-lg font-black mb-4 text-white">How Battles Work</h3>
            <ul className="space-y-3 font-mono text-xs text-gray-500">
              <li>✓ Get matched with an opponent at your skill level</li>
              <li>✓ Both solve the same problem with a shared countdown timer</li>
              <li>✓ First to pass all test cases wins XP and ranking points</li>
              <li>✓ Battle history saved on your profile with replay stats</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
