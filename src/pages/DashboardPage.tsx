import { useState } from 'react'
import Navbar from '../components/Navbar'

interface Activity {
  id: string
  timestamp: string
  title: string
  description: string
  icon: string
  status: 'success' | 'warning' | 'info'
}

export default function DashboardPage({ theme, onThemeToggle }: { theme: 'light' | 'dark', onThemeToggle: () => void }) {

  const playerData = {
    username: 'OPERATOR_01',
    level: 12,
    joinDate: '2024.01',
    avatar: 'https://api.dicebear.com/7.x/cyberpunk/svg?seed=operator01&scale=80',
    stats: {
      score: '25.4K',
      winRate: '68%',
      battles: '142',
      streak: '09'
    }
  }

  const skills = [
    { name: 'ALGORITHMS', percentage: 84 },
    { name: 'DATA_STRUCTURES', percentage: 82 },
    { name: 'COMPLEXITY_ANALYSIS', percentage: 84 },
    { name: 'SYSTEM_DESIGN', percentage: 75 }
  ]

  const achievements = [
    { icon: '🏆', title: 'THE ARCHITECT', unlock: false },
    { icon: '⚡', title: 'BUG HUNTER', unlock: false },
    { icon: '🗡️', title: 'ARENA LEGEND', unlock: false }
  ]

  const activityLogs: Activity[] = [
    {
      id: '1',
      timestamp: '2024.01.23 12:34',
      title: 'MISSION SUCCESS: MEMORY LEAK INVESTIGATION',
      description: '+8,450 XP',
      icon: '✓',
      status: 'success'
    },
    {
      id: '2',
      timestamp: '2024.01.22 15:12',
      title: 'ARENA VICTORY: VS OPERATOR_X',
      description: 'Tier +1',
      icon: '⚔️',
      status: 'success'
    },
    {
      id: '3',
      timestamp: '2024.01.21 09:45',
      title: 'MISSION FAILED: QUICK SORT CHALLENGE',
      description: 'Time Out',
      icon: '✕',
      status: 'warning'
    },
    {
      id: '4',
      timestamp: '2024.01.20 18:23',
      title: 'BADGE EARNED: CODE ARCHITECT LV.1',
      description: 'Infinite Unlocked',
      icon: '🏅',
      status: 'info'
    }
  ]

  const getActivityStatusColor = (status: string) => {
    switch(status) {
      case 'success':
        return 'border-l-green-500 text-green-400'
      case 'warning':
        return 'border-l-yellow-500 text-yellow-400'
      case 'info':
        return 'border-l-blue-500 text-blue-400'
      default:
        return 'border-l-gray-500 text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-ca-dark-bg text-white">
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      
      <div className="flex pt-16">
        {/* SIDEBAR */}
        <div className="w-40 bg-black border-r border-yellow-600/30 p-4 flex flex-col fixed h-screen left-0 top-16 overflow-y-auto">
          {/* Brand */}
          <div className="mb-8">
            <div className="text-xs font-mono text-yellow-600 mb-1">CODING_LEAGUE</div>
            <div className="text-xs font-mono text-yellow-600 border border-yellow-600/50 px-2 py-1 rounded">
              LEAGUE_OPERATOR
            </div>
          </div>

          {/* Menu */}
          <div className="flex-1">
          </div>

          {/* Footer Menu */}
          <div className="border-t border-gray-700 pt-4">
            <button className="w-full text-left px-3 py-2 mb-2 text-xs font-mono text-gray-400 hover:text-gray-300 transition-colors">
              🆘 SUPPORT
            </button>
            <button className="w-full text-left px-3 py-2 text-xs font-mono text-gray-400 hover:text-gray-300 transition-colors">
              🚪 DISMOUNT
            </button>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 ml-40 p-6">
          {/* MAIN GRID */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* PROFILE CARD */}
            <div className="col-span-1 bg-black/50 border border-yellow-600/30 rounded p-6">
              <div className="text-center mb-4">
                <img
                  src={playerData.avatar}
                  alt="operator"
                  className="w-24 h-24 mx-auto rounded border border-yellow-600/50 mb-3"
                />
                <h2 className="text-xl font-bold text-yellow-400 font-mono">
                  {playerData.username}
                </h2>
                <div className="flex gap-2 justify-center mt-1 text-xs text-gray-400 font-mono">
                  <span>LEVEL {playerData.level}</span>
                  <span>•</span>
                  <span>MEMBER SINCE {playerData.joinDate}</span>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex justify-center gap-2 mb-4 border-b border-gray-700 pb-4">
                <button className="p-2 hover:bg-yellow-600/20 rounded text-yellow-400 text-sm">
                  🎯
                </button>
                <button className="p-2 hover:bg-yellow-600/20 rounded text-yellow-400 text-sm">
                  ✱
                </button>
                <button className="p-2 hover:bg-yellow-600/20 rounded text-yellow-400 text-sm">
                  ↗
                </button>
              </div>

              {/* Stats Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                  <div className="text-yellow-400 font-bold text-lg">{playerData.stats.score}</div>
                  <div className="text-xs text-gray-500 uppercase">Score</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                  <div className="text-yellow-400 font-bold text-lg">{playerData.stats.winRate}</div>
                  <div className="text-xs text-gray-500 uppercase">Win Rate</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                  <div className="text-yellow-400 font-bold text-lg">{playerData.stats.battles}</div>
                  <div className="text-xs text-gray-500 uppercase">Battles</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded p-3 text-center">
                  <div className="text-yellow-400 font-bold text-lg">{playerData.stats.streak}</div>
                  <div className="text-xs text-gray-500 uppercase">Streak</div>
                </div>
              </div>
            </div>

            {/* SKILLS SECTION */}
            <div className="col-span-1 bg-black/50 border border-yellow-600/30 rounded p-6">
              <h3 className="text-sm font-bold text-yellow-400 uppercase mb-4 font-mono">
                SKILL_ARCHITECTURE
              </h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-mono text-gray-300">{skill.name}</label>
                      <span className="text-xs text-yellow-400 font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-900 rounded h-2 overflow-hidden border border-gray-700">
                      <div
                        className="bg-yellow-600 h-full rounded transition-all duration-300"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ACHIEVEMENTS SECTION */}
            <div className="col-span-1 bg-black/50 border border-yellow-600/30 rounded p-6">
              <h3 className="text-sm font-bold text-yellow-400 uppercase mb-4 font-mono flex justify-between items-center">
                REVERED_ACHIEVEMENTS
                <button className="text-xs text-gray-500 hover:text-gray-400">VIEW_ALL</button>
              </h3>
              <div className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-900 border border-gray-700 rounded p-3 text-center hover:border-yellow-600/50 transition-colors cursor-pointer"
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-mono text-gray-300">{achievement.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIVITY LOGS */}
          <div className="bg-black/50 border border-yellow-600/30 rounded p-6">
            <h3 className="text-sm font-bold text-yellow-400 uppercase mb-4 font-mono flex justify-between items-center">
              OPERATIONAL_LOGS
              <div className="text-xs font-mono text-gray-500 space-x-2">
                <button className="hover:text-gray-400">FILTER</button>
                <button className="hover:text-gray-400">EXPORT</button>
              </div>
            </h3>

            <div className="space-y-3">
              {activityLogs.map((log) => (
                <div
                  key={log.id}
                  className={`border-l-4 bg-gray-900/50 border-gray-700 rounded p-3 hover:bg-gray-800 transition-colors cursor-pointer group ${getActivityStatusColor(log.status)}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-mono text-xs text-gray-400 mb-1">{log.timestamp}</div>
                      <div className="font-mono text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {log.title}
                      </div>
                      <div className="font-mono text-xs text-gray-500 mt-1">{log.description}</div>
                    </div>
                    <div className="ml-4 text-lg">{log.icon}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-6 text-center text-xs font-mono text-gray-600">
            <div className="flex justify-center gap-4">
              <span>SYSTEM VERSION: v1.0.0</span>
              <span>•</span>
              <span>DEPLOYED: 2024.01</span>
              <span>•</span>
              <span>STATUS: ENCRYPTED_SESSION_ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
