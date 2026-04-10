import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function AIDebugMode({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [showThinkingLog, setShowThinkingLog] = useState(true)

  const code = `class DataProcessor:
    """Process incoming tactical streams"""
    
    def __init__(self, config):
        self.buffer = []
        self.config = config
    
    def defInject_stream(self, packet):
        for payload in packet:
            self.buffer.append(payload.meta['id'])
        if len(self.buffer) > 1000:
            self.flush_stream()
    
    def flush_stream(self):
        self.inject_stream(self.buffer[:10])
        self.buffer.clear()`

  // Syntax highlighting for Python code
  const highlightPythonCode = (line: string) => {
    const keywords = ['class', 'def', 'if', 'for', 'return', 'import', 'from', 'in', 'self', 'True', 'False', 'None']
    const builtins = ['len', 'range', 'append', 'clear', 'enumerate', 'print', 'str', 'int']
    
    let result: (JSX.Element | string)[] = []
    let remaining = line
    let key = 0
    
    // Match string literals
    const stringMatch = remaining.match(/(['"])([^'"]*)\1/)
    if (stringMatch) {
      const before = remaining.substring(0, stringMatch.index)
      const stringPart = stringMatch[0]
      const after = remaining.substring(stringMatch.index! + stringMatch[0].length)
      
      result.push(before)
      result.push(<span key={key++} className="text-green-400">{stringPart}</span>)
      
      for (const word of after.split(/(\s+|[\(\)\[\]{}:,.])/)) {
        if (!word || /^\s+$/.test(word)) {
          result.push(word)
        } else if (keywords.includes(word)) {
          result.push(<span key={key++} className="text-purple-400">{word}</span>)
        } else if (builtins.includes(word)) {
          result.push(<span key={key++} className="text-cyan-400">{word}</span>)
        } else {
          result.push(word)
        }
      }
    } else {
      for (const word of line.split(/(\s+|[\(\)\[\]{}:,.])/)) {
        if (!word || /^\s+$/.test(word)) {
          result.push(word)
        } else if (keywords.includes(word)) {
          result.push(<span key={key++} className="text-purple-400">{word}</span>)
        } else if (builtins.includes(word)) {
          result.push(<span key={key++} className="text-cyan-400">{word}</span>)
        } else if (/^[A-Z]/.test(word)) {
          result.push(<span key={key++} className="text-blue-400">{word}</span>)
        } else if (/^\d+/.test(word)) {
          result.push(<span key={key++} className="text-green-400">{word}</span>)
        } else {
          result.push(word)
        }
      }
    }
    return result
  }

  const thinkingSteps = [
    {
      step: '01',
      title: 'OBSERVATION',
      description: 'Analyzed method defInject_stream. The logic for flushing the buffer threshold is reached.'
    },
    {
      step: '02',
      title: 'HYPOTHESIS',
      description: 'flush_stream calls inject_stream. which immediately checks the length and calls flush_stream again (the mujuean doesn\'t clear the buffer effectively).'
    },
    {
      step: '03',
      title: 'CRITICAL FLAW',
      description: 'Recursion depth reached at line 11. Circular dependency detected between data injection and buffer clearing mechanisms.'
    }
  ]

  const errors = [
    { type: '3 CRITICAL ERRORS', color: '■', colorClass: 'bg-red-600' },
    { type: 'PYTHON 3.12', color: '■', colorClass: 'bg-yellow-500' }
  ]

  const traceMetrics = [
    { label: 'HEAP ALLOCATION', value: '842.4', unit: 'MB' },
    { label: 'RECURSION DEPTH', value: '992', unit: '/1000' }
  ]

  const aiDescription = `This DataProcessor class has a critical flaw in its buffer management logic. When the buffer reaches 1000 items, it attempts to flush the data. However, the flush_stream method calls inject_stream instead of properly clearing the buffer. This creates a circular dependency where inject_stream can trigger another flush_stream call, potentially causing infinite recursion and stack overflow. The issue stems from a missing or incorrect method name at line 15 (inject_stream vs defInject_stream).`

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-16 bg-ca-dark-bg text-white">
        {/* Main Content */}
        <div className="px-10 py-6 max-w-full">
          {/* Code Editor Area */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Left - Code Editor */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden">
              <div className="bg-ca-dark-bg px-4 py-2 border-b border-ca-dark-bg2">
                <div className="font-mono text-xs text-gray-500 uppercase">Python File</div>
              </div>
              <div className="p-4 bg-ca-dark-bg2 font-mono text-xs leading-relaxed text-gray-300 max-h-96 overflow-y-auto">
                {code.split('\n').map((line, idx) => (
                  <div key={idx} className={`flex gap-4 hover:bg-gray-900 hover:bg-opacity-30 ${idx === 10 ? 'bg-red-900 bg-opacity-20' : ''}`}>
                    <span className="text-gray-600 select-none flex-shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                    <span className={idx === 10 ? 'text-red-400' : ''}>{highlightPythonCode(line)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center - Error Analysis & AI Description */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden flex flex-col">
              <div className="bg-ca-dark-bg px-4 py-2 border-b border-ca-dark-bg2 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  {errors.map((err, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <span className={`text-lg ${err.colorClass}`}>■</span>
                      <span className="font-mono text-xs text-gray-500">{err.type}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {/* AI Problem Description */}
                <div className="p-4 border-b border-ca-dark-bg2 bg-ca-dark-bg2">
                  <div className="font-mono text-xs text-ca-dark-gold uppercase mb-2">PROBLEM DESCRIPTION</div>
                  <div className="font-mono text-xs text-gray-400 leading-relaxed">
                    {aiDescription}
                  </div>
                </div>

                {/* Error Analysis Section */}
                <div className="p-4 space-y-3">
                  <div className="font-mono text-xs text-gray-500 uppercase mb-3">ERROR DETAILS</div>
                  <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded p-3">
                    <div className="font-mono text-xs text-red-400 mb-1">Line 11: Recursion Detected</div>
                    <div className="font-mono text-xs text-gray-400">self.flush_stream() → Possible infinite loop scenario when the mujuean doesn't clear the buffer effectively</div>
                  </div>
                  <div className="bg-yellow-900 bg-opacity-20 border border-yellow-700 rounded p-3">
                    <div className="font-mono text-xs text-yellow-400 mb-1">Line 07: Possible recursion depth exceeded</div>
                    <div className="font-mono text-xs text-gray-400">flush_stream calls inject_stream. which immediately checks the length and calls flush_stream again</div>
                  </div>
                  <div className="bg-blue-900 bg-opacity-20 border border-blue-700 rounded p-3">
                    <div className="font-mono text-xs text-blue-400 mb-1">STEP 03 // CRITICAL FLAW</div>
                    <div className="font-mono text-xs text-gray-400">Recursion depth reached at line 11. Circular dependency detected between data injection and buffer clearing mechanisms</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Thinking Log & Actions */}
            <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded overflow-hidden flex flex-col">
              <div className="bg-ca-dark-bg px-4 py-2 border-b border-ca-dark-bg2 flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs text-ca-dark-gold uppercase">THINKING LOG</div>
                  <div className="font-mono text-xs text-gray-500 mt-1">INTERNAL AI DIAGNOSTIC ANALYSIS</div>
                </div>
                <button
                  onClick={() => setShowThinkingLog(!showThinkingLog)}
                  className="font-mono text-xs text-ca-dark-gold hover:text-white transition-colors"
                >
                  {showThinkingLog ? 'HIDE' : 'SHOW'}
                </button>
              </div>

              {showThinkingLog && (
                <>
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 border-b border-ca-dark-bg2">
                    {thinkingSteps.map((step, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-ca-dark-gold">STEP {step.step} // {step.title}</span>
                        </div>
                        <div className="font-mono text-xs text-gray-400 ml-6 leading-relaxed">
                          {step.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className={`${showThinkingLog ? '' : 'flex-1'} border-t border-ca-dark-bg2 p-3 space-y-2`}>
                <button className="w-full bg-ca-dark-gold text-ca-dark-bg font-mono text-xs font-bold uppercase py-2 rounded hover:bg-opacity-90 transition-all">
                  RUN DEBUGGER
                </button>
                <button className="w-full border border-ca-dark-gold text-ca-dark-gold font-mono text-xs font-bold uppercase py-2 rounded hover:bg-ca-dark-gold hover:text-ca-dark-bg transition-all">
                  SUBMIT FIX
                </button>
              </div>
            </div>
          </div>

          {/* Trace Analysis */}
          <div className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 mb-6">
            <div className="font-mono text-xs text-ca-dark-gold uppercase mb-4">TRACE ANALYSIS</div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
              {traceMetrics.map((metric, idx) => (
                <div key={idx} className="bg-ca-dark-bg rounded p-3">
                  <div className="font-mono text-xs text-gray-500 mb-1">{metric.label}</div>
                  <div className="font-mono text-2xl font-black text-ca-dark-gold">
                    {metric.value}<span className="text-xs text-gray-500 ml-1">{metric.unit}</span>
                  </div>
                </div>
              ))}
              <div className="bg-ca-dark-bg rounded p-3">
                <div className="font-mono text-xs text-gray-500 mb-2">MEMORY PRESSURE OVER TIME</div>
                <div className="h-12 flex items-end gap-1">
                  {[2, 3, 2.5, 4, 3.5, 5, 4.5, 5.5, 5, 6].map((val, idx) => (
                    <div
                      key={idx}
                      className="flex-1 bg-gradient-to-t from-ca-dark-gold to-ca-dark-gold rounded-t"
                      style={{ height: `${(val / 6) * 100}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-mono text-gray-500 w-32">STACK_TRACE_ANALYSIS</span>
                <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
                  <div className="h-full bg-ca-dark-gold" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-gray-500 w-32">MEMORY_LEAK_SEVERITY</span>
                <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="border-t border-ca-dark-bg2 py-3 flex items-center justify-between">
            <div className="flex items-center gap-6 text-xs font-mono">
              <span className="text-green-400">X-RAY: ACTIVE</span>
              <span className="text-gray-500">SAMPLING: 100%</span>
              <span className="text-ca-dark-gold">ANALYZING POTENTIAL FIX...</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
              <a href="#" className="hover:text-ca-dark-gold">GITHUB</a>
              <a href="#" className="hover:text-ca-dark-gold">DISCORD</a>
              <a href="#" className="hover:text-ca-dark-gold">LEGAL: PROVISIONS</a>
              <a href="#" className="hover:text-ca-dark-gold">PRIVACY: ENCRYPTION</a>
              <span className="text-green-400">TERMINAL_CONNECTED</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
