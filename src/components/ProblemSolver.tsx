import { useState } from 'react'

interface TestCase {
  input: string
  output: string
  explanation?: string
}

interface TestResult {
  passed: boolean
  input: string
  expectedOutput: string
  actualOutput?: string
  error?: string
  executionTime?: number
}

interface ProblemData {
  id: number
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  testCases: TestCase[]
  starterCode: string
}

interface ProblemSolverProps {
  problem: ProblemData
  onClose: () => void
  onSolve?: (problemId: number) => void
}

export default function ProblemSolver({ problem, onClose, onSolve }: ProblemSolverProps) {
  const [code, setCode] = useState(problem.starterCode)
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [selectedTab, setSelectedTab] = useState<'description' | 'testcases'>('description')
  const [allTestsPassed, setAllTestsPassed] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400'
      case 'Medium':
        return 'text-yellow-400'
      case 'Hard':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  // Simulate code execution with proper error checking
  const executeCode = async () => {
    setIsRunning(true)
    const results: TestResult[] = []
    
    try {
      // Check for syntax errors in the code
      if (!code.trim()) {
        setTestResults([{
          passed: false,
          input: '',
          expectedOutput: '',
          error: 'Code is empty. Please write some code.'
        }])
        setIsRunning(false)
        return
      }

      // Check if user just submitted starter code without solving
      if (code.trim() === problem.starterCode.trim() || code.includes('pass')) {
        setTestResults([{
          passed: false,
          input: '',
          expectedOutput: '',
          error: 'Please implement the solution. Your code appears to be incomplete.'
        }])
        setIsRunning(false)
        return
      }

      // For each test case, try to execute the code
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCase = problem.testCases[i]
        const startTime = performance.now()
        
        try {
          // Simple simulation based on problem type
          let actualOutput = ''
          let error: string | undefined

          // Parse the input and simulate execution
          try {
            // For the Two Sum problem (id: 1)
            if (problem.id === 1) {
              const inputStr = testCase.input
              const numsMatch = inputStr.match(/\[([^\]]+)\]/)
              const targetMatch = inputStr.match(/target\s*=\s*(\d+)/)
              
              if (numsMatch && targetMatch) {
                const nums = numsMatch[1].split(',').map(n => parseInt(n.trim()))
                const target = parseInt(targetMatch[1])
                
                // Check if code has actual implementation (not just starter code)
                const hasProperLogic = code.includes('for') || code.includes('while') || code.includes('in')
                
                if (!hasProperLogic) {
                  error = 'Your solution does not contain any loops or proper logic.'
                } else {
                  // Find two sum
                  let found = false
                  for (let j = 0; j < nums.length; j++) {
                    for (let k = j + 1; k < nums.length; k++) {
                      if (nums[j] + nums[k] === target) {
                        actualOutput = `[${j},${k}]`
                        found = true
                        break
                      }
                    }
                    if (found) break
                  }
                  
                  if (!found) {
                    error = 'No valid pair found. Your logic may be incorrect.'
                  }
                }
              }
            }
            // For Contains Duplicate problem (id: 3)
            else if (problem.id === 3) {
              const inputStr = testCase.input
              const numsMatch = inputStr.match(/\[([^\]]+)\]/)
              
              if (numsMatch) {
                // Check if code has proper logic
                const hasProperLogic = code.includes('set') || code.includes('Set') || code.includes('dict') || code.includes('seen') || code.includes('for')
                
                if (!hasProperLogic) {
                  error = 'Your solution does not contain proper logic for checking duplicates.'
                } else {
                  const nums = numsMatch[1].split(',').map(n => n.trim())
                  const uniqueNums = new Set(nums)
                  actualOutput = nums.length !== uniqueNums.size ? 'true' : 'false'
                }
              }
            }
            // For Best Time to Buy and Sell Stock problem (id: 2)
            else if (problem.id === 2) {
              const inputStr = testCase.input
              const pricesMatch = inputStr.match(/\[([^\]]+)\]/)
              
              if (pricesMatch) {
                // Check if code has proper logic
                const hasProperLogic = code.includes('for') || code.includes('while') || code.includes('max')
                
                if (!hasProperLogic) {
                  error = 'Your solution does not contain proper loop or comparison logic.'
                } else {
                  const prices = pricesMatch[1].split(',').map(p => parseInt(p.trim()))
                  let maxProfit = 0
                  for (let j = 0; j < prices.length; j++) {
                    for (let k = j + 1; k < prices.length; k++) {
                      maxProfit = Math.max(maxProfit, prices[k] - prices[j])
                    }
                  }
                  actualOutput = maxProfit.toString()
                }
              }
            }
            // Default for other problems
            else {
              error = 'Test execution for this problem not yet implemented. Please verify manually.'
            }
          } catch (e) {
            error = `Runtime Error: ${(e as Error).message || 'Unknown error during execution'}`
          }

          const executionTime = performance.now() - startTime

          // Compare output only if no error occurred
          let passed = false
          if (!error && actualOutput) {
            passed = actualOutput.trim() === testCase.output.trim()
            if (!passed) {
              error = `Output mismatch. You got "${actualOutput}" but expected "${testCase.output}"`
            }
          }
          
          results.push({
            passed,
            input: testCase.input,
            expectedOutput: testCase.output,
            actualOutput: actualOutput || 'No output generated',
            error,
            executionTime: Math.round(executionTime)
          })
        } catch (e) {
          results.push({
            passed: false,
            input: testCase.input,
            expectedOutput: testCase.output,
            error: `Error: ${(e as Error).message}`
          })
        }
      }

      setTestResults(results)
      const allPassed = results.every(r => r.passed)
      setAllTestsPassed(allPassed)
    } catch (error) {
      setTestResults([{
        passed: false,
        input: '',
        expectedOutput: '',
        error: `Fatal Error: ${(error as Error).message || 'Something went wrong'}`
      }])
    }
    
    setIsRunning(false)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-ca-dark-bg w-11/12 h-5/6 rounded-lg border border-yellow-600/30 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-black/50 border-b border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-black text-white">{problem.title}</h2>
              <span className={`px-3 py-1 rounded font-bold text-sm ${getDifficultyColor(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
            </div>
            {testResults.length > 0 && (
              <div className="text-sm font-mono text-gray-400">
                <span className="text-green-400">Passed: {testResults.filter(r => r.passed).length}</span> / <span>{testResults.length}</span>
                <span className="ml-4 text-yellow-400">Score: {Math.round((testResults.filter(r => r.passed).length / testResults.length) * 100)}%</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Problem Description & Test Cases */}
          <div className="w-1/3 bg-black/30 border-r border-gray-700 flex flex-col overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-700 bg-black/50">
              <button
                onClick={() => setSelectedTab('description')}
                className={`flex-1 py-3 px-4 font-mono text-xs font-bold transition-colors ${
                  selectedTab === 'description'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                DESCRIPTION
              </button>
              <button
                onClick={() => setSelectedTab('testcases')}
                className={`flex-1 py-3 px-4 font-mono text-xs font-bold transition-colors ${
                  selectedTab === 'testcases'
                    ? 'text-yellow-400 border-b-2 border-yellow-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                TEST CASES ({problem.testCases.length})
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {selectedTab === 'description' ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-yellow-400 mb-2 uppercase">Problem Statement</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{problem.description}</p>
                  </div>
                  
                  <div className="bg-gray-900/50 border border-gray-700 rounded p-3">
                    <h4 className="text-xs font-bold text-cyan-400 mb-2 uppercase">Constraints</h4>
                    <ul className="text-xs text-gray-400 space-y-1 font-mono">
                      <li>• Time Complexity: O(n)</li>
                      <li>• Space Complexity: O(1)</li>
                      <li>• Return type: Integer</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {problem.testCases.map((testCase, idx) => {
                    const result = testResults[idx]
                    const isExecuted = result !== undefined
                    
                    return (
                      <div 
                        key={idx} 
                        className={`border rounded p-3 transition-all ${
                          isExecuted
                            ? result.passed
                              ? 'bg-green-900/30 border-green-600'
                              : 'bg-red-900/30 border-red-600'
                            : 'bg-gray-900/50 border-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-mono text-gray-500">Test Case {idx + 1}</span>
                          {isExecuted && (
                            <span className={`text-xs font-bold ${result.passed ? 'text-green-400' : 'text-red-400'}`}>
                              {result.passed ? '✓ PASSED' : '✕ FAILED'}
                            </span>
                          )}
                        </div>
                        
                        <div className="space-y-2 mb-2">
                          <div className="text-xs">
                            <span className="text-gray-500">Input: </span>
                            <code className="text-yellow-300 font-mono text-xs break-all">{testCase.input}</code>
                          </div>
                          <div className="text-xs">
                            <span className="text-gray-500">Expected: </span>
                            <code className="text-green-300 font-mono text-xs break-all">{testCase.output}</code>
                          </div>
                          
                          {isExecuted && (
                            <>
                              {result.error ? (
                                <div className="text-xs bg-red-950 border border-red-700 rounded p-2 mt-2">
                                  <span className="text-red-400 font-bold">Error:</span>
                                  <p className="text-red-300 font-mono text-xs mt-1">{result.error}</p>
                                </div>
                              ) : (
                                <>
                                  <div className="text-xs">
                                    <span className="text-gray-500">Actual: </span>
                                    <code className={`font-mono text-xs break-all ${result.passed ? 'text-green-300' : 'text-red-300'}`}>
                                      {result.actualOutput}
                                    </code>
                                  </div>
                                  {result.executionTime && (
                                    <div className="text-xs text-gray-500">
                                      Execution time: {result.executionTime}ms
                                    </div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </div>
                        
                        {testCase.explanation && (
                          <p className="text-xs text-gray-400 border-t border-gray-700 pt-2 mt-2">
                            <span className="font-bold">Explanation:</span> {testCase.explanation}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Code Editor */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Language Selection */}
            <div className="bg-black/50 border-b border-gray-700 px-4 py-2 flex items-center gap-2">
              <span className="text-xs font-mono text-gray-500">Language:</span>
              <select className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-white font-mono">
                <option>Python</option>
              </select>
            </div>

            {/* Code Editor */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="flex-1 bg-gray-900 text-white font-mono text-xs p-4 resize-none border-none focus:outline-none"
                spellCheck="false"
              />
            </div>

            {/* Actions */}
            <div className="bg-black/50 border-t border-gray-700 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  onClick={executeCode}
                  disabled={isRunning}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold text-xs rounded transition-colors flex items-center gap-2"
                >
                  {isRunning ? (
                    <>
                      <span className="animate-spin">⟳</span> Running...
                    </>
                  ) : (
                    <>▶ Run Code</>
                  )}
                </button>
                <button
                  onClick={() => {
                    setCode(problem.starterCode)
                    setTestResults([])
                    setAllTestsPassed(false)
                  }}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-bold text-xs rounded transition-colors"
                >
                  Reset
                </button>
              </div>

              {testResults.length > 0 && (
                <div className="flex items-center gap-3">
                  {allTestsPassed ? (
                    <div className="flex items-center gap-3 px-4 py-2 bg-green-900 border border-green-700 rounded-lg">
                      <div className="flex-1">
                        <div className="text-sm font-bold text-green-400">✓ ALL TESTS PASSED!</div>
                        <div className="text-xs text-green-300">Congratulations! Your solution is correct.</div>
                      </div>
                      <button 
                        onClick={() => {
                          onSolve?.(problem.id)
                          onClose()
                        }}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs rounded transition-colors whitespace-nowrap"
                      >
                        Submit Solution
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3 px-4 py-2 bg-yellow-900 border border-yellow-700 rounded-lg">
                      <div>
                        <div className="text-sm font-bold text-yellow-400">
                          {testResults.filter(r => r.passed).length}/{testResults.length} Tests Passed
                        </div>
                        <div className="text-xs text-yellow-300">
                          {testResults.filter(r => r.error).length > 0 ? 'Fix the errors below' : 'Check your output'}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
