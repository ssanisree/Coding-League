import Navbar from '../components/Navbar'
import { useState } from 'react'
import ProblemSolver from '../components/ProblemSolver'

interface Problem {
  id: number
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  acceptance: number
  submissions: number
}

interface ProblemData extends Problem {
  description: string
  testCases: Array<{ input: string; output: string; explanation?: string }>
  starterCode: string
}

interface TopicProblems {
  [key: string]: Problem[]
}

export default function DSA({ theme, onThemeToggle }: { theme: 'light' | 'dark'; onThemeToggle: () => void }) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [selectedDifficulties, setSelectedDifficulties] = useState<Set<'Easy' | 'Medium' | 'Hard'>>(new Set(['Easy', 'Medium', 'Hard']))
  const [selectedProblem, setSelectedProblem] = useState<ProblemData | null>(null)
  const [solvedProblems, setSolvedProblems] = useState<Set<number>>(new Set())

  const toggleDifficulty = (difficulty: 'Easy' | 'Medium' | 'Hard') => {
    const newDifficulties = new Set(selectedDifficulties)
    if (newDifficulties.has(difficulty)) {
      newDifficulties.delete(difficulty)
    } else {
      newDifficulties.add(difficulty)
    }
    setSelectedDifficulties(newDifficulties)
  }

  const handleProblemSolved = (problemId: number) => {
    setSolvedProblems(prev => new Set([...prev, problemId]))
  }

  // Problem details with descriptions, test cases and starter code
  const problemDetails: { [key: number]: Omit<ProblemData, 'id'> } = {
    1: {
      title: 'Two Sum',
      difficulty: 'Easy',
      acceptance: 47.8,
      submissions: 15234,
      description: 'Given an array of integers nums and an integer target, return the indices of the two numbers that add up to target. You may assume each input has exactly one solution, and you cannot use the same element twice.',
      testCases: [
        { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'The numbers at index 0 and 1 (2 and 7) add up to 9.' },
        { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: 'The numbers at index 1 and 2 (2 and 4) add up to 6.' },
        { input: 'nums = [3,3], target = 6', output: '[0,1]' },
      ],
      starterCode: `def twoSum(nums, target):\n    # Write your solution here\n    pass`
    },
    2: {
      title: 'Best Time to Buy and Sell Stock',
      difficulty: 'Easy',
      acceptance: 52.3,
      submissions: 12450,
      description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction.',
      testCases: [
        { input: 'prices = [7,1,5,3,6,4]', output: '5', explanation: 'Buy on day 2 (price = 1) and sell on day 5 (price = 6). Profit = 6 - 1 = 5.' },
        { input: 'prices = [7,6,4,3,1]', output: '0', explanation: 'No profit can be made, so the maximum profit is 0.' },
      ],
      starterCode: `def maxProfit(prices):\n    # Write your solution here\n    pass`
    },
    3: {
      title: 'Contains Duplicate',
      difficulty: 'Easy',
      acceptance: 61.5,
      submissions: 8934,
      description: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
      testCases: [
        { input: 'nums = [1,2,3,1]', output: 'true', explanation: 'Element 1 appears at index 0 and 2.' },
        { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'All elements are distinct.' },
        { input: 'nums = [99,99]', output: 'true' },
      ],
      starterCode: `def containsDuplicate(nums):\n    # Write your solution here\n    pass`
    },
  }

  const getProblemDetail = (id: number, title: string, difficulty: 'Easy' | 'Medium' | 'Hard', acceptance: number, submissions: number): ProblemData => {
    const detail = problemDetails[id]
    if (detail) {
      return { id, ...detail }
    }
    // Return default if not found
    return {
      id,
      title,
      difficulty,
      acceptance,
      submissions,
      description: 'Problem description coming soon...',
      testCases: [
        { input: 'Example 1', output: 'Output 1' },
        { input: 'Example 2', output: 'Output 2' },
      ],
      starterCode: `def solution(input):\n    # Write your solution here\n    pass`
    }
  }

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
      { id: 4, title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 67.2, submissions: 7234 },
      { id: 5, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', acceptance: 53.4, submissions: 6543 },
      { id: 6, title: 'Move Zeroes', difficulty: 'Easy', acceptance: 59.8, submissions: 5432 },
      { id: 7, title: '3Sum', difficulty: 'Medium', acceptance: 33.2, submissions: 9876 },
      { id: 8, title: 'Product of Array Except Self', difficulty: 'Medium', acceptance: 65.4, submissions: 6234 },
      { id: 9, title: 'Maximum Subarray', difficulty: 'Medium', acceptance: 48.7, submissions: 7123 },
      { id: 10, title: 'Search in Rotated Sorted Array', difficulty: 'Medium', acceptance: 51.2, submissions: 5432 },
      { id: 11, title: 'Container With Most Water', difficulty: 'Medium', acceptance: 53.6, submissions: 7654 },
      { id: 12, title: 'Next Permutation', difficulty: 'Medium', acceptance: 38.4, submissions: 4321 },
      { id: 13, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 4567 },
      { id: 14, title: 'First Missing Positive', difficulty: 'Hard', acceptance: 41.2, submissions: 3456 },
      { id: 15, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 27.6, submissions: 1234 },
    ],
    'Strings': [
      { id: 16, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.2, submissions: 11234 },
      { id: 17, title: 'Reverse String', difficulty: 'Easy', acceptance: 79.8, submissions: 9234 },
      { id: 18, title: 'Remove Vowels from String', difficulty: 'Easy', acceptance: 84.5, submissions: 6543 },
      { id: 19, title: 'First Unique Character in String', difficulty: 'Easy', acceptance: 58.3, submissions: 5432 },
      { id: 20, title: 'Return Keyword in Sorted Order', difficulty: 'Easy', acceptance: 62.1, submissions: 4321 },
      { id: 21, title: 'Longest Palindromic Substring', difficulty: 'Medium', acceptance: 35.8, submissions: 8765 },
      { id: 22, title: 'Longest Substring Without Repeating', difficulty: 'Medium', acceptance: 33.4, submissions: 7654 },
      { id: 23, title: 'Group Anagrams', difficulty: 'Medium', acceptance: 53.4, submissions: 5123 },
      { id: 24, title: 'Encode and Decode Strings', difficulty: 'Medium', acceptance: 28.4, submissions: 2345 },
      { id: 25, title: 'Word Pattern', difficulty: 'Medium', acceptance: 42.1, submissions: 3456 },
      { id: 26, title: 'Edit Distance', difficulty: 'Hard', acceptance: 48.3, submissions: 4321 },
      { id: 27, title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 27.3, submissions: 2345 },
      { id: 28, title: 'Minimum Window Substring', difficulty: 'Hard', acceptance: 36.2, submissions: 1876 },
    ],
    'Linked Lists': [
      { id: 29, title: 'Reverse Linked List', difficulty: 'Easy', acceptance: 63.4, submissions: 7654 },
      { id: 30, title: 'Palindrome Linked List', difficulty: 'Easy', acceptance: 44.2, submissions: 5432 },
      { id: 31, title: 'Merge Two Sorted Lists', difficulty: 'Easy', acceptance: 64.8, submissions: 6234 },
      { id: 32, title: 'Middle of the Linked List', difficulty: 'Easy', acceptance: 76.3, submissions: 4321 },
      { id: 33, title: 'Linked List Cycle', difficulty: 'Medium', acceptance: 45.7, submissions: 5432 },
      { id: 34, title: 'Add Two Numbers', difficulty: 'Medium', acceptance: 32.8, submissions: 4321 },
      { id: 35, title: 'Reorder List', difficulty: 'Medium', acceptance: 52.4, submissions: 3456 },
      { id: 36, title: 'Intersection of Two Linked Lists', difficulty: 'Medium', acceptance: 56.7, submissions: 2345 },
      { id: 37, title: 'Merge k Sorted Lists', difficulty: 'Hard', acceptance: 41.8, submissions: 3123 },
      { id: 38, title: 'LRU Cache', difficulty: 'Hard', acceptance: 35.4, submissions: 2876 },
      { id: 39, title: 'Copy List with Random Pointer', difficulty: 'Hard', acceptance: 48.2, submissions: 1876 },
    ],
    'Stacks': [
      { id: 40, title: 'Implement Stack', difficulty: 'Easy', acceptance: 72.3, submissions: 4321 },
      { id: 41, title: 'Min Stack', difficulty: 'Easy', acceptance: 58.1, submissions: 5876 },
      { id: 42, title: 'Valid Parentheses', difficulty: 'Easy', acceptance: 40.2, submissions: 11234 },
      { id: 43, title: 'Remove Outermost Parentheses', difficulty: 'Easy', acceptance: 77.8, submissions: 3234 },
      { id: 44, title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', acceptance: 36.9, submissions: 3456 },
      { id: 45, title: 'Basic Calculator II', difficulty: 'Medium', acceptance: 41.2, submissions: 2345 },
      { id: 46, title: 'Decode String', difficulty: 'Medium', acceptance: 55.3, submissions: 4321 },
      { id: 47, title: 'Next Greater Element', difficulty: 'Medium', acceptance: 62.1, submissions: 4321 },
      { id: 48, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', acceptance: 37.5, submissions: 2345 },
      { id: 49, title: 'Trapping Rain Water II', difficulty: 'Hard', acceptance: 41.2, submissions: 1876 },
      { id: 50, title: 'Maximal Rectangle', difficulty: 'Hard', acceptance: 37.2, submissions: 1234 },
    ],
    'Queues': [
      { id: 51, title: 'Implement Queue', difficulty: 'Easy', acceptance: 68.5, submissions: 3234 },
      { id: 52, title: 'Number of Recent Calls', difficulty: 'Easy', acceptance: 78.2, submissions: 2345 },
      { id: 53, title: 'Moving Average from Data Stream', difficulty: 'Easy', acceptance: 71.4, submissions: 3456 },
      { id: 54, title: 'Dota2 Senate', difficulty: 'Medium', acceptance: 42.3, submissions: 2123 },
      { id: 55, title: 'Task Scheduler', difficulty: 'Medium', acceptance: 43.6, submissions: 3456 },
      { id: 56, title: 'Design Circular Queue', difficulty: 'Medium', acceptance: 52.1, submissions: 2876 },
      { id: 57, title: 'Reveal Cards in Increasing Order', difficulty: 'Medium', acceptance: 54.8, submissions: 1876 },
      { id: 58, title: 'Sliding Window Maximum', difficulty: 'Hard', acceptance: 42.3, submissions: 2123 },
      { id: 59, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 27.6, submissions: 1234 },
      { id: 60, title: 'Jump Game II', difficulty: 'Hard', acceptance: 37.3, submissions: 1567 },
    ],
    'Trees': [
      { id: 61, title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', acceptance: 74.1, submissions: 8765 },
      { id: 62, title: 'Invert Binary Tree', difficulty: 'Easy', acceptance: 72.3, submissions: 7654 },
      { id: 63, title: 'Symmetric Tree', difficulty: 'Easy', acceptance: 56.4, submissions: 6543 },
      { id: 64, title: 'Subtree of Another Tree', difficulty: 'Easy', acceptance: 45.6, submissions: 5432 },
      { id: 65, title: 'Same Tree', difficulty: 'Easy', acceptance: 61.2, submissions: 4321 },
      { id: 66, title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', acceptance: 58.4, submissions: 4567 },
      { id: 67, title: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium', acceptance: 48.2, submissions: 3456 },
      { id: 68, title: 'Lowest Common Ancestor', difficulty: 'Medium', acceptance: 57.3, submissions: 4321 },
      { id: 69, title: 'Path Sum', difficulty: 'Medium', acceptance: 42.3, submissions: 3876 },
      { id: 70, title: 'Kth Smallest Element in BST', difficulty: 'Medium', acceptance: 72.8, submissions: 2345 },
      { id: 71, title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', acceptance: 48.2, submissions: 2345 },
      { id: 72, title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', acceptance: 38.7, submissions: 2345 },
      { id: 73, title: 'Construct Binary Tree from Preorder and Inorder', difficulty: 'Hard', acceptance: 51.4, submissions: 1876 },
    ],
    'Graphs': [
      { id: 74, title: 'Number of Islands', difficulty: 'Medium', acceptance: 56.2, submissions: 8765 },
      { id: 75, title: 'Clone Graph', difficulty: 'Medium', acceptance: 42.3, submissions: 3456 },
      { id: 76, title: 'Course Schedule', difficulty: 'Medium', acceptance: 48.9, submissions: 4321 },
      { id: 77, title: 'Evaluate Division', difficulty: 'Medium', acceptance: 56.7, submissions: 2876 },
      { id: 78, title: 'Reconstruct Itinerary', difficulty: 'Medium', acceptance: 37.8, submissions: 1234 },
      { id: 79, title: 'Time Needed to Inform All Employees', difficulty: 'Medium', acceptance: 63.4, submissions: 2345 },
      { id: 80, title: 'Accounts Merge', difficulty: 'Medium', acceptance: 46.8, submissions: 3456 },
      { id: 81, title: 'Alien Dictionary', difficulty: 'Hard', acceptance: 35.8, submissions: 1234 },
      { id: 82, title: 'Network Delay Time', difficulty: 'Hard', acceptance: 43.5, submissions: 2876 },
      { id: 83, title: 'Word Ladder II', difficulty: 'Hard', acceptance: 29.6, submissions: 1234 },
      { id: 84, title: 'Critical Connections in Network', difficulty: 'Hard', acceptance: 52.3, submissions: 876 },
    ],
    'Heaps': [
      { id: 85, title: 'Last Stone Weight', difficulty: 'Easy', acceptance: 61.2, submissions: 3456 },
      { id: 86, title: 'Relative Ranks', difficulty: 'Easy', acceptance: 68.4, submissions: 2345 },
      { id: 87, title: 'Assign Cookies', difficulty: 'Easy', acceptance: 65.2, submissions: 3456 },
      { id: 88, title: 'Kth Largest Element in Array', difficulty: 'Medium', acceptance: 61.2, submissions: 4321 },
      { id: 89, title: 'Top K Frequent Elements', difficulty: 'Medium', acceptance: 68.4, submissions: 5678 },
      { id: 90, title: 'Rearrange String k Distance Apart', difficulty: 'Medium', acceptance: 48.3, submissions: 1876 },
      { id: 91, title: 'K Closest Points to Origin', difficulty: 'Medium', acceptance: 72.1, submissions: 3456 },
      { id: 92, title: 'Find Median from Data Stream', difficulty: 'Hard', acceptance: 38.9, submissions: 2123 },
      { id: 93, title: 'Merge K Sorted Lists', difficulty: 'Hard', acceptance: 41.8, submissions: 1876 },
      { id: 94, title: 'IPO', difficulty: 'Hard', acceptance: 51.2, submissions: 876 },
    ],
    'Hash Tables': [
      { id: 95, title: 'Valid Anagram', difficulty: 'Easy', acceptance: 62.3, submissions: 7234 },
      { id: 96, title: 'Majority Element', difficulty: 'Easy', acceptance: 64.8, submissions: 6543 },
      { id: 97, title: 'HappyNumber', difficulty: 'Easy', acceptance: 58.4, submissions: 4321 },
      { id: 98, title: 'Contains Duplicate', difficulty: 'Easy', acceptance: 61.5, submissions: 8934 },
      { id: 99, title: 'Two Sum', difficulty: 'Easy', acceptance: 47.8, submissions: 15234 },
      { id: 100, title: 'Group Anagrams', difficulty: 'Medium', acceptance: 53.4, submissions: 5123 },
      { id: 101, title: 'Logger Rate Limiter', difficulty: 'Medium', acceptance: 67.8, submissions: 2345 },
      { id: 102, title: 'Design HashSet', difficulty: 'Medium', acceptance: 71.4, submissions: 2345 },
      { id: 103, title: 'LRU Cache', difficulty: 'Hard', acceptance: 35.4, submissions: 2876 },
      { id: 104, title: 'Word Ladder II', difficulty: 'Hard', acceptance: 29.6, submissions: 1234 },
    ],
    'Dynamic Programming': [
      { id: 105, title: 'Climbing Stairs', difficulty: 'Easy', acceptance: 53.1, submissions: 9876 },
      { id: 106, title: 'Fibonacci Number', difficulty: 'Easy', acceptance: 68.5, submissions: 7654 },
      { id: 107, title: 'Min Cost Climbing Stairs', difficulty: 'Easy', acceptance: 62.1, submissions: 5432 },
      { id: 108, title: 'House Robber', difficulty: 'Medium', acceptance: 45.3, submissions: 6234 },
      { id: 109, title: 'Coin Change', difficulty: 'Medium', acceptance: 38.7, submissions: 5432 },
      { id: 110, title: 'Best Time to Buy and Sell Stock', difficulty: 'Medium', acceptance: 51.2, submissions: 6543 },
      { id: 111, title: 'Triangle', difficulty: 'Medium', acceptance: 54.8, submissions: 3456 },
      { id: 112, title: 'Jump Game', difficulty: 'Medium', acceptance: 36.4, submissions: 5432 },
      { id: 113, title: 'Longest Increasing Subsequence', difficulty: 'Hard', acceptance: 47.2, submissions: 2345 },
      { id: 114, title: 'Regular Expression Matching', difficulty: 'Hard', acceptance: 27.8, submissions: 1234 },
      { id: 115, title: 'Interleaving String', difficulty: 'Hard', acceptance: 37.5, submissions: 876 },
    ],
    'Recursion': [
      { id: 116, title: 'Factorial', difficulty: 'Easy', acceptance: 85.3, submissions: 6234 },
      { id: 117, title: 'Fibonacci Sequence', difficulty: 'Easy', acceptance: 68.9, submissions: 5432 },
      { id: 118, title: 'Reverse String', difficulty: 'Easy', acceptance: 79.8, submissions: 9234 },
      { id: 119, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: 65.2, submissions: 4321 },
      { id: 120, title: 'Permutations', difficulty: 'Medium', acceptance: 71.4, submissions: 3876 },
      { id: 121, title: 'Subsets', difficulty: 'Medium', acceptance: 78.4, submissions: 4321 },
      { id: 122, title: 'Combinations', difficulty: 'Medium', acceptance: 69.3, submissions: 2345 },
      { id: 123, title: 'N-Queens', difficulty: 'Hard', acceptance: 33.8, submissions: 1234 },
      { id: 124, title: 'Wildcard Matching', difficulty: 'Hard', acceptance: 26.5, submissions: 876 },
      { id: 125, title: 'Sudoku Solver', difficulty: 'Hard', acceptance: 48.2, submissions: 1234 },
    ],
    'Sorting': [
      { id: 126, title: 'Merge Sorted Array', difficulty: 'Easy', acceptance: 51.2, submissions: 7654 },
      { id: 127, title: 'Relative Sort Array', difficulty: 'Easy', acceptance: 77.3, submissions: 2345 },
      { id: 128, title: 'Sort Array By Parity', difficulty: 'Easy', acceptance: 82.1, submissions: 3456 },
      { id: 129, title: 'Sort Colors', difficulty: 'Medium', acceptance: 57.8, submissions: 6543 },
      { id: 130, title: 'Kth Largest Element', difficulty: 'Medium', acceptance: 64.3, submissions: 5432 },
      { id: 131, title: 'Merge Intervals', difficulty: 'Medium', acceptance: 41.2, submissions: 4321 },
      { id: 132, title: 'Top K Frequent Elements', difficulty: 'Medium', acceptance: 68.4, submissions: 5678 },
      { id: 133, title: 'Largest Number', difficulty: 'Hard', acceptance: 29.8, submissions: 1234 },
      { id: 134, title: 'Sliding Window Median', difficulty: 'Hard', acceptance: 31.2, submissions: 876 },
      { id: 135, title: 'Count of Smaller Numbers After Self', difficulty: 'Hard', acceptance: 35.4, submissions: 1234 },
    ],
    'Searching': [
      { id: 136, title: 'Binary Search', difficulty: 'Easy', acceptance: 48.6, submissions: 8765 },
      { id: 137, title: 'First Bad Version', difficulty: 'Easy', acceptance: 38.2, submissions: 6234 },
      { id: 138, title: 'Valid Perfect Square', difficulty: 'Easy', acceptance: 43.7, submissions: 4321 },
      { id: 139, title: 'Search in Rotated Array', difficulty: 'Medium', acceptance: 33.8, submissions: 5432 },
      { id: 140, title: 'Find First and Last Position', difficulty: 'Medium', acceptance: 37.1, submissions: 4321 },
      { id: 141, title: 'Guess Number Higher or Lower', difficulty: 'Medium', acceptance: 56.2, submissions: 3456 },
      { id: 142, title: 'Find Peak Element', difficulty: 'Medium', acceptance: 48.9, submissions: 2876 },
      { id: 143, title: 'Search a 2D Matrix II', difficulty: 'Hard', acceptance: 42.3, submissions: 2345 },
      { id: 144, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', acceptance: 27.6, submissions: 1234 },
      { id: 145, title: 'Find K Closest Elements', difficulty: 'Hard', acceptance: 51.3, submissions: 876 },
    ],
    'Bit Manipulation': [
      { id: 146, title: 'Number of 1 Bits', difficulty: 'Easy', acceptance: 63.2, submissions: 5432 },
      { id: 147, title: 'Single Number', difficulty: 'Easy', acceptance: 68.4, submissions: 6543 },
      { id: 148, title: 'Hamming Distance', difficulty: 'Easy', acceptance: 80.3, submissions: 4321 },
      { id: 149, title: 'Power of Four', difficulty: 'Easy', acceptance: 52.1, submissions: 3456 },
      { id: 150, title: 'Sum of Two Integers', difficulty: 'Medium', acceptance: 48.7, submissions: 3456 },
      { id: 151, title: 'Bitwise AND of Number Range', difficulty: 'Medium', acceptance: 42.3, submissions: 2345 },
      { id: 152, title: 'Number of 1 Bits II', difficulty: 'Medium', acceptance: 71.2, submissions: 1876 },
      { id: 153, title: 'N-Queens II', difficulty: 'Hard', acceptance: 35.8, submissions: 1234 },
      { id: 154, title: 'Max Points on Line', difficulty: 'Hard', acceptance: 21.5, submissions: 876 },
      { id: 155, title: 'Maximum XOR of Two Numbers in Array', difficulty: 'Hard', acceptance: 44.8, submissions: 1234 },
    ],
    'Greedy': [
      { id: 156, title: 'Lemonade Change', difficulty: 'Easy', acceptance: 52.3, submissions: 4321 },
      { id: 157, title: 'Assign Cookies', difficulty: 'Easy', acceptance: 65.2, submissions: 3456 },
      { id: 158, title: 'Can Place Flowers', difficulty: 'Easy', acceptance: 45.6, submissions: 5432 },
      { id: 159, title: 'Jump Game', difficulty: 'Medium', acceptance: 36.4, submissions: 5432 },
      { id: 160, title: 'Gas Station', difficulty: 'Medium', acceptance: 48.1, submissions: 3876 },
      { id: 161, title: 'Queue Reconstruction by Height', difficulty: 'Medium', acceptance: 59.3, submissions: 2345 },
      { id: 162, title: 'Interval Scheduling', difficulty: 'Medium', acceptance: 61.2, submissions: 2345 },
      { id: 163, title: 'Candy', difficulty: 'Hard', acceptance: 35.2, submissions: 1234 },
      { id: 164, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 1876 },
      { id: 165, title: 'Create Maximum Number', difficulty: 'Hard', acceptance: 32.4, submissions: 876 },
    ],
    'Matrix': [
      { id: 166, title: 'Rotate Image', difficulty: 'Medium', acceptance: 58.2, submissions: 5432 },
      { id: 167, title: 'Set Matrix Zeroes', difficulty: 'Medium', acceptance: 42.1, submissions: 4321 },
      { id: 168, title: 'Spiral Matrix', difficulty: 'Medium', acceptance: 44.8, submissions: 3876 },
      { id: 169, title: 'Word Search', difficulty: 'Medium', acceptance: 36.7, submissions: 3456 },
      { id: 170, title: 'Surrounded Regions', difficulty: 'Medium', acceptance: 31.2, submissions: 2345 },
      { id: 171, title: 'Number of Islands', difficulty: 'Medium', acceptance: 56.2, submissions: 8765 },
      { id: 172, title: 'Maximal Rectangle', difficulty: 'Hard', acceptance: 37.2, submissions: 1234 },
      { id: 173, title: 'Dungeon Game', difficulty: 'Hard', acceptance: 39.8, submissions: 1876 },
      { id: 174, title: 'Search a 2D Matrix II', difficulty: 'Hard', acceptance: 42.3, submissions: 2345 },
    ],
    'Tries': [
      { id: 175, title: 'Implement Trie', difficulty: 'Medium', acceptance: 71.2, submissions: 4321 },
      { id: 176, title: 'Add and Search Word', difficulty: 'Medium', acceptance: 44.3, submissions: 3456 },
      { id: 177, title: 'Design Search Autocomplete System', difficulty: 'Medium', acceptance: 52.1, submissions: 1876 },
      { id: 178, title: 'Longest Word in Dictionary', difficulty: 'Medium', acceptance: 61.4, submissions: 1876 },
      { id: 179, title: 'Word Search II', difficulty: 'Hard', acceptance: 27.9, submissions: 1234 },
      { id: 180, title: 'Concatenated Words', difficulty: 'Hard', acceptance: 34.5, submissions: 876 },
      { id: 181, title: 'Prefix and Suffix Search', difficulty: 'Hard', acceptance: 41.2, submissions: 1234 },
    ],
    'Union Find': [
      { id: 182, title: 'Number of Islands', difficulty: 'Medium', acceptance: 56.2, submissions: 8765 },
      { id: 183, title: 'Accounts Merge', difficulty: 'Medium', acceptance: 46.8, submissions: 3456 },
      { id: 184, title: 'Redundant Connection', difficulty: 'Medium', acceptance: 63.1, submissions: 2345 },
      { id: 185, title: 'Graph Valid Tree', difficulty: 'Medium', acceptance: 51.3, submissions: 1876 },
      { id: 186, title: 'The Earliest Moment When Everyone Become Friends', difficulty: 'Medium', acceptance: 68.9, submissions: 876 },
      { id: 187, title: 'Smallest String With Swaps', difficulty: 'Hard', acceptance: 48.3, submissions: 1234 },
      { id: 188, title: 'Satisfiability of Equality Equations', difficulty: 'Hard', acceptance: 64.2, submissions: 1876 },
    ],
    'Sliding Window': [
      { id: 189, title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 42.1, submissions: 6543 },
      { id: 190, title: 'Max Consecutive Ones', difficulty: 'Easy', acceptance: 73.4, submissions: 4321 },
      { id: 191, title: 'Longest Substring Without Repeating', difficulty: 'Medium', acceptance: 33.4, submissions: 7654 },
      { id: 192, title: 'Longest Substring with At Most Two Distinct Characters', difficulty: 'Medium', acceptance: 48.3, submissions: 2345 },
      { id: 193, title: 'Permutation in String', difficulty: 'Medium', acceptance: 52.1, submissions: 3456 },
      { id: 194, title: 'Sliding Window Maximum', difficulty: 'Hard', acceptance: 42.3, submissions: 2123 },
      { id: 195, title: 'Minimum Window Substring', difficulty: 'Hard', acceptance: 36.2, submissions: 1876 },
      { id: 196, title: 'Subarrays with K Different Integers', difficulty: 'Hard', acceptance: 43.2, submissions: 1234 },
    ],
    'Binary Search': [
      { id: 197, title: 'Binary Search', difficulty: 'Easy', acceptance: 48.6, submissions: 8765 },
      { id: 198, title: 'Search Insert Position', difficulty: 'Easy', acceptance: 44.3, submissions: 5432 },
      { id: 199, title: 'Valid Perfect Square', difficulty: 'Easy', acceptance: 43.7, submissions: 4321 },
      { id: 200, title: 'Search in Rotated Array', difficulty: 'Medium', acceptance: 33.8, submissions: 5432 },
      { id: 201, title: 'Find First and Last Position', difficulty: 'Medium', acceptance: 37.1, submissions: 4321 },
      { id: 202, title: 'Find Peak Element', difficulty: 'Medium', acceptance: 48.9, submissions: 2876 },
      { id: 203, title: 'Search in Rotated Sorted Array II', difficulty: 'Medium', acceptance: 32.1, submissions: 1876 },
    ],
    'Two Pointers': [
      { id: 204, title: 'Two Sum II', difficulty: 'Easy', acceptance: 59.3, submissions: 5432 },
      { id: 205, title: 'Valid Palindrome', difficulty: 'Easy', acceptance: 42.1, submissions: 6543 },
      { id: 206, title: 'Merge Sorted Array', difficulty: 'Easy', acceptance: 51.2, submissions: 7654 },
      { id: 207, title: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', acceptance: 53.4, submissions: 6543 },
      { id: 208, title: '3Sum', difficulty: 'Medium', acceptance: 33.2, submissions: 9876 },
      { id: 209, title: 'Container With Most Water', difficulty: 'Medium', acceptance: 53.6, submissions: 7654 },
      { id: 210, title: '4Sum', difficulty: 'Medium', acceptance: 35.8, submissions: 4321 },
    ],
    'Intervals': [
      { id: 211, title: 'Merge Intervals', difficulty: 'Medium', acceptance: 41.2, submissions: 4321 },
      { id: 212, title: 'Insert Interval', difficulty: 'Medium', acceptance: 33.7, submissions: 2345 },
      { id: 213, title: 'Meeting Rooms', difficulty: 'Medium', acceptance: 61.2, submissions: 2345 },
      { id: 214, title: 'Non-overlapping Intervals', difficulty: 'Medium', acceptance: 44.8, submissions: 3456 },
      { id: 215, title: 'Video Stitching', difficulty: 'Hard', acceptance: 47.3, submissions: 1876 },
      { id: 216, title: 'Maximum CPU Load', difficulty: 'Hard', acceptance: 42.1, submissions: 876 },
    ],
    'Stack Monotonic': [
      { id: 217, title: 'Next Greater Element', difficulty: 'Medium', acceptance: 62.1, submissions: 4321 },
      { id: 218, title: 'Daily Temperatures', difficulty: 'Medium', acceptance: 68.4, submissions: 5678 },
      { id: 219, title: 'Next Greater Element II', difficulty: 'Medium', acceptance: 61.2, submissions: 3456 },
      { id: 220, title: 'Largest Rectangle in Histogram', difficulty: 'Hard', acceptance: 37.5, submissions: 2345 },
      { id: 221, title: 'Trapping Rain Water', difficulty: 'Hard', acceptance: 52.1, submissions: 4567 },
      { id: 222, title: 'Maximal Rectangle', difficulty: 'Hard', acceptance: 37.2, submissions: 1234 },
    ],
    'Back Tracking': [
      { id: 223, title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', acceptance: 57.3, submissions: 5432 },
      { id: 224, title: 'Generate Parentheses', difficulty: 'Medium', acceptance: 65.2, submissions: 4321 },
      { id: 225, title: 'Word Search', difficulty: 'Medium', acceptance: 36.7, submissions: 3456 },
      { id: 226, title: 'Permutations', difficulty: 'Medium', acceptance: 71.4, submissions: 3876 },
      { id: 227, title: 'N-Queens', difficulty: 'Hard', acceptance: 33.8, submissions: 1234 },
      { id: 228, title: 'N-Queens II', difficulty: 'Hard', acceptance: 35.8, submissions: 1234 },
      { id: 229, title: 'Word Search II', difficulty: 'Hard', acceptance: 27.9, submissions: 1234 },
    ],
    'Others': [
      { id: 230, title: 'Reverse Integer', difficulty: 'Easy', acceptance: 26.2, submissions: 8765 },
      { id: 231, title: 'Palindrome Number', difficulty: 'Easy', acceptance: 52.1, submissions: 6543 },
      { id: 232, title: 'Isomorphic Strings', difficulty: 'Easy', acceptance: 40.3, submissions: 5432 },
      { id: 233, title: 'Power of Two', difficulty: 'Easy', acceptance: 48.3, submissions: 4321 },
      { id: 234, title: 'Excel Sheet Column Title', difficulty: 'Easy', acceptance: 32.4, submissions: 3456 },
      { id: 235, title: 'Game of Life', difficulty: 'Medium', acceptance: 67.8, submissions: 3456 },
      { id: 236, title: 'Encode and Decode Strings', difficulty: 'Medium', acceptance: 28.4, submissions: 2345 },
      { id: 237, title: 'Majority Element II', difficulty: 'Medium', acceptance: 38.7, submissions: 1876 },
      { id: 238, title: 'Missing Number', difficulty: 'Hard', acceptance: 73.2, submissions: 1234 },
      { id: 239, title: 'Skyline Problem', difficulty: 'Hard', acceptance: 35.4, submissions: 876 },
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
    const filtered = problems.filter(p => selectedDifficulties.has(p.difficulty))
    const grouped = {
      Easy: filtered.filter(p => p.difficulty === 'Easy'),
      Medium: filtered.filter(p => p.difficulty === 'Medium'),
      Hard: filtered.filter(p => p.difficulty === 'Hard'),
    }
    return grouped
  }

  // Code examples for each topic
  const codeExamples: { [key: string]: JSX.Element } = {
    'Arrays': (
      <div className="font-mono text-xs leading-relaxed text-gray-300">
        <div><span className="text-purple-400">def</span> <span className="text-blue-400">twoSum</span>(<span className="text-yellow-400">nums</span>, <span className="text-yellow-400">target</span>):</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">seen</span> = {'{}'}</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">for</span> <span className="text-yellow-400">i</span>, <span className="text-yellow-400">num</span> <span className="text-purple-400">in</span> <span className="text-blue-400">enumerate</span>(<span className="text-yellow-400">nums</span>):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">complement</span> = <span className="text-yellow-400">target</span> - <span className="text-yellow-400">num</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> <span className="text-yellow-400">complement</span> <span className="text-purple-400">in</span> <span className="text-yellow-400">seen</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> [<span className="text-yellow-400">seen</span>[<span className="text-yellow-400">complement</span>], <span className="text-yellow-400">i</span>]</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">seen</span>[<span className="text-yellow-400">num</span>] = <span className="text-yellow-400">i</span></div>
      </div>
    ),
    'Strings': (
      <div className="font-mono text-xs leading-relaxed text-gray-300">
        <div><span className="text-purple-400">def</span> <span className="text-blue-400">isPalindrome</span>(<span className="text-yellow-400">s</span>):</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">left</span>, <span className="text-yellow-400">right</span> = 0, <span className="text-cyan-400">len</span>(<span className="text-yellow-400">s</span>) - 1</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">while</span> <span className="text-yellow-400">left</span> &lt; <span className="text-yellow-400">right</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> <span className="text-yellow-400">s</span>[<span className="text-yellow-400">left</span>] != <span className="text-yellow-400">s</span>[<span className="text-yellow-400">right</span>]:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-green-400">False</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">left</span> += 1</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">right</span> -= 1</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-green-400">True</span></div>
      </div>
    ),
    'Linked Lists': (
      <div className="font-mono text-xs leading-relaxed text-gray-300">
        <div><span className="text-purple-400">def</span> <span className="text-blue-400">reverseList</span>(<span className="text-yellow-400">head</span>):</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">prev</span> = <span className="text-cyan-400">None</span></div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">curr</span> = <span className="text-yellow-400">head</span></div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">while</span> <span className="text-yellow-400">curr</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">next_temp</span> = <span className="text-yellow-400">curr</span>.next</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">curr</span>.next = <span className="text-yellow-400">prev</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">prev</span> = <span className="text-yellow-400">curr</span></div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">curr</span> = <span className="text-yellow-400">next_temp</span></div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-yellow-400">prev</span></div>
      </div>
    ),
    'Trees': (
      <div className="font-mono text-xs leading-relaxed text-gray-300">
        <div><span className="text-purple-400">def</span> <span className="text-blue-400">maxDepth</span>(<span className="text-yellow-400">root</span>):</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">if</span> <span className="text-purple-400">not</span> <span className="text-yellow-400">root</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> 0</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">left</span> = <span className="text-blue-400">maxDepth</span>(<span className="text-yellow-400">root</span>.left)</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">right</span> = <span className="text-blue-400">maxDepth</span>(<span className="text-yellow-400">root</span>.right)</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> 1 + <span className="text-cyan-400">max</span>(<span className="text-yellow-400">left</span>, <span className="text-yellow-400">right</span>)</div>
      </div>
    ),
    'Graphs': (
      <div className="font-mono text-xs leading-relaxed text-gray-300">
        <div><span className="text-purple-400">def</span> <span className="text-blue-400">numIslands</span>(<span className="text-yellow-400">grid</span>):</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">if</span> <span className="text-purple-400">not</span> <span className="text-yellow-400">grid</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> 0</div>
        <div>&nbsp;&nbsp;<span className="text-yellow-400">count</span> = 0</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">for</span> <span className="text-yellow-400">i</span> <span className="text-purple-400">in</span> <span className="text-cyan-404">range</span>(<span className="text-cyan-404">len</span>(<span className="text-yellow-400">grid</span>)):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">for</span> <span className="text-yellow-400">j</span> <span className="text-purple-400">in</span> <span className="text-cyan-404">range</span>(<span className="text-cyan-404">len</span>(<span className="text-yellow-400">grid</span>[0])):</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">if</span> <span className="text-yellow-400">grid</span>[<span className="text-yellow-400">i</span>][<span className="text-yellow-400">j</span>] == <span className="text-green-400">'1'</span>:</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">dfs</span>(<span className="text-yellow-400">grid</span>, <span className="text-yellow-400">i</span>, <span className="text-yellow-400">j</span>)</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">count</span> += 1</div>
        <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-yellow-400">count</span></div>
      </div>
    ),
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
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-black text-white">{selectedTopic} Problems</h3>
                
                {/* Difficulty Filter */}
                <div className="flex gap-3">
                  {(['Easy', 'Medium', 'Hard'] as const).map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => toggleDifficulty(difficulty)}
                      className={`px-4 py-2 rounded font-bold text-sm transition-all border-2 ${
                        selectedDifficulties.has(difficulty)
                          ? difficulty === 'Easy'
                            ? 'bg-green-900 border-green-700 text-green-100'
                            : difficulty === 'Medium'
                            ? 'bg-yellow-900 border-yellow-700 text-yellow-100'
                            : 'bg-red-900 border-red-700 text-red-100'
                          : 'bg-gray-800 border-gray-700 text-gray-400 opacity-50'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
              
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
                                <button 
                                  onClick={() => {
                                    if (!solvedProblems.has(problem.id)) {
                                      setSelectedProblem(getProblemDetail(problem.id, problem.title, problem.difficulty, problem.acceptance, problem.submissions))
                                    }
                                  }}
                                  className={`px-4 py-2 rounded font-bold text-sm transition-all whitespace-nowrap ${
                                    solvedProblems.has(problem.id)
                                      ? 'bg-green-600 hover:bg-green-700 text-white cursor-default'
                                      : 'bg-ca-dark-gold hover:bg-opacity-90 text-ca-dark-bg'
                                  }`}
                                >
                                  {solvedProblems.has(problem.id) ? '✓ Solved' : 'Solve'}
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

              {/* Code Example Section */}
              <div className="mt-16 pt-8 border-t border-dashed border-gray-700">
                <h4 className="text-lg font-black mb-4 text-white">Example Solution - {selectedTopic}</h4>
                <div className="bg-ca-dark-bg2 border border-gray-700 rounded-lg overflow-hidden">
                  {/* Editor Header */}
                  <div className="bg-ca-dark-bg px-6 py-3 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs font-mono text-gray-500">solution.py</span>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-6 overflow-x-auto">
                    {codeExamples[selectedTopic] || (
                      <div className="text-gray-500 font-mono text-sm">
                        No example available for this topic
                      </div>
                    )}
                  </div>
                </div>

                {/* Hint Section */}
                <div className="mt-6 p-6 bg-ca-dark-white border border-ca-dark-bg2 rounded-lg">
                  <h5 className="text-white font-bold mb-3 text-base">💡 Step-by-Step Hints</h5>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400 font-mono">
                      <div className="mb-2"><span className="text-ca-dark-gold">▸</span> What data structure would help track seen elements?</div>
                      <div className="mb-2"><span className="text-ca-dark-gold">▸</span> How can you optimize from O(n²) to O(n)?</div>
                      <div><span className="text-ca-dark-gold">▸</span> What's the complement we're looking for?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Problem Solver Modal */}
      {selectedProblem && (
        <ProblemSolver 
          problem={selectedProblem}
          onClose={() => setSelectedProblem(null)}
          onSolve={handleProblemSolved}
        />
      )}
    </>
  )
}
