export default function Testimonials() {
  const testimonials = [
    {
      quote: 'The 1v1 battles genuinely made me a faster coder. Nothing motivates you like watching someone else type in real time.',
      name: 'Aarav K.',
      role: '3rd Year · VJTI Mumbai · LEGEND',
      initials: 'AK',
      bgColor: 'bg-yellow-900',
    },
    {
      quote: 'The hint system is a game changer. It forces you to think, not just copy. I learned more in 2 weeks than 6 months elsewhere.',
      name: 'Priya R.',
      role: 'Final Year · COEP Pune · ARCHITECT',
      initials: 'PR',
      bgColor: 'bg-green-900',
    },
    {
      quote: 'My 21-day streak is the most disciplined I\'ve been with coding. The social sharing feature got my whole hostel competing.',
      name: 'Mihir S.',
      role: '2nd Year · PICT Pune · DEBUGGER',
      initials: 'MS',
      bgColor: 'bg-gray-700',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-10 py-20 relative z-10">
      <div className="section-eyebrow reveal">WHAT CODERS SAY</div>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-ca-dark-ink mb-10 reveal">
        Trusted by students<br />who ship code.
      </h2>

      <div className="grid grid-cols-3 gap-3.5">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-ca-dark-white border border-ca-dark-bg2 rounded-lg p-6 reveal hover:shadow-lg hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
          >
            {/* Quote */}
            <div className="font-mono text-xs text-gray-600 leading-relaxed mb-4.5 pb-4 border-b border-dashed border-gray-700">
              <span className="text-3xl text-ca-dark-gold leading-none block mb-2">"</span>
              {testimonial.quote}
            </div>

            {/* Author */}
            <div className="flex items-center gap-2.5">
              <div className={`${testimonial.bgColor} w-8 h-8 rounded flex items-center justify-center font-mono text-xs font-bold text-white flex-shrink-0`}>
                {testimonial.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-ca-dark-ink">{testimonial.name}</div>
                <div className="font-mono text-xs text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-dashed border-gray-700 my-0 mt-20" />
    </section>
  )
}
