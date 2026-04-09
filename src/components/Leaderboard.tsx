export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, initials: 'AK', name: 'Aarav K.', badge: 'LEGEND', xp: 4820, percent: 95, bgColor: 'bg-yellow-900' },
    { rank: 2, initials: 'PR', name: 'Priya R.', badge: 'ARCHITECT', xp: 3910, percent: 79, bgColor: 'bg-green-900' },
    { rank: 3, initials: 'MS', name: 'Mihir S.', badge: 'DEBUGGER', xp: 2240, percent: 50, bgColor: 'bg-gray-700' },
    { rank: 4, initials: 'SR', name: 'Sneha R.', badge: 'DEBUGGER', xp: 1680, percent: 36, bgColor: 'bg-purple-900' },
  ]

  return (
    <section className="max-w-6xl mx-auto px-10 py-20 relative z-10" id="leaderboard">
      <div className="grid grid-cols-2 gap-16 items-start">
        {/* Left side */}
        <div>
          <div className="section-eyebrow reveal">LEADERBOARD</div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-ca-dark-ink mb-3.5 reveal">
            Your rank.<br />
            Your reputation.
          </h2>
          <p className="font-mono text-sm text-gray-500 leading-relaxed mb-6 reveal">
            Weekly leaderboards track XP earned through battles, daily problems, and streaks. Rise through the tiers and show your college who codes hardest.
          </p>

          {/* Rank tiers */}
          <div className="space-y-2.5 reveal">
            <div className="flex items-center gap-3 p-2.5 rounded bg-yellow-900 border border-yellow-800">
              <span className="font-mono text-xs font-bold uppercase">LEGEND</span>
              <span className="font-mono text-xs text-gray-400">Top 1% globally. Invite-only college tournaments.</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded bg-ca-dark-white border border-ca-dark-bg2">
              <span className="font-mono text-xs font-bold uppercase">ARCHITECT</span>
              <span className="font-mono text-xs text-gray-500">Top 20%. Access to system design arena.</span>
            </div>
            <div className="flex items-center gap-3 p-2.5 rounded bg-ca-dark-white border border-ca-dark-bg2">
              <span className="font-mono text-xs font-bold uppercase">DEBUGGER</span>
              <span className="font-mono text-xs text-gray-500">Getting started. All battles and quests open.</span>
            </div>
          </div>
        </div>

        {/* Right side - Leaderboard card */}
        <div className="reveal">
          <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded-lg overflow-hidden shadow-lg">
            {/* Header */}
            <div className="bg-ca-dark-bg2 border-b border-dashed border-gray-700 px-4.5 py-3 flex items-center justify-between font-mono text-xs font-semibold uppercase tracking-wider text-gray-500">
              <span>LEADERBOARD — THIS WEEK</span>
              <span>↻ Live</span>
            </div>

            {/* Rows */}
            {leaderboardData.map((row) => (
              <div
                key={row.rank}
                className="flex items-center gap-3 px-4.5 py-3 border-b border-dashed border-gray-700 last:border-b-0"
              >
                <div className={`font-mono text-base font-bold w-5 ${row.rank === 1 ? 'text-ca-dark-gold' : 'text-ca-dark-ink'}`}>
                  {row.rank}
                </div>
                <div className={`${row.bgColor} w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0`}>
                  {row.initials}
                </div>
                <div className="text-sm font-bold text-ca-dark-ink flex-1">{row.name}</div>
                <div className="flex-1 h-1.5 bg-ca-dark-bg2 rounded-sm">
                  <div
                    className={`h-full rounded-sm ${row.rank === 1 ? 'bg-ca-dark-gold' : row.rank === 2 ? 'bg-green-600' : 'bg-gray-600'}`}
                    style={{ width: `${row.percent}%` }}
                  ></div>
                </div>
                <span className="font-mono text-xs font-bold uppercase px-2 py-0.5 rounded border border-ca-dark-bg2 text-gray-500 whitespace-nowrap">
                  {row.badge}
                </span>
                <div className="font-mono text-xs font-bold text-ca-dark-ink min-w-14 text-right">{row.xp} XP</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-700 my-0 mt-20" />
    </section>
  )
}
