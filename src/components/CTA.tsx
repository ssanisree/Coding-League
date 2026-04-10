export default function CTA() {
  return (
    <section
      className="bg-ca-dark-bg relative overflow-hidden py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(212,168,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,48,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-2xl mx-auto px-10 text-center relative z-10">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-ca-dark-gold block mb-4.5">
          JOIN THE CODING LEAGUE
        </span>
        <h2 className="text-5xl font-black leading-tight tracking-tight text-white mb-4.5">
          Your streak<br />
          starts <span className="text-ca-dark-gold">today.</span>
        </h2>
        <p className="font-mono text-sm text-gray-500 leading-relaxed mb-9">
          Join 12,000+ college students who stopped grinding aimlessly<br />
          and started competing, learning, and winning.
        </p>

        {/* Buttons */}
        <div className="flex gap-3.5 justify-center flex-wrap">
          <button className="font-mono text-xs font-bold uppercase tracking-wider px-10 py-4 rounded border-2 border-ca-dark-gold bg-ca-dark-gold text-ca-dark-bg cursor-pointer hover:bg-transparent hover:text-ca-dark-gold transition-all inline-flex items-center gap-2">
            Create Free Account ↗
          </button>
          <button className="font-mono text-xs font-bold uppercase tracking-wider px-9 py-4 rounded border border-gray-700 bg-transparent text-gray-500 cursor-pointer hover:border-gray-600 hover:text-gray-400 transition-colors">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}
