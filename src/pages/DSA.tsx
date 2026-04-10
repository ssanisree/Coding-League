import Navbar from '../components/Navbar'
import { useState } from 'react'

interface Problem {
  id: number
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  acceptance: number
  submissions: number
}

interface TopicProblems {
  [key: string]: Problem[]
}

export default function DSA({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const topics = [
    'Arrays', 'Strings', 'Linked Lists', 'Stacks', 'Queues',
    'Trees', 'Graphs', 'Heaps', 'Hash Tables', 'Dynamic Programming',
    'Recursion', 'Sorting', 'Searching', 'Bit Manipulation', 'Greedy',
    'Matrix', 'Tries', 'Union Find', 'Sliding Window', 'Binary Search',
    'Two Pointers', 'Intervals', 'Stack Monotonic', 'Back Tracking', 'Others'
  ]

  // Sample problems data - you can replace this with actual data from API or database
  const problemsData: TopicProblems = {
    'Arrays': [
      { id: 1, title: 'Two Sum', difficulty: 'Easy', acceptance: 47.8, submissions: 15234 },
      { id: 2, title: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', acceptance: 52.3, submissions: 12450 },
      { id: 3, title: 'Contains Duplicate', difficulty: 'Easy', acceptance: 61.5, submissions: 8934 },
      { id: 4, title: '3Sum', difficulty: 'Medium', acceptance: 33.2, submissions: 9876 },
      { id: 5, title: 'Product of Array Except Self', difficulty: 'Medium', acceptance: 65.4, submissions: 6234 },
      { id: 6, title: 'Maximum Subarray', difficulty: 'Medium', acceptance: 48.7, submissions: 7123 },
      { id: 7, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 4567 },
      { id: 8, title: 'First Missing Positive', difficulty: 'Hard', acceptance: 41.2, submissions: 3456 },
    ],
    'Strings': [
      { id: 9, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.2, submissions: 11234 },
      { id: 10, title: 'Reverse String', difficulty: 'Easy', acceptance: 79.8, submissions: 9234 },
      { id: 11, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: 35.8, submissions: 8765 },
      { id: 12, title: 'Longest Substring Without Repeating', difficulty: 'Medium', acceptance: 33.4, submissions: 7654 },
      { id: 13, title: 'Edit Distance', difficulty: 'Hard', acceptance: 48.3, submissions: 4321 },
      { id: 14, title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 27.3, submissions: 2345 },
    ],
    'Linked Lists': [
      { id: 15, title: 'Reverse Linked List', difficulty: 'Easy', acceptance: 63.4, submissions: 7654 },
      { id: 16, title: 'Palindrome Linked List', difficulty: 'Easy', acceptance: 44.2, submissions: 5432 },
      { id: 17, title: 'Linked List Cycle', difficulty: 'Medium', acceptance: 45.7, submissions: 5432 },
      { id: 18, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: 32.8, submissions: 4321 },
      { id: 19, title: 'Merge k Sorted Lists', difficulty: 'Hard', acceptance: 41.8, submissions: 3123 },
      { id: 20, title: 'LRU Cache', difficulty: 'Hard', acceptance: 35.4, submissions: 2876 },
    ],
    'Stacks': [
      { id: 21, title: 'Implement Stack', difficulty: 'Easy', acceptance: 72.3, submissions: 4321 },
      { id: 22, title: 'Min Stack', difficulty: 'Easy', acceptance: 58.1, submissions: 5876 },
      { id: 23, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', acceptance: 36.9, submissions: 3456 },
      { id: 24, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', acceptance: 37.5, submissions: 2345 },
      { id: 25, title: 'Trapping Rain Water II', difficulty: 'Hard', acceptance: 41.2, submissions: 1876 },
    ],
    'Queues': [
      { id: 26, title: 'Implement Queue', difficulty: 'Easy', acceptance: 68.5, submissions: 3234 },
      { id: 27, title: 'Number of Recent Calls', difficulty: 'Easy', acceptance: 78.2, submissions: 2345 },
      { id: 28, title: 'Task Scheduler', difficulty: 'Medium', acceptance: 43.6, submissions: 3456 },
      { id: 29, title: 'Sliding Window Maximum', difficulty: 'Hard', acceptance: 42.3, submissions: 2123 },
      { id: 30, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 27.6, submissions: 1234 },
    ],
    'Trees': [
      { id: 31, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', acceptance: 74.1, submissions: 8765 },
      { id: 32, title: 'Invert Binary Tree', difficulty: 'Easy', acceptance: 72.3, submissions: 7654 },
      { id: 33, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', acceptance: 58.4, submissions: 4567 },
      { id: 34, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', acceptance: 48.2, submissions: 2345 },
      { id: 35, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', acceptance: 38.7, submissions: 2345 },
    ],
    'Graphs': [
      { id: 36, title: 'Number of Islands', difficulty: 'Medium', acceptance: 56.2, submissions: 8765 },
      { id: 37, title: 'Clone Graph', difficulty: 'Medium', acceptance: 42.3, submissions: 3456 },
      { id: 38, title: 'Course Schedule', difficulty: 'Medium', acceptance: 48.9, submissions: 4321 },
      { id: 39, title: 'Alien Dictionary', difficulty: 'Hard', acceptance: 35.8, submissions: 1234 },
      { id: 40, title: 'Network Delay Time', difficulty: 'Hard', acceptance: 43.5, submissions: 2876 },
    ],
    'Heaps': [
      { id: 41, title: 'Last Stone Weight', difficulty: 'Easy', acceptance: 61.2, submissions: 3456 },
      { id: 42, title: 'Kth Largest Element in Array', difficulty: 'Medium', acceptance: 61.2, submissions: 4321 },
      { id: 43, title: 'Top K Frequent Elements', difficulty: 'Medium', acceptance: 68.4, submissions: 5678 },
      { id: 44, title: 'Find Median from Data Stream', difficulty: 'Hard', acceptance: 38.9, submissions: 2123 },
      { id: 45, title: 'Merge K Sorted Lists', difficulty: 'Hard', acceptance: 41.8, submissions: 1876 },
    ],
    'Hash Tables': [
      { id: 46, title: 'Valid Anagram', difficulty: 'Easy', acceptance: 62.3, submissions: 7234 },
      { id: 47, title: 'Majority Element', difficulty: 'Easy', acceptance: 64.8, submissions: 6543 },
      { id: 48, title: 'Group Anagrams', difficulty: 'Medium', acceptance: 53.4, submissions: 5123 },
      { id: 49, title: 'LRU Cache', difficulty: 'Hard', acceptance: 35.4, submissions: 2876 },
      { id: 50, title: 'Word Ladder II', difficulty: 'Hard', acceptance: 29.6, submissions: 1234 },
    ],
    'Dynamic Programming': [
      { id: 51, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 53.1, submissions: 9876 },
      { id: 52, title: 'Fibonacci Number', difficulty: 'Easy', acceptance: 68.5, submissions: 7654 },
      { id: 53, title: 'House Robber', difficulty: 'Medium', acceptance: 45.3, submissions: 6234 },
      { id: 54, title: 'Coin Change', difficulty: 'Medium', acceptance: 38.7, submissions: 5432 },
      { id: 55, title: 'Longest Increasing Subsequence', difficulty: 'Hard', acceptance: 47.2, submissions: 2345 },
      { id: 56, title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 27.8, submissions: 1234 },
    ],
    'Recursion': [
      { id: 57, title: 'Factorial', difficulty: 'Easy', acceptance: 85.3, submissions: 6234 },
      { id: 58, title: 'Fibonacci Sequence', difficulty: 'Easy', acceptance: 68.9, submissions: 5432 },
      { id: 59, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: 65.2, submissions: 4321 },
      { id: 60, title: 'Permutations', difficulty: 'Medium', acceptance: 71.4, submissions: 3876 },
      { id: 61, title: 'N-Queens', difficulty: 'Hard', acceptance: 33.8, submissions: 1234 },
      { id: 62, title: 'Wildcard Matching', difficulty: 'Hard', acceptance: 26.5, submissions: 876 },
    ],
    'Sorting': [
      { id: 63, title: 'Merge Sorted Array', difficulty: 'Easy', acceptance: 51.2, submissions: 7654 },
      { id: 64, title: 'Sort Colors', difficulty: 'Medium', acceptance: 57.8, submissions: 6543 },
      { id: 65, title: 'Kth Largest Element', difficulty: 'Medium', acceptance: 64.3, submissions: 5432 },
      { id: 66, title: 'Merge Intervals', difficulty: 'Medium', acceptance: 41.2, submissions: 4321 },
      { id: 67, title: 'Largest Number', difficulty: 'Hard', acceptance: 29.8, submissions: 1234 },
      { id: 68, title: 'Sliding Window Median', difficulty: 'Hard', acceptance: 31.2, submissions: 876 },
    ],
    'Searching': [
      { id: 69, title: 'Binary Search', difficulty: 'Easy', acceptance: 48.6, submissions: 8765 },
      { id: 70, title: 'First Bad Version', difficulty: 'Easy', acceptance: 38.2, submissions: 6234 },
      { id: 71, title: 'Search in Rotated Array', difficulty: 'Medium', acceptance: 33.8, submissions: 5432 },
      { id: 72, title: 'Find First and Last Position', difficulty: 'Medium', acceptance: 37.1, submissions: 4321 },
      { id: 73, title: 'Search a 2D Matrix II', difficulty: 'Hard', acceptance: 42.3, submissions: 2345 },
      { id: 74, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 27.6, submissions: 1234 },
    ],
    'Bit Manipulation': [
      { id: 75, title: 'Number of 1 Bits', difficulty: 'Easy', acceptance: 63.2, submissions: 5432 },
      { id: 76, title: 'Single Number', difficulty: 'Easy', acceptance: 68.4, submissions: 6543 },
      { id: 77, title: 'Sum of Two Integers', difficulty: 'Medium', acceptance: 48.7, submissions: 3456 },
      { id: 78, title: 'Bitwise AND of Number Range', difficulty: 'Medium', acceptance: 42.3, submissions: 2345 },
      { id: 79, title: 'N-Queens II', difficulty: 'Hard', acceptance: 35.8, submissions: 1234 },
      { id: 80, title: 'Max Points on Line', difficulty: 'Hard', acceptance: 21.5, submissions: 876 },
    ],
    'Greedy': [
      { id: 81, title: 'Lemonade Change', difficulty: 'Easy', acceptance: 52.3, submissions: 4321 },
      { id: 82, title: 'Jump Game', difficulty: 'Medium', acceptance: 36.4, submissions: 5432 },
      { id: 83, title: 'Gas Station', difficulty: 'Medium', acceptance: 48.1, submissions: 3876 },
      { id: 84, title: 'Queue Reconstruction by Height', difficulty: 'Medium', acceptance: 59.3, submissions: 2345 },
      { id: 85, title: 'Candy', difficulty: 'Hard', acceptance: 35.2, submissions: 1234 },
      { id: 86, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 1876 },
    ],
    'Matrix': [
      { id: 87, title: 'Rotate Image', difficulty: 'Medium', acceptance: 58.2, submissions: 5432 },
      { id: 88, title: 'Set Matrix Zeroes', difficulty: 'Medium', acceptance: 42.1, submissions: 4321 },
      { id: 89, title: 'Spiral Matrix', difficulty: 'Medium', acceptance: 44.8, submissions: 3876 },
      { id: 90, title: 'Word Search', difficulty: 'Medium', acceptance: 36.7, submissions: 3456 },
      { id: 91, title: 'Maximal Rectangle', difficulty: 'Hard', acceptance: 37.2, submissions: 1234 },
      { id: 92, title: 'Dungeon Game', difficulty: 'Hard', acceptance: 39.8, submissions: 1876 },
    ],
    'Tries': [
      { id: 93, title: 'Implement Trie', difficulty: 'Medium', acceptance: 71.2, submissions: 4321 },
      { id: 94, title: 'Add and Search Word', difficulty: 'Medium', acceptance: 44.3, submissions: 3456 },
      { id: 95, title: 'Word Search II', difficulty: 'Hard', acceptance: 27.9, submissions: 1234 },
      { id: 96, title: 'Concatenated Words', difficulty: 'Hard', acceptance: 34.5, submissions: 876 },
    ],
    'Union Find': [
      { id: 97, title: 'Number of Islands', difficulty: 'Medium', acceptance: 56.2, submissions: 8765 },
      { id: 98, title: 'Accounts Merge', difficulty: 'Medium', acceptance: 46.8, submissions: 3456 },
      { id: 99, title: 'Redundant Connection', difficulty: 'Medium', acceptance: 63.1, submissions: 2345 },
      { id: 100, title: 'Smallest String With Swaps', difficulty: 'Hard', acceptance: 48.3, submissions: 1234 },
    ],
    'Sliding Window': [
      { id: 101, title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 42.1, submissions: 6543 },
      { id: 102, title: 'Longest Substring Without Repeating', difficulty: 'Medium', acceptance: 33.4, submissions: 7654 },
      { id: 103, title: 'Sliding Window Maximum', difficulty: 'Hard', acceptance: 42.3, submissions: 2123 },
      { id: 104, title: 'Minimum Window Substring', difficulty: 'Hard', acceptance: 36.2, submissions: 1876 },
    ],
    'Binary Search': [
      { id: 105, title: 'Binary Search', difficulty: 'Easy', acceptance: 48.6, submissions: 8765 },
      { id: 106, title: 'Search Insert Position', difficulty: 'Easy', acceptance: 44.3, submissions: 5432 },
      { id: 107, title: 'Search in Rotated Array', difficulty: 'Medium', acceptance: 33.8, submissions: 5432 },
      { id: 108, title: 'Find First and Last Position', difficulty: 'Medium', acceptance: 37.1, submissions: 4321 },
    ],
    'Two Pointers': [
      { id: 109, title: 'Two Sum II', difficulty: 'Easy', acceptance: 59.3, submissions: 5432 },
      { id: 110, title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 42.1, submissions: 6543 },
      { id: 111, title: '3Sum', difficulty: 'Medium', acceptance: 33.2, submissions: 9876 },
      { id: 112, title: 'Container With Most Water', difficulty: 'Medium', acceptance: 53.6, submissions: 7654 },
    ],
    'Intervals': [
      { id: 113, title: 'Merge Intervals', difficulty: 'Medium', acceptance: 41.2, submissions: 4321 },
      { id: 114, title: 'Insert Interval', difficulty: 'Hard', acceptance: 33.7, submissions: 2345 },
      { id: 115, title: 'Video Stitching', difficulty: 'Hard', acceptance: 47.3, submissions: 1876 },
    ],
    'Stack Monotonic': [
      { id: 116, title: 'Next Greater Element', difficulty: 'Medium', acceptance: 62.1, submissions: 4321 },
      { id: 117, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', acceptance: 37.5, submissions: 2345 },
      { id: 118, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 4567 },
    ],
    'Back Tracking': [
      { id: 119, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', acceptance: 57.3, submissions: 5432 },
      { id: 120, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: 65.2, submissions: 4321 },
      { id: 121, title: 'Word Search', difficulty: 'Medium', acceptance: 36.7, submissions: 3456 },
      { id: 122, title: 'N-Queens', difficulty: 'Hard', acceptance: 33.8, submissions: 1234 },
    ],
    'Others': [
      { id: 123, title: 'Reverse Integer', difficulty: 'Easy', acceptance: 26.2, submissions: 8765 },
      { id: 124, title: 'Palindrome Number', difficulty: 'Easy', acceptance: 52.1, submissions: 6543 },
      { id: 125, title: 'Isomorphic Strings', difficulty: 'Easy', acceptance: 40.3, submissions: 5432 },
      { id: 126, title: 'Game of Life', difficulty: 'Medium', acceptance: 67.8, submissions: 3456 },
      { id: 127, title: 'Encode and Decode Strings', difficulty: 'Medium', acceptance: 28.4, submissions: 2345 },
      { id: 128, title: 'Missing Number', difficulty: 'Hard', acceptance: 73.2, submissions: 1234 },
    ],
  }

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-900 border-green-700 text-green-100'
      case 'Medium':
        return 'bg-yellow-900 border-yellow-700 text-yellow-100'
      case 'Hard':
        return 'bg-red-900 border-red-700 text-red-100'
      default:
        return 'bg-gray-700 border-gray-600 text-gray-100'
    }
  }

  const getDifficultyBadge = (difficulty: string): string => {
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

  const getProblemsForTopic = (topic: string) => {
    return problemsData[topic] || []
  }

  const getGroupedProblems = (topic: string) => {
    const problems = getProblemsForTopic(topic)
    const grouped = {
      Easy: problems.filter(p => p.difficulty === 'Easy'),
      Medium: problems.filter(p => p.difficulty === 'Medium'),
      Hard: problems.filter(p => p.difficulty === 'Hard'),
    }
    return grouped
  }

  return (
    <>
      <Navbar theme={theme} onThemeToggle={onThemeToggle} />
      <div className="min-h-screen pt-16 px-10 bg-ca-dark-bg text-ca-dark-ink">
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
              <h3 className="text-2xl font-black mb-8 text-white">{selectedTopic} Problems</h3>
              
              {/* Difficulty Sections */}
              <div className="space-y-8">
                {(['Easy', 'Medium', 'Hard'] as const).map((difficulty) => {
                  const problems = getGroupedProblems(selectedTopic)[difficulty]
                  
                  if (problems.length === 0) return null
                  
                  return (
                    <div key={difficulty}>
                      <div className={`flex items-center gap-3 mb-4 pb-3 border-b-2 ${
                        difficulty === 'Easy' ? 'border-green-700' :
                        difficulty === 'Medium' ? 'border-yellow-700' :
                        'border-red-700'
                      }`}>
                        <div className={`px-3 py-1 rounded font-bold text-sm ${getDifficultyColor(difficulty)}`}>
                          {difficulty}
                        </div>
                        <span className="text-gray-400 font-mono text-sm">{problems.length} problems</span>
                      </div>
                      
                      <div className="space-y-2">
                        {problems.map((problem) => (
                          <div
                            key={problem.id}
                            className="bg-ca-dark-white border border-ca-dark-bg2 rounded p-4 hover:border-ca-dark-gold transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 flex-1">
                                <div className={`px-2 py-1 rounded text-xs font-bold ${getDifficultyColor(difficulty)}`}>
                                  {difficulty}
                                </div>
                                <div>
                                  <h4 className="text-white font-semibold group-hover:text-ca-dark-gold transition-colors">
                                    {problem.title}
                                  </h4>
                                  <p className="text-xs text-gray-500 font-mono mt-1">
                                    ID: {problem.id}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-6">
                                <div className="text-right">
                                  <div className={`text-sm font-bold ${getDifficultyBadge(difficulty)}`}>
                                    {problem.acceptance}%
                                  </div>
                                  <div className="text-xs text-gray-500 font-mono">acceptance</div>
                                </div>
                                <div className="text-right">
                                  <div className="text-sm font-bold text-gray-300">
                                    {problem.submissions.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-gray-500 font-mono">submissions</div>
                                </div>
                                <button className="px-4 py-2 bg-ca-dark-gold hover:bg-opacity-90 text-ca-dark-bg rounded font-bold text-sm transition-all whitespace-nowrap">
                                  Solve
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* No problems message */}
              {getProblemsForTopic(selectedTopic).length === 0 && (
                <div className="space-y-3 bg-ca-dark-white border border-ca-dark-bg2 rounded p-6 text-center">
                  <p className="text-gray-500 font-mono text-sm">No problems available for {selectedTopic}</p>
                  <p className="text-gray-400 font-mono text-xs">Coming soon...</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
