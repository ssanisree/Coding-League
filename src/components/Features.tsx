export default function Features() {
  const features = [
    {
      icon: '⚔️',
      title: '1v1 Coding Battles',
      desc: 'Real-time head-to-head duels. Same problem, live countdown timer. First to pass all test cases wins XP and ranking points.',
      accent: 'border-t-4 border-ca-dark-gold',
    },
    {
      icon: '🗺',
      title: 'DSA Skill Map',
      desc: '24 topics — Arrays to Tries. Adaptive learning path unlocks as you progress. Never wonder what to study next.',
      accent: 'border-t-4 border-ca-dark-green',
    },
    {
      icon: '🔥',
      title: 'Streak System',
      desc: 'Daily streak tracking with grace day shields. Share milestones on social media to build accountability.',
      accent: '',
    },
    {
      icon: '🤖',
      title: 'AI Debug Mode',
      desc: 'Analyze buggy code and explain your thinking. The AI evaluates logic and gives feedback — not spoon-fed answers.',
      accent: 'border-t-4 border-ca-dark-red',
    },
    {
      icon: '💡',
      title: 'Smart Hint System',
      desc: 'Step-by-step Socratic hints that ask questions, never give answers. Trains real problem-solving intuition.',
      accent: 'border-t-4 border-ca-dark-gold',
    },
    {
      icon: '🏆',
      title: 'Weekly Leaderboard',
      desc: 'Compete on weekly XP rankings. Tier progression from Debugger to Legend with live progress bars.',
      accent: 'border-t-4 border-ca-dark-green',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-10 py-20 relative z-10" id="features">
      <div className="section-eyebrow reveal">FEATURES</div>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-ca-dark-ink mb-3.5 reveal">
        Everything you need.<br />Nothing you don't.
      </h2>
      <p className="font-mono text-sm text-gray-500 leading-relaxed max-w-lg mb-10 reveal">
        Built for college students who want to get serious about DSA — without the boring grind.
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-3 gap-3.5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`bg-ca-dark-white border border-ca-dark-bg2 rounded-lg p-6 reveal hover:shadow-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 cursor-pointer ${feature.accent}`}
          >
            <div className="w-11 h-11 rounded border border-ca-dark-bg2 flex items-center justify-center text-2xl mb-4 bg-ca-dark-bg2">
              {feature.icon}
            </div>
            <div className="text-base font-bold mb-2 text-ca-dark-ink">{feature.title}</div>
            <div className="font-mono text-xs text-gray-500 leading-relaxed">{feature.desc}</div>
          </div>
        ))}
      </div>

      <hr className="border-t border-dashed border-gray-700 my-0 mt-20" />
    </section>
  )
}
