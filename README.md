# Coding Interview Questions and Answers in JavaScript

A comprehensive collection of common coding interview questions and solutions implemented in JavaScript. This repository covers fundamental concepts in arrays, strings, algorithms, and data structures.

## 📚 Table of Contents

- [Arrays](#arrays)
- [Strings](#strings)
- [Algorithms](#algorithms)
- [Data Structures](#data-structures)
- [Usage](#usage)
- [Contributing](#contributing)

## 🔢 Arrays

Located in `arrays/array-problems.js`

### Questions Covered:
1. **Reverse an array** - Two approaches: built-in and manual
2. **Find maximum element** - Using Math.max and manual iteration
3. **Remove duplicates** - Using Set and manual approach
4. **Flatten nested array** - Recursive and built-in flat()
5. **Find second largest number** - Sort and filter approach
6. **Rotate array** - Array manipulation with slicing
7. **Find missing number** - Mathematical approach
8. **Merge sorted arrays** - Two-pointer technique
9. **Find pair with given sum** - Hash set approach
10. **Move zeros to end** - In-place manipulation
11. **Array intersection** - Set-based filtering
12. **Check if array is sorted** - Linear scan
13. **Find most frequent element** - Frequency counting
14. **Chunk array** - Group into sub-arrays
15. **Maximum subarray sum** - Kadane's Algorithm

## 📝 Strings

Located in `strings/string-problems.js`

### Questions Covered:
1. **Reverse a string** - Multiple approaches
2. **Check palindrome** - String manipulation
3. **First non-repeating character** - Character counting
4. **Check anagrams** - Sorting approach
5. **Count vowels** - String iteration
6. **Capitalize words** - String transformation
7. **Check unique characters** - Set-based and manual
8. **Find longest word** - String splitting
9. **Remove duplicates** - Set conversion
10. **Check string rotation** - Concatenation technique
11. **Count substring occurrences** - indexOf iteration
12. **String compression** - Run-length encoding
13. **Get permutations** - Recursive approach
14. **Balance parentheses** - Stack-based validation
15. **Longest unique substring** - Sliding window

## 🧮 Algorithms

Located in `algorithms/algorithm-problems.js`

### Questions Covered:
1. **Binary Search** - Divide and conquer
2. **Bubble Sort** - Simple sorting algorithm
3. **Quick Sort** - Efficient recursive sorting
4. **Merge Sort** - Divide and conquer sorting
5. **Fibonacci** - Recursive, memoized, and iterative
6. **Factorial** - Recursive and iterative
7. **Prime number check** - Optimized algorithm
8. **Sieve of Eratosthenes** - Generate primes
9. **GCD (Greatest Common Divisor)** - Euclidean algorithm
10. **LCM (Least Common Multiple)** - Using GCD
11. **Power function** - Efficient exponentiation
12. **Power Set** - Generate all subsets
13. **Two Sum** - Hash map approach
14. **Three Sum** - Two-pointer technique
15. **Debounce** - Function execution control
16. **Throttle** - Rate limiting

## 🏗️ Data Structures

Located in `data-structures/data-structure-problems.js`

### Implementations:
1. **Stack** - LIFO data structure with push, pop, peek
2. **Queue** - FIFO data structure with enqueue, dequeue
3. **Linked List** - Node-based linear structure with insert, remove, reverse
4. **Binary Search Tree** - Hierarchical structure with insert, search, traversals
5. **Hash Table** - Key-value storage with collision handling
6. **Graph** - Adjacency list with DFS and BFS

### Features:
- **Linked List**: append, prepend, insert, remove, find, reverse, toArray
- **BST**: insert, search, in-order/pre-order/post-order/level-order traversal, height, min/max
- **Graph**: addVertex, addEdge, removeVertex, removeEdge, DFS, BFS

## 🚀 Usage

### Installation

Clone the repository:
```bash
git clone https://github.com/Cybugg/coding-interview-questions-and-answers.git
cd coding-interview-questions-and-answers
```

### Running Examples

Each file exports its functions and can be used directly:

```javascript
// Array problems
const { reverseArray, findMax, removeDuplicates } = require('./arrays/array-problems');

console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(findMax([3, 7, 2, 9, 1])); // 9
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
```

```javascript
// String problems
const { isPalindrome, areAnagrams, reverseString } = require('./strings/string-problems');

console.log(isPalindrome('racecar')); // true
console.log(areAnagrams('listen', 'silent')); // true
console.log(reverseString('hello')); // 'olleh'
```

```javascript
// Algorithm problems
const { binarySearch, fibonacci, quickSort } = require('./algorithms/algorithm-problems');

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2 (index)
console.log(fibonacci(10)); // 55
console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // [1, 1, 2, 3, 6, 8, 10]
```

```javascript
// Data structures
const { Stack, LinkedList, BinarySearchTree } = require('./data-structures/data-structure-problems');

// Stack example
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Linked List example
const list = new LinkedList();
list.append(1).append(2).append(3);
console.log(list.toArray()); // [1, 2, 3]

// Binary Search Tree example
const bst = new BinarySearchTree();
bst.insert(5).insert(3).insert(7);
console.log(bst.inOrderTraversal()); // [3, 5, 7]
```

## 💡 Key Concepts

### Time Complexity
- Most array operations: O(n)
- Binary Search: O(log n)
- Sorting algorithms: O(n log n) for Quick/Merge sort
- Hash operations: O(1) average case

### Space Complexity
- In-place algorithms: O(1)
- Recursive solutions: O(n) for call stack
- Data structures: Varies by implementation

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new problems and solutions
- Improve existing solutions
- Add test cases
- Fix bugs or optimize code

## 📖 Interview Tips

1. **Understand the problem** - Ask clarifying questions
2. **Plan your approach** - Discuss time/space complexity
3. **Write clean code** - Use meaningful variable names
4. **Test your solution** - Consider edge cases
5. **Optimize if needed** - Discuss trade-offs

## 📄 License

This project is open source and available for educational purposes.

## 🌟 Common Interview Topics

- **Arrays & Strings**: Manipulation, searching, sorting
- **Two Pointers**: Finding pairs, triplets, partitioning
- **Sliding Window**: Substring problems, max/min in subarray
- **Recursion**: Tree traversal, backtracking, divide & conquer
- **Dynamic Programming**: Fibonacci, knapsack, path problems
- **Hash Tables**: Frequency counting, caching, fast lookups
- **Trees & Graphs**: Traversal, searching, shortest path
- **Sorting & Searching**: Binary search, various sort algorithms

Happy coding and good luck with your interviews! 🎯