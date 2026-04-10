export default function Battle() {
  const bulletPoints = [
    'Matched by skill level for fair fights',
    'Real-time typing indicators — watch them sweat',
    'Instant XP and ranking updates post-battle',
    'Battle history and replay stats on your profile',
    'Challenge friends or fight random opponents',
  ]

  return (
    <section
      className="bg-ca-dark-bg relative overflow-hidden py-20"
      id="battle"
      style={{
        backgroundImage:
          'linear-gradient(rgba(212,168,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,48,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-6xl mx-auto px-10 grid grid-cols-2 gap-16 items-center relative z-10">
        {/* Left side */}
        <div>
          <div className="section-eyebrow">1V1 BATTLE MODE</div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white mb-4 section-title">
            Real code.<br />
            Real stakes.<br />
            <span className="text-ca-dark-gold">Real winner.</span>
          </h2>
          <p className="font-mono text-sm text-gray-500 leading-relaxed mb-7">
            Challenge any user to a 1v1 coding duel. You both get the same problem, a shared countdown clock, and zero excuses. First to pass all test cases wins — live.
          </p>

          {/* Bullets */}
          <ul className="list-none space-y-2">
            {bulletPoints.map((point, idx) => (
              <li
                key={idx}
                className="font-mono text-xs text-gray-500 pb-2 border-b border-dashed border-gray-700 flex items-center gap-2.5"
              >
                <span className="text-ca-dark-gold text-sm flex-shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Battle Card */}
        <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded-lg overflow-hidden shadow-xl">
          {/* Header */}
          <div className="bg-ca-dark-bg px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded text-xs font-bold bg-gray-600 text-white flex items-center justify-center">VS</div>
              <div>
                <div className="font-mono text-xs font-bold text-white">Vikram S.</div>
                <div className="font-mono text-xs text-ca-dark-gold uppercase">Debugger</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-2"></div>
            </div>
            <div className="font-mono text-2xl font-bold text-ca-dark-gold">12:34</div>
            <div className="flex items-center gap-2 flex-row-reverse">
              <div className="w-8 h-8 rounded text-xs font-bold bg-gray-600 text-white flex items-center justify-center">RK</div>
              <div className="text-right">
                <div className="font-mono text-xs font-bold text-white">Rahul K.</div>
                <div className="font-mono text-xs text-ca-dark-gold uppercase">Architect</div>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-2"></div>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-2">
            {/* Problem side */}
            <div className="bg-ca-dark-bg p-4 border-r border-ca-dark-bg2">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-600 mb-2">Problem</div>
              <div className="text-sm font-bold mb-1.5 text-white">Binary Tree Level Order</div>
              <div className="font-mono text-xs text-gray-500 leading-relaxed mb-2.5">
                Given the root of a binary tree, return level order traversal of nodes' values...
              </div>
              <span className="inline-block font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 bg-gray-900 text-ca-dark-gold border border-gray-700 rounded">
                MEDIUM
              </span>
            </div>

            {/* Editor side */}
            <div className="bg-ca-dark-bg2 p-4">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-600 mb-2">Editor</div>
              <div className="font-mono text-xs leading-relaxed text-gray-300">
                <span className="text-purple-400">def</span> <span className="text-blue-400">levelOrder</span>(<span className="text-yellow-400">root</span>):<br />
                &nbsp;&nbsp;<span className="text-yellow-400">queue</span> = [root]<br />
                &nbsp;&nbsp;<span className="text-yellow-400">result</span> = []<br />
                &nbsp;&nbsp;<span className="text-purple-400">while</span> <span className="text-yellow-400">queue</span>:<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">level</span> = []<br />
                &nbsp;&nbsp;&nbsp;&nbsp;...
              </div>
              <div className="mt-3.5 text-right">
                <button className="font-mono text-xs font-bold uppercase tracking-wider px-4 py-1.75 rounded bg-ca-dark-gold text-ca-dark-bg cursor-pointer hover:opacity-90">
                  SUBMIT ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-dashed border-gray-700 my-0 mt-20" />
    </section>
  )
}
