/**
 * EXAMPLES: String Problems
 * Demonstrating usage of string manipulation functions
 */

const {
    reverseString,
    isPalindrome,
    firstNonRepeatingChar,
    areAnagrams,
    countVowels,
    capitalizeWords,
    hasUniqueChars,
    findLongestWord,
    removeDuplicates,
    isRotation,
    countSubstring,
    compressString,
    getPermutations,
    areParenthesesBalanced,
    longestUniqueSubstring
} = require('./string-problems');

console.log('=== STRING MANIPULATION EXAMPLES ===\n');

// 1. Reverse a string
console.log('1. Reverse String:');
console.log('Input: "hello"');
console.log('Output:', reverseString('hello'));
console.log();

// 2. Check palindrome
console.log('2. Is Palindrome:');
console.log('Input: "racecar"');
console.log('Output:', isPalindrome('racecar'));
console.log('Input: "hello"');
console.log('Output:', isPalindrome('hello'));
console.log();

// 3. First non-repeating character
console.log('3. First Non-Repeating Character:');
console.log('Input: "aabbcde"');
console.log('Output:', firstNonRepeatingChar('aabbcde'));
console.log();

// 4. Check anagrams
console.log('4. Are Anagrams:');
console.log('Input: "listen" and "silent"');
console.log('Output:', areAnagrams('listen', 'silent'));
console.log('Input: "hello" and "world"');
console.log('Output:', areAnagrams('hello', 'world'));
console.log();

// 5. Count vowels
console.log('5. Count Vowels:');
console.log('Input: "Hello World"');
console.log('Output:', countVowels('Hello World'));
console.log();

// 6. Capitalize words
console.log('6. Capitalize Words:');
console.log('Input: "hello world from javascript"');
console.log('Output:', capitalizeWords('hello world from javascript'));
console.log();

// 7. Check unique characters
console.log('7. Has Unique Characters:');
console.log('Input: "abcdef"');
console.log('Output:', hasUniqueChars('abcdef'));
console.log('Input: "hello"');
console.log('Output:', hasUniqueChars('hello'));
console.log();

// 8. Find longest word
console.log('8. Find Longest Word:');
console.log('Input: "The quick brown fox jumped"');
console.log('Output:', findLongestWord('The quick brown fox jumped'));
console.log();

// 9. Remove duplicates
console.log('9. Remove Duplicates:');
console.log('Input: "programming"');
console.log('Output:', removeDuplicates('programming'));
console.log();

// 10. Check rotation
console.log('10. Is Rotation:');
console.log('Input: "waterbottle" and "erbottlewat"');
console.log('Output:', isRotation('waterbottle', 'erbottlewat'));
console.log();

// 11. Count substring
console.log('11. Count Substring:');
console.log('Input: "hello hello world" and "hello"');
console.log('Output:', countSubstring('hello hello world', 'hello'));
console.log();

// 12. Compress string
console.log('12. Compress String:');
console.log('Input: "aaabbbccc"');
console.log('Output:', compressString('aaabbbccc'));
console.log();

// 13. Get permutations (small example)
console.log('13. Get Permutations:');
console.log('Input: "abc"');
console.log('Output:', getPermutations('abc'));
console.log();

// 14. Check balanced parentheses
console.log('14. Are Parentheses Balanced:');
console.log('Input: "{[()]}"');
console.log('Output:', areParenthesesBalanced('{[()]}'));
console.log('Input: "{[(])}"');
console.log('Output:', areParenthesesBalanced('{[(])}'));
console.log();

// 15. Longest unique substring
console.log('15. Longest Unique Substring Length:');
console.log('Input: "abcabcbb"');
console.log('Output:', longestUniqueSubstring('abcabcbb'));
console.log();
