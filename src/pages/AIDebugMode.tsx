import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function AIDebugMode({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [code, setCode] = useState('')
  const [expectedOutput, setExpectedOutput] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleAnalyze = () => {
    if (!code.trim()) {
      setFeedback('Please paste some code to analyze')
      return
    }

    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setFeedback('AI analysis will appear here. The AI will evaluate your logic and ask guiding questions instead of giving answers.')
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-20 px-10 bg-ca-dark-bg text-ca-dark-ink">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black mb-2 text-white">AI Debug Mode</h1>
          <p className="text-gray-500 font-mono text-sm mb-10">Analyze buggy code and explain your thinking. Get AI feedback on logic, not answers.</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Codes Analyzed</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0%</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">Avg Accuracy</div>
            </div>
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-6">
              <div className="text-2xl font-black text-ca-dark-gold">0</div>
              <div className="text-xs font-mono text-gray-500 uppercase mt-1">XP Earned</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">Your Code</label>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Paste your buggy code here..."
                  className="w-full h-48 bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 font-mono text-sm text-ca-dark-ink placeholder-gray-400 resize-none focus:outline-none focus:border-ca-dark-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">Expected Output</label>
                <textarea
                  value={expectedOutput}
                  onChange={(e) => setExpectedOutput(e.target.value)}
                  placeholder="What should the code output?"
                  className="w-full h-24 bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 font-mono text-sm text-ca-dark-ink placeholder-gray-400 resize-none focus:outline-none focus:border-ca-dark-gold"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 bg-ca-dark-gold text-ca-dark-bg rounded hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze with AI'}
              </button>
            </div>

            {/* Feedback Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">AI Feedback</label>
                <div className="w-full h-72 bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 font-mono text-sm text-gray-500 overflow-y-auto">
                  {feedback ? (
                    <div className="space-y-3">
                      <p>{feedback}</p>
                      {feedback.includes('logic') && (
                        <div className="border-t border-ca-dark-bg2 pt-3 space-y-2">
                          <p className="text-white font-bold">🤔 Guiding Questions:</p>
                          <p>• What happens in the loop on the first iteration?</p>
                          <p>• Does your condition handle edge cases?</p>
                          <p>• Why might the output differ from expected?</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-gray-600">Your AI feedback will appear here...</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">Your Explanation</label>
                <textarea
                  placeholder="Explain your thinking about the bugs you found..."
                  className="w-full h-20 bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 font-mono text-sm text-ca-dark-ink placeholder-gray-400 resize-none focus:outline-none focus:border-ca-dark-gold"
                />
              </div>

              <button className="w-full font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 border border-ca-dark-gold text-ca-dark-gold rounded hover:bg-ca-dark-gold hover:text-ca-dark-bg transition-colors">
                Submit Explanation
              </button>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-12 p-8 bg-ca-dark-white border border-ca-dark-bg2 rounded">
            <h3 className="text-lg font-black mb-4 text-white">How AI Debug Mode Works</h3>
            <ul className="space-y-3 font-mono text-xs text-gray-500">
              <li>✓ Paste buggy code and expected output</li>
              <li>✓ AI analyzes logic errors (not syntax)</li>
              <li>✓ Get Socratic questioning to guide your thinking</li>
              <li>✓ Explain your logic — AI evaluates reasoning quality</li>
              <li>✓ Earn XP for quality explanations, not just fixes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
