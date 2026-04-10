import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function DSA({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const topics = [
    'Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Queues',
    'Trees', 'Graphs', 'Heaps', 'Hash Tables', 'Dynamic Programming',
    'Recursion', 'Sorting', 'Searching', 'Bit Manipulation', 'Greedy',
    'Matrix', 'Tries', 'Union Find', 'Sliding Window', 'Binary Search',
    'Two Pointers', 'Intervals', 'Stack Monotonic', 'Back Tracking', 'Others'
  ]

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-20 px-10 bg-ca-dark-bg text-ca-dark-ink">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black mb-2 text-white">DSA Problem Recommender</h1>
          <p className="text-gray-500 font-mono text-sm mb-10">Master Data Structures & Algorithms with adaptive learning paths</p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Problems Solved</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Streak</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0%</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Completion</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Total XP</div>
            </div>
          </div>

          {/* Topics Grid */}
          <h2 className="text-2xl font-black mb-6 text-white">Topics ({topics.length})</h2>
          <div className="grid grid-cols-5 gap-3">
            {topics.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTopic(topic)}
                className={`p-4 rounded border transition-all font-mono text-xs font-bold uppercase tracking-wider text-center cursor-pointer hover:shadow-lg ${
                  selectedTopic === topic
                    ? 'bg-ca-dark-gold border-ca-dark-gold text-ca-dark-bg'
                    : 'bg-ca-dark-white border-ca-dark-bg2 text-ca-dark-ink hover:border-ca-dark-gold'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* Selected Topic Problems */}
          {selectedTopic && (
            <div className="mt-12">
              <h3 className="text-2xl font-black mb-6 text-white">{selectedTopic} Problems</h3>
              <div className="space-y-3 bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
                <p className="text-gray-500 font-mono text-sm">Problems for {selectedTopic} will load here...</p>
                <p className="text-gray-400 font-mono text-xs">Coming soon: problem list with difficulty levels, hints, and editor</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
