# Arrays and Strings - Interview Questions and Answers

## Table of Contents
1. [Two Sum Problem](#1-two-sum-problem)
2. [Reverse a String](#2-reverse-a-string)
3. [Check if String is Palindrome](#3-check-if-string-is-palindrome)
4. [Find Maximum Subarray Sum (Kadane's Algorithm)](#4-find-maximum-subarray-sum-kadanes-algorithm)
5. [Rotate Array](#5-rotate-array)
6. [Longest Substring Without Repeating Characters](#6-longest-substring-without-repeating-characters)
7. [Merge Sorted Arrays](#7-merge-sorted-arrays)
8. [Valid Anagram](#8-valid-anagram)

---

## 1. Two Sum Problem

**Question:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Detailed Answer:**

### Approach 1: Brute Force
The simplest approach is to use two nested loops to check every pair of numbers.

```python
def twoSum(nums, target):
    """
    Brute force approach - check all pairs
    """
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []
```

**Time Complexity:** O(n²) - We check each pair once
**Space Complexity:** O(1) - No extra space needed

### Approach 2: Hash Map (Optimal)
Use a hash map to store numbers we've seen and their indices. For each number, check if `target - num` exists in the map.

```python
def twoSum(nums, target):
    """
    Optimized approach using hash map
    """
    seen = {}  # Dictionary to store {number: index}
    
    for i, num in enumerate(nums):
        complement = target - num
        
        # Check if complement exists in our map
        if complement in seen:
            return [seen[complement], i]
        
        # Store current number and its index
        seen[num] = i
    
    return []
```

**Time Complexity:** O(n) - Single pass through array
**Space Complexity:** O(n) - Hash map stores up to n elements

### Example Walkthrough:
```
Input: nums = [2, 7, 11, 15], target = 9

Step 1: i=0, num=2
  - complement = 9 - 2 = 7
  - 7 not in seen {}
  - seen = {2: 0}

Step 2: i=1, num=7
  - complement = 9 - 7 = 2
  - 2 IS in seen!
  - Return [seen[2], 1] = [0, 1]

Output: [0, 1]
```

### JavaScript Solution:
```javascript
function twoSum(nums, target) {
    const seen = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        
        seen.set(nums[i], i);
    }
    
    return [];
}
```

### Key Insights:
- The hash map approach trades space for time efficiency
- We can find the solution in a single pass
- The order of elements in the result matters (we need indices)
- This pattern (using complement with hash map) is common in many problems

---

## 2. Reverse a String

**Question:** Write a function that reverses a string. The input string is given as an array of characters.

**Detailed Answer:**

### Approach 1: Two Pointers
Use two pointers, one at the start and one at the end, and swap characters while moving towards the center.

```python
def reverseString(s):
    """
    Two-pointer approach - reverse in-place
    """
    left, right = 0, len(s) - 1
    
    while left < right:
        # Swap characters
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1
    
    return s
```

**Time Complexity:** O(n) - Visit each character once
**Space Complexity:** O(1) - No extra space (in-place modification)

### Approach 2: Using Python Built-ins
```python
def reverseString(s):
    """
    Using Python's reverse method
    """
    s.reverse()
    return s
```

### Approach 3: Recursive Solution
```python
def reverseString(s, left=0, right=None):
    """
    Recursive approach
    """
    if right is None:
        right = len(s) - 1
    
    # Base case
    if left >= right:
        return s
    
    # Swap
    s[left], s[right] = s[right], s[left]
    
    # Recursive call
    return reverseString(s, left + 1, right - 1)
```

**Time Complexity:** O(n)
**Space Complexity:** O(n) - Due to recursion call stack

### Example Walkthrough:
```
Input: s = ['h', 'e', 'l', 'l', 'o']

Two-pointer approach:
Step 1: left=0, right=4
  - Swap 'h' and 'o': ['o', 'e', 'l', 'l', 'h']
  - left=1, right=3

Step 2: left=1, right=3
  - Swap 'e' and 'l': ['o', 'l', 'l', 'e', 'h']
  - left=2, right=2

Step 3: left=2, right=2
  - left >= right, stop

Output: ['o', 'l', 'l', 'e', 'h']
```

### Key Insights:
- Two-pointer technique is efficient for in-place array manipulation
- In-place reversal saves memory
- For interview, clarify if you can use built-in methods

---

## 3. Check if String is Palindrome

**Question:** Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Detailed Answer:**

### Approach 1: Two Pointers with Character Filtering
```python
def isPalindrome(s):
    """
    Two-pointer approach with filtering
    """
    # Convert to lowercase and filter non-alphanumeric
    left, right = 0, len(s) - 1
    
    while left < right:
        # Skip non-alphanumeric characters from left
        while left < right and not s[left].isalnum():
            left += 1
        
        # Skip non-alphanumeric characters from right
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compare characters (case-insensitive)
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True
```

**Time Complexity:** O(n) - Single pass through string
**Space Complexity:** O(1) - Only using pointers

### Approach 2: Clean and Compare
```python
def isPalindrome(s):
    """
    Clean string first, then compare
    """
    # Remove non-alphanumeric and convert to lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    # Compare with reversed version
    return cleaned == cleaned[::-1]
```

**Time Complexity:** O(n)
**Space Complexity:** O(n) - Creating cleaned string

### Example Walkthrough:
```
Input: s = "A man, a plan, a canal: Panama"

Approach 1 (Two Pointers):
Step 1: left=0 ('A'), right=30 ('a')
  - Both alphanumeric
  - 'a' == 'a' ✓
  - left=1, right=29

Step 2: left=1 (' '), skip to 2 ('m')
        right=29 ('m')
  - 'm' == 'm' ✓
  - Continue...

Result: true

Approach 2 (Clean and Compare):
cleaned = "amanaplanacanalpanama"
reversed = "amanaplanacanalpanama"
They match → true
```

### Java Solution:
```java
public boolean isPalindrome(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Skip non-alphanumeric from left
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
            left++;
        }
        
        // Skip non-alphanumeric from right
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
            right--;
        }
        
        // Compare
        if (Character.toLowerCase(s.charAt(left)) != 
            Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}
```

### Key Insights:
- Two-pointer approach is more space-efficient
- Edge cases: empty string, single character, all non-alphanumeric
- Consider case-sensitivity requirements

---

## 4. Find Maximum Subarray Sum (Kadane's Algorithm)

**Question:** Given an integer array, find the contiguous subarray with the largest sum and return its sum.

**Detailed Answer:**

### Approach: Kadane's Algorithm
The key insight is that at each position, we decide whether to extend the current subarray or start a new one.

```python
def maxSubArray(nums):
    """
    Kadane's Algorithm - Dynamic Programming approach
    """
    if not nums:
        return 0
    
    # Initialize with first element
    max_sum = current_sum = nums[0]
    
    # Iterate through rest of array
    for num in nums[1:]:
        # Either extend current subarray or start new one
        current_sum = max(num, current_sum + num)
        
        # Update maximum sum found so far
        max_sum = max(max_sum, current_sum)
    
    return max_sum
```

**Time Complexity:** O(n) - Single pass through array
**Space Complexity:** O(1) - Only using two variables

### Alternative with Tracking Indices:
```python
def maxSubArrayWithIndices(nums):
    """
    Returns max sum and the subarray indices
    """
    max_sum = current_sum = nums[0]
    start = end = 0
    temp_start = 0
    
    for i in range(1, len(nums)):
        # If current_sum + nums[i] < nums[i], start new subarray
        if current_sum + nums[i] < nums[i]:
            current_sum = nums[i]
            temp_start = i
        else:
            current_sum += nums[i]
        
        # Update maximum
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start
            end = i
    
    return max_sum, start, end
```

### Example Walkthrough:
```
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

Step-by-step execution:
i=0: current_sum = -2, max_sum = -2
i=1: current_sum = max(1, -2+1) = 1, max_sum = 1
i=2: current_sum = max(-3, 1-3) = -2, max_sum = 1
i=3: current_sum = max(4, -2+4) = 4, max_sum = 4
i=4: current_sum = max(-1, 4-1) = 3, max_sum = 4
i=5: current_sum = max(2, 3+2) = 5, max_sum = 5
i=6: current_sum = max(1, 5+1) = 6, max_sum = 6
i=7: current_sum = max(-5, 6-5) = 1, max_sum = 6
i=8: current_sum = max(4, 1+4) = 5, max_sum = 6

Output: 6 (subarray [4, -1, 2, 1])
```

### Divide and Conquer Approach:
```python
def maxSubArrayDC(nums, left, right):
    """
    Divide and Conquer approach - O(n log n)
    """
    if left == right:
        return nums[left]
    
    mid = (left + right) // 2
    
    # Max sum in left half
    left_max = maxSubArrayDC(nums, left, mid)
    
    # Max sum in right half
    right_max = maxSubArrayDC(nums, mid + 1, right)
    
    # Max sum crossing middle
    left_sum = float('-inf')
    curr_sum = 0
    for i in range(mid, left - 1, -1):
        curr_sum += nums[i]
        left_sum = max(left_sum, curr_sum)
    
    right_sum = float('-inf')
    curr_sum = 0
    for i in range(mid + 1, right + 1):
        curr_sum += nums[i]
        right_sum = max(right_sum, curr_sum)
    
    cross_sum = left_sum + right_sum
    
    return max(left_max, right_max, cross_sum)
```

### Key Insights:
- Kadane's algorithm is optimal for this problem
- At each position, we make a greedy choice
- The algorithm handles negative numbers correctly
- Can be extended to track actual subarray indices
- This is a classic dynamic programming problem

---

## 5. Rotate Array

**Question:** Given an array, rotate the array to the right by k steps, where k is non-negative.

**Detailed Answer:**

### Approach 1: Using Reverse (Optimal)
The key insight: rotating right by k is equivalent to:
1. Reverse entire array
2. Reverse first k elements
3. Reverse remaining n-k elements

```python
def rotate(nums, k):
    """
    Reverse approach - optimal solution
    """
    n = len(nums)
    k = k % n  # Handle k > n
    
    # Helper function to reverse portion of array
    def reverse(start, end):
        while start < end:
            nums[start], nums[end] = nums[end], nums[start]
            start += 1
            end -= 1
    
    # Reverse entire array
    reverse(0, n - 1)
    
    # Reverse first k elements
    reverse(0, k - 1)
    
    # Reverse remaining elements
    reverse(k, n - 1)
```

**Time Complexity:** O(n) - Three passes through array
**Space Complexity:** O(1) - In-place rotation

### Example Walkthrough:
```
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3

Step 1: Reverse entire array
[1, 2, 3, 4, 5, 6, 7] → [7, 6, 5, 4, 3, 2, 1]

Step 2: Reverse first k=3 elements
[7, 6, 5, 4, 3, 2, 1] → [5, 6, 7, 4, 3, 2, 1]

Step 3: Reverse remaining n-k=4 elements
[5, 6, 7, 4, 3, 2, 1] → [5, 6, 7, 1, 2, 3, 4]

Output: [5, 6, 7, 1, 2, 3, 4]
```

### Approach 2: Using Extra Array
```python
def rotate(nums, k):
    """
    Using extra array
    """
    n = len(nums)
    k = k % n
    
    rotated = [0] * n
    
    for i in range(n):
        rotated[(i + k) % n] = nums[i]
    
    # Copy back
    nums[:] = rotated
```

**Time Complexity:** O(n)
**Space Complexity:** O(n) - Extra array

### Approach 3: Cyclic Replacements
```python
def rotate(nums, k):
    """
    Cyclic replacement approach
    """
    n = len(nums)
    k = k % n
    
    count = 0
    start = 0
    
    while count < n:
        current = start
        prev = nums[start]
        
        while True:
            next_idx = (current + k) % n
            nums[next_idx], prev = prev, nums[next_idx]
            current = next_idx
            count += 1
            
            if start == current:
                break
        
        start += 1
```

**Time Complexity:** O(n)
**Space Complexity:** O(1)

### Key Insights:
- The reverse method is elegant and easy to understand
- Always handle k > n case with modulo
- In-place rotation saves memory
- Each approach has trade-offs between simplicity and efficiency

---

## 6. Longest Substring Without Repeating Characters

**Question:** Given a string, find the length of the longest substring without repeating characters.

**Detailed Answer:**

### Approach: Sliding Window with Hash Set
Use a sliding window that expands when we find new characters and contracts when we find duplicates.

```python
def lengthOfLongestSubstring(s):
    """
    Sliding window with hash set
    """
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        # If character is duplicate, shrink window from left
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        # Add current character
        char_set.add(s[right])
        
        # Update maximum length
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

**Time Complexity:** O(n) - Each character visited at most twice
**Space Complexity:** O(min(n, m)) - Where m is charset size

### Optimized with Hash Map:
```python
def lengthOfLongestSubstring(s):
    """
    Optimized using hash map to store last index
    """
    char_index = {}  # {character: last_index}
    left = 0
    max_length = 0
    
    for right, char in enumerate(s):
        # If char seen and within current window
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        
        # Update character's last position
        char_index[char] = right
        
        # Update maximum length
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

### Example Walkthrough:
```
Input: s = "abcabcbb"

Using sliding window:
right=0, char='a': char_set={'a'}, left=0, max_length=1
right=1, char='b': char_set={'a','b'}, left=0, max_length=2
right=2, char='c': char_set={'a','b','c'}, left=0, max_length=3
right=3, char='a': 'a' is duplicate!
  - Remove 'a' from left, left=1
  - Add 'a', char_set={'b','c','a'}, max_length=3
right=4, char='b': 'b' is duplicate!
  - Remove 'b' from left, left=2
  - Add 'b', char_set={'c','a','b'}, max_length=3
right=5, char='c': 'c' is duplicate!
  - Remove 'c' from left, left=3
  - Add 'c', char_set={'a','b','c'}, max_length=3
right=6, char='b': 'b' is duplicate!
  - Remove 'a', then 'b' from left, left=5
  - Add 'b', char_set={'c','b'}, max_length=3
right=7, char='b': 'b' is duplicate!
  - Remove 'c', then 'b' from left, left=7
  - Add 'b', char_set={'b'}, max_length=3

Output: 3 (substring "abc")
```

### JavaScript Solution:
```javascript
function lengthOfLongestSubstring(s) {
    const charSet = new Set();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```

### Key Insights:
- Sliding window is perfect for substring problems
- Hash set/map helps track characters in current window
- Two pointers maintain window boundaries
- This pattern applies to many similar problems

---

## 7. Merge Sorted Arrays

**Question:** Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array. Assume nums1 has enough space to hold both arrays.

**Detailed Answer:**

### Approach: Three Pointers (Optimal)
Start from the end of both arrays and place elements from back to front. This avoids overwriting elements in nums1.

```python
def merge(nums1, m, nums2, n):
    """
    Three-pointer approach - merge from end
    m: number of elements in nums1
    n: number of elements in nums2
    """
    # Pointers for nums1, nums2, and merge position
    p1 = m - 1  # Last element in nums1's initial portion
    p2 = n - 1  # Last element in nums2
    p = m + n - 1  # Last position in nums1
    
    # Merge from back to front
    while p2 >= 0:
        if p1 >= 0 and nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
```

**Time Complexity:** O(m + n) - Single pass through both arrays
**Space Complexity:** O(1) - In-place merge

### Example Walkthrough:
```
Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3
       nums2 = [2, 5, 6], n = 3

Initial state:
nums1: [1, 2, 3, 0, 0, 0]
        p1=2      p=5
nums2: [2, 5, 6]
        p2=2

Step 1: nums1[2]=3 vs nums2[2]=6
  - 6 > 3, place 6 at position 5
  - nums1: [1, 2, 3, 0, 0, 6]
  - p1=2, p2=1, p=4

Step 2: nums1[2]=3 vs nums2[1]=5
  - 5 > 3, place 5 at position 4
  - nums1: [1, 2, 3, 0, 5, 6]
  - p1=2, p2=0, p=3

Step 3: nums1[2]=3 vs nums2[0]=2
  - 3 > 2, place 3 at position 3
  - nums1: [1, 2, 3, 3, 5, 6]
  - p1=1, p2=0, p=2

Step 4: nums1[1]=2 vs nums2[0]=2
  - 2 == 2, place nums2[0]=2 at position 2
  - nums1: [1, 2, 2, 3, 5, 6]
  - p1=1, p2=-1, p=1

Step 5: p2 < 0, done

Output: [1, 2, 2, 3, 5, 6]
```

### Alternative: Merge and Sort
```python
def merge(nums1, m, nums2, n):
    """
    Simple approach - copy and sort
    """
    # Copy nums2 into nums1
    for i in range(n):
        nums1[m + i] = nums2[i]
    
    # Sort the combined array
    nums1.sort()
```

**Time Complexity:** O((m + n) log(m + n)) - Due to sorting
**Space Complexity:** O(1) - In-place, but sort may use O(log n) stack

### Java Solution:
```java
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int p1 = m - 1;
    int p2 = n - 1;
    int p = m + n - 1;
    
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
}
```

### Key Insights:
- Merging from back to front avoids overwriting
- No extra space needed for in-place merge
- This technique applies to other merging problems
- Edge cases: one array empty, all elements from one array

---

## 8. Valid Anagram

**Question:** Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another word.

**Detailed Answer:**

### Approach 1: Sorting
Sort both strings and compare. If they're anagrams, sorted versions will be identical.

```python
def isAnagram(s, t):
    """
    Sorting approach
    """
    # Quick check: different lengths can't be anagrams
    if len(s) != len(t):
        return False
    
    return sorted(s) == sorted(t)
```

**Time Complexity:** O(n log n) - Sorting both strings
**Space Complexity:** O(n) - Sorted strings

### Approach 2: Hash Map (Optimal)
Count character frequencies in both strings and compare.

```python
def isAnagram(s, t):
    """
    Hash map approach - count frequencies
    """
    if len(s) != len(t):
        return False
    
    count = {}
    
    # Count characters in s
    for char in s:
        count[char] = count.get(char, 0) + 1
    
    # Subtract characters from t
    for char in t:
        if char not in count:
            return False
        count[char] -= 1
        if count[char] < 0:
            return False
    
    return True
```

**Time Complexity:** O(n) - Two passes through strings
**Space Complexity:** O(1) - At most 26 letters (constant space)

### Approach 3: Using Counter (Python)
```python
from collections import Counter

def isAnagram(s, t):
    """
    Using Python's Counter
    """
    return Counter(s) == Counter(t)
```

### Approach 4: Array Count (for lowercase letters only)
```python
def isAnagram(s, t):
    """
    Array count for lowercase letters
    """
    if len(s) != len(t):
        return False
    
    count = [0] * 26  # For 'a' to 'z'
    
    for i in range(len(s)):
        count[ord(s[i]) - ord('a')] += 1
        count[ord(t[i]) - ord('a')] -= 1
    
    return all(c == 0 for c in count)
```

**Time Complexity:** O(n)
**Space Complexity:** O(1) - Fixed size array

### Example Walkthrough:
```
Input: s = "anagram", t = "nagaram"

Hash map approach:
Step 1: Count characters in s
  count = {'a': 3, 'n': 1, 'g': 1, 'r': 1, 'm': 1}

Step 2: Subtract characters from t
  't[0]'='n': count['n'] = 0
  't[1]'='a': count['a'] = 2
  't[2]'='g': count['g'] = 0
  't[3]'='a': count['a'] = 1
  't[4]'='r': count['r'] = 0
  't[5]'='a': count['a'] = 0
  't[6]'='m': count['m'] = 0

All counts are 0 or removed → true

Input: s = "rat", t = "car"
count after s = {'r': 1, 'a': 1, 't': 1}
When processing t[0]='c': 'c' not in count → false
```

### JavaScript Solution:
```javascript
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const count = {};
    
    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    
    for (let char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }
    
    return true;
}
```

### Key Insights:
- Sorting is simpler but less efficient
- Hash map gives O(n) time complexity
- For limited character set, array is more efficient than hash map
- Early termination with length check is important
- This pattern applies to many "character frequency" problems

---

## Summary of Key Concepts

1. **Two Pointers**: Efficient for array/string problems (palindrome, merge, reverse)
2. **Hash Map**: Fast lookups for complement/frequency problems (two sum, anagram)
3. **Sliding Window**: For substring/subarray problems (longest substring)
4. **Kadane's Algorithm**: Dynamic programming for maximum subarray
5. **In-place Operations**: Save space by modifying input array (rotate, merge)

## Practice Tips

1. Always clarify constraints (array size, value ranges, duplicates allowed?)
2. Consider edge cases (empty input, single element, all same values)
3. Start with brute force, then optimize
4. Analyze time and space complexity
5. Test with examples before submitting
