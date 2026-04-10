import { HeroThreeJSScene } from './HeroThreeJSScene'

export default function Hero() {
  return (
    <section className="min-h-screen pt-14 flex flex-col justify-center relative overflow-hidden" style={{ background: 'var(--bg)' }}>
      {/* Three.js scene */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <HeroThreeJSScene />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(20,20,16,0.82) 0%, rgba(20,20,16,0.3) 45%, rgba(20,20,16,0.1) 100%), linear-gradient(to bottom, rgba(20,20,16,0.5) 0%, transparent 25%, transparent 75%, rgba(20,20,16,0.6) 100%)',
        }}
      ></div>

      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          opacity: 'var(--grid-opacity, 0.2)',
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-10 py-20 relative z-10 grid grid-cols-2 gap-16 items-center">
        {/* Left side */}
        <div>
          {/* Badge */}
          <div className="inline-block font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border mb-6 reveal" style={{ borderColor: 'var(--gold-border)', backgroundColor: 'var(--gold-bg)', color: 'var(--gold-text)' }}>
            🏟 Now in Open Beta
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black leading-tight tracking-tight mb-6 reveal hero-title" style={{ color: 'var(--ink)' }}>
            Code.<br />
            Compete.<br />
            <span style={{ color: 'var(--gold)' }}>Conquer.</span>
          </h1>

          {/* Description */}
          <p className="font-mono text-sm leading-relaxed max-w-xs mb-9 reveal" style={{ color: 'var(--ink)' }}>
            The gamified coding platform built for college students.
            Real-time 1v1 battles, AI-powered hints, streak tracking,
            and a leaderboard that actually means something.
          </p>

          {/* Buttons */}
          <div className="flex gap-3.5 items-center mb-10 reveal">
            <button className="btn-primary">Enter the Coding League ↗</button>
            <a href="#features" className="btn-ghost">See Features</a>
          </div>

          {/* Stats */}
          <div className="flex gap-7 pt-7 border-t border-dashed reveal" style={{ borderColor: 'var(--dash)', color: 'var(--muted)' }}>
            <div>
              <span className="font-mono text-2xl font-bold block" style={{ color: 'var(--ink)' }}>12K+</span>
              <span className="font-mono text-xs uppercase tracking-wider">Students</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold block" style={{ color: 'var(--ink)' }}>340+</span>
              <span className="font-mono text-xs uppercase tracking-wider">Problems</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold block" style={{ color: 'var(--ink)' }}>98K</span>
              <span className="font-mono text-xs uppercase tracking-wider">Battles Fought</span>
            </div>
            <div>
              <span className="font-mono text-2xl font-bold block" style={{ color: 'var(--ink)' }}>24+</span>
              <span className="font-mono text-xs uppercase tracking-wider">DSA Topics</span>
            </div>
          </div>
        </div>

        {/* Right side - Battle Card */}
        <div className="relative reveal">
          {/* Floating badges */}
          <div className="absolute -top-5 -right-2 rounded px-3 py-2 font-mono text-xs shadow-md z-20 animate-float" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', border: '1px solid', color: 'var(--ink)' }}>
            🔥 12 Day Streak · Shield Active
          </div>

          {/* Main battle card */}
          <div className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', border: '1px solid' }}>
            {/* Header */}
            <div className="px-4 py-3 flex items-center justify-between" style={{ backgroundColor: 'var(--bg2)', borderBottomColor: 'var(--border)', borderBottomWidth: '1px' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded text-xs font-bold flex items-center justify-center" style={{ backgroundColor: 'var(--border)', color: 'var(--white)' }}>VS</div>
                <div>
                  <div className="font-mono text-xs font-bold" style={{ color: 'var(--ink)' }}>Vikram S.</div>
                  <div className="font-mono text-xs uppercase" style={{ color: 'var(--gold)' }}>Debugger</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 ml-2"></div>
              </div>
              <div className="font-mono text-2xl font-bold" style={{ color: 'var(--gold)' }}>12:34</div>
              <div className="flex items-center gap-2 flex-row-reverse">
                <div className="w-8 h-8 rounded text-xs font-bold flex items-center justify-center" style={{ backgroundColor: 'var(--border)', color: 'var(--white)' }}>RK</div>
                <div className="text-right">
                  <div className="font-mono text-xs font-bold" style={{ color: 'var(--ink)' }}>Rahul K.</div>
                  <div className="font-mono text-xs uppercase" style={{ color: 'var(--gold)' }}>Architect</div>
                </div>
                <div className="w-1.5 h-1.5 rounded-full ml-2" style={{ backgroundColor: 'var(--muted)' }}></div>
              </div>
            </div>

            {/* Body */}
            <div className="grid grid-cols-2">
              {/* Problem side */}
              <div className="border-r p-3.5" style={{ backgroundColor: 'var(--bg3)', borderColor: 'var(--border)' }}>
                <div className="font-mono text-xs uppercase tracking-wider mb-1.5" style={{ color: 'var(--muted)' }}>Problem</div>
                <div className="text-sm font-bold mb-1.5" style={{ color: 'var(--ink)' }}>Binary Tree Level Order</div>
                <div className="font-mono text-xs leading-relaxed mb-2" style={{ color: 'var(--muted)' }}>Return the level order traversal of binary tree nodes...</div>
                <span className="tag medium text-xs px-2 py-1">MEDIUM</span>
              </div>

              {/* Editor side */}
              <div className="p-3.5" style={{ backgroundColor: 'var(--bg2)' }}>
                <div className="font-mono text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>Editor</div>
                <div className="font-mono text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span style={{ color: 'var(--gold)' }}>def</span> <span style={{ color: 'var(--green)' }}>levelOrder</span>(root):<br />
                  &nbsp;&nbsp;queue = [root]<br />
                  &nbsp;&nbsp;<span style={{ color: 'var(--gold)' }}>while</span> queue:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;level = []<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;...
                </div>
                <div className="mt-3 text-right">
                  <button className="font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded" style={{ backgroundColor: 'var(--gold)', color: 'var(--nav-bg)', cursor: 'pointer' }}>
                    SUBMIT ↗
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom floating badge */}
          <div className="absolute -bottom-3 -left-4 rounded px-3 py-2 font-mono text-xs shadow-md z-20" style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border)', border: '1px solid', animationDelay: '1.2s' }}>
            <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>+120 XP</span> <span style={{ color: 'var(--ink)' }}>Battle Won!</span>
          </div>
        </div>
      </div>

      <hr style={{ borderTopColor: 'var(--dash)', borderTopWidth: '1px', borderStyle: 'dashed', margin: '0' }} />
    </section>
  )
}
