export default function Skills() {
  const skills = ['Arrays', 'Strings', 'Hashing', 'Trees', 'Graphs', 'DP', 'Tries', 'Heaps', 'Seg Tree']
  const dailyQuests = [
    { title: 'Two Sum', difficulty: 'EASY', color: 'bg-ca-green-light border-ca-green' },
    { title: 'LRU Cache', difficulty: 'MED', color: 'bg-yellow-900 border-yellow-800' },
    { title: 'Word Ladder', difficulty: 'HARD', color: 'bg-red-900 border-red-800' },
  ]

  return (
    <section
      className="bg-ca-dark-bg2 border-t border-b border-dashed border-gray-700 py-20"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <div>
            <div className="section-eyebrow reveal">SKILL MAP + AI HINTS</div>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-ca-dark-ink mb-3.5 reveal section-title">
              Learn <span className="text-ca-dark-gold">smart</span>,<br />
              not just hard.
            </h2>
            <p className="font-mono text-sm text-gray-500 leading-relaxed mb-6 reveal">
              A structured DSA tree from Arrays to Tries. Stuck? The AI hint system asks Socratic questions — never the answer — so you build real intuition.
            </p>

            {/* Hints card */}
            <div className="reveal bg-ca-dark-white border border-ca-dark-bg2 rounded-lg overflow-hidden shadow-lg mt-6">
              <div className="bg-ca-dark-bg2 px-5 py-3.5 flex items-center justify-between border-b border-dashed border-gray-700">
                <div className="text-base font-bold text-ca-dark-ink">LRU Cache</div>
                <div className="font-mono text-xs font-bold uppercase px-2.5 py-1 rounded border border-ca-dark-bg2 text-gray-500">
                  HINT 2/4
                </div>
              </div>
              <div className="divide-y divide-dashed divide-gray-700">
                <div className="px-5 py-3.5 flex gap-4 items-start">
                  <div className="font-mono text-2xl font-bold text-ca-dark-ink w-6 flex-shrink-0">1</div>
                  <div className="font-mono text-xs text-gray-600">What data structure lets you access elements in O(1) time?</div>
                </div>
                <div className="px-5 py-3.5 flex gap-4 items-start">
                  <div className="font-mono text-2xl font-bold text-ca-dark-ink w-6 flex-shrink-0">2</div>
                  <div className="font-mono text-xs text-gray-600">How would you track "most recently used" order without re-sorting?</div>
                </div>
                <div className="px-5 py-3.5 flex gap-4 items-start opacity-70">
                  <div className="font-mono text-2xl font-bold text-gray-600 w-6 flex-shrink-0">3</div>
                  <div className="font-mono text-xs text-gray-600 italic">🔒 Unlock next hint</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Skills map */}
          <div className="reveal">
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded-lg p-6 shadow-lg">
              <div className="font-mono text-xs text-gray-500 mb-4">Unlocked 7 of 24 topics</div>

              {/* Skill nodes */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {skills.map((skill, idx) => {
                  const isDone = idx < 3
                  const isActive = idx === 3
                  const isLocked = idx > 3

                  return (
                    <button
                      key={skill}
                      className={`w-full h-20 rounded-lg border-2 flex flex-col items-center justify-center gap-1 font-mono text-xs cursor-pointer transition-all hover:shadow-lg ${
                        isDone
                          ? 'bg-ca-green-light border-ca-green'
                          : isActive
                          ? 'bg-yellow-900 border-yellow-800'
                          : isLocked
                          ? 'bg-ca-dark-bg opacity-70 border-ca-dark-bg2'
                          : 'bg-ca-dark-white border-ca-dark-bg2'
                      }`}
                    >
                      <span className="text-lg">
                        {isDone ? '✓' : isActive ? '▶' : '○'}
                      </span>
                      <span className={isDone || isActive ? 'font-bold' : ''}>{skill}</span>
                    </button>
                  )
                })}
              </div>

              {/* Divider */}
              <div className="border-t border-dashed border-gray-700 my-5 pt-5">
                <div className="font-mono text-xs uppercase tracking-wider text-gray-500 mb-3">Daily Quests</div>

                {/* Daily quests */}
                <div className="space-y-2">
                  {dailyQuests.map((quest, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between px-3 py-2.5 rounded border ${quest.color}`}
                    >
                      <span className="text-sm font-bold text-ca-dark-ink">{quest.title}</span>
                      <span className="tag text-xs px-2 py-0.5">{quest.difficulty}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
