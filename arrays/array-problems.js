/**
 * ARRAY MANIPULATION PROBLEMS
 * Common coding interview questions related to arrays
 */

// 1. Reverse an array
function reverseArray(arr) {
    return [...arr].reverse();
}

// Alternative: Without using built-in reverse()
function reverseArrayManual(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

// 2. Find the maximum element in an array
function findMax(arr) {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

// Alternative: Without using Math.max
function findMaxManual(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// 3. Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Alternative: Without using Set
function removeDuplicatesManual(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// 4. Flatten a nested array
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Alternative: Recursive approach
function flattenArrayRecursive(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flattenArrayRecursive(item));
        } else {
            result.push(item);
        }
    });
    return result;
}

// 5. Find the second largest number in an array
function findSecondLargest(arr) {
    if (arr.length < 2) return undefined;
    const unique = [...new Set(arr)].sort((a, b) => b - a);
    return unique[1];
}

// 6. Rotate array to the right by k steps
function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// 7. Find missing number in array from 1 to n
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// 8. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i++]);
        } else {
            result.push(arr2[j++]);
        }
    }
    
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// 9. Find pair with given sum
function findPairWithSum(arr, targetSum) {
    const seen = new Set();
    for (let num of arr) {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            return [complement, num];
        }
        seen.add(num);
    }
    return null;
}

// 10. Move all zeros to end of array
function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    
    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }
    
    // Fill remaining positions with zeros
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    
    return arr;
}

// 11. Find intersection of two arrays
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return [...new Set(arr2.filter(item => set1.has(item)))];
}

// 12. Check if array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

// 13. Find the most frequent element
function findMostFrequent(arr) {
    const frequency = {};
    let maxFreq = 0;
    let mostFrequent = null;
    
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
            mostFrequent = num;
        }
    }
    
    return mostFrequent;
}

// 14. Chunk array into groups of size n
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// 15. Find subarray with maximum sum (Kadane's Algorithm)
function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

module.exports = {
    reverseArray,
    reverseArrayManual,
    findMax,
    findMaxManual,
    removeDuplicates,
    removeDuplicatesManual,
    flattenArray,
    flattenArrayRecursive,
    findSecondLargest,
    rotateArray,
    findMissingNumber,
    mergeSortedArrays,
    findPairWithSum,
    moveZerosToEnd,
    arrayIntersection,
    isSorted,
    findMostFrequent,
    chunkArray,
    maxSubarraySum
};
