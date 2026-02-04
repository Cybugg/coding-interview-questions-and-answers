/**
 * STRING MANIPULATION PROBLEMS
 * Common coding interview questions related to strings
 */

// 1. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Alternative: Using loop
function reverseStringManual(str) {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// 2. Check if a string is a palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

// 3. Find the first non-repeating character
function firstNonRepeatingChar(str) {
    const charCount = {};
    
    // Count occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// 4. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    
    const sorted1 = str1.toLowerCase().split('').sort().join('');
    const sorted2 = str2.toLowerCase().split('').sort().join('');
    
    return sorted1 === sorted2;
}

// 5. Count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// 6. Capitalize the first letter of each word
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// 7. Check if string contains only unique characters
function hasUniqueChars(str) {
    return new Set(str).size === str.length;
}

// Alternative: Without using Set
function hasUniqueCharsManual(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
            return false;
        }
    }
    return true;
}

// 8. Find the longest word in a string
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = '';
    
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    
    return longest;
}

// 9. Remove duplicates from a string
function removeDuplicates(str) {
    return [...new Set(str)].join('');
}

// 10. Check if a string is a rotation of another
function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
}

// 11. Count occurrences of a substring
function countSubstring(str, substring) {
    let count = 0;
    let position = 0;
    
    while ((position = str.indexOf(substring, position)) !== -1) {
        count++;
        position += substring.length;
    }
    
    return count;
}

// 12. Compress a string (e.g., "aaabbc" -> "a3b2c1")
function compressString(str) {
    if (str.length === 0) return '';
    
    let compressed = '';
    let count = 1;
    
    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1;
        }
    }
    
    return compressed.length < str.length ? compressed : str;
}

// 13. Find all permutations of a string
function getPermutations(str) {
    if (str.length <= 1) return [str];
    
    const permutations = [];
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1);
        const remainingPermutations = getPermutations(remainingChars);
        
        for (let perm of remainingPermutations) {
            permutations.push(char + perm);
        }
    }
    
    return permutations;
}

// 14. Check if parentheses are balanced
function areParenthesesBalanced(str) {
    const stack = [];
    const pairs = { '(': ')', '[': ']', '{': '}' };
    
    for (let char of str) {
        if (char in pairs) {
            stack.push(char);
        } else if (Object.values(pairs).includes(char)) {
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (pairs[last] !== char) return false;
        }
    }
    
    return stack.length === 0;
}

// 15. Find longest substring without repeating characters
function longestUniqueSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const seen = new Map();
    
    for (let end = 0; end < str.length; end++) {
        const char = str[end];
        
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        
        seen.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

module.exports = {
    reverseString,
    reverseStringManual,
    isPalindrome,
    firstNonRepeatingChar,
    areAnagrams,
    countVowels,
    capitalizeWords,
    hasUniqueChars,
    hasUniqueCharsManual,
    findLongestWord,
    removeDuplicates,
    isRotation,
    countSubstring,
    compressString,
    getPermutations,
    areParenthesesBalanced,
    longestUniqueSubstring
};
