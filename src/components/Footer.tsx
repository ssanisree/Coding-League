export default function Footer() {
  return (
    <footer className="bg-ca-dark-bg border-t border-ca-dark-bg2 px-10 py-9 flex items-center justify-between">
      <div className="font-mono text-base font-bold text-ca-dark-gold">
        Code<span className="text-gray-600">Arena</span>
      </div>

      <ul className="flex gap-6 list-none">
        <li>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-wider text-gray-600 hover:text-ca-dark-gold transition-colors"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-wider text-gray-600 hover:text-ca-dark-gold transition-colors"
          >
            Leaderboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-wider text-gray-600 hover:text-ca-dark-gold transition-colors"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-wider text-gray-600 hover:text-ca-dark-gold transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="font-mono text-xs text-gray-700">© 2026 CodeArena. Built for coders.</div>
    </footer>
  )
}
