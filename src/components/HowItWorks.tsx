export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Build Your Profile',
      desc: 'Create an account, pick your rank, and get your personalized DSA roadmap based on your skill level.',
    },
    {
      num: '02',
      title: 'Solve Daily Quests',
      desc: 'Easy, medium, and hard problems every day. Earn XP, maintain your streak, and unlock new topics.',
    },
    {
      num: '03',
      title: 'Enter 1v1 Battles',
      desc: 'Challenge peers to real-time coding duels. Same problem, live timer, instant winner.',
    },
    {
      num: '04',
      title: 'Climb the Board',
      desc: 'Rank up from Debugger to Legend. Weekly leaderboards, badges, and social sharing.',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-10 py-20 relative z-10">
      <div className="section-eyebrow reveal">HOW IT WORKS</div>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-ca-dark-ink mb-3.5 reveal">
        From beginner to champion<br />in four steps.
      </h2>

      {/* Steps grid */}
      <div className="grid grid-cols-4 gap-px border border-ca-dark-bg2 rounded-lg overflow-hidden bg-ca-dark-bg2 mt-10 reveal">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-ca-dark-white p-7"
          >
            <span className="block font-mono text-5xl font-bold text-ca-dark-bg2 mb-3.5 leading-none">
              {step.num}
            </span>
            <div className="text-base font-bold mb-2 text-ca-dark-ink">{step.title}</div>
            <div className="font-mono text-xs text-gray-500 leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>

      <hr className="border-t border-dashed border-gray-700 my-0 mt-20" />
    </section>
  )
}
