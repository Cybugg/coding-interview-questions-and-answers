/**
 * EXAMPLES: Array Problems
 * Demonstrating usage of array manipulation functions
 */

const {
    reverseArray,
    findMax,
    removeDuplicates,
    flattenArray,
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
} = require('./array-problems');

console.log('=== ARRAY MANIPULATION EXAMPLES ===\n');

// 1. Reverse an array
console.log('1. Reverse Array:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output:', reverseArray([1, 2, 3, 4, 5]));
console.log();

// 2. Find maximum element
console.log('2. Find Maximum:');
console.log('Input: [3, 7, 2, 9, 1, 5]');
console.log('Output:', findMax([3, 7, 2, 9, 1, 5]));
console.log();

// 3. Remove duplicates
console.log('3. Remove Duplicates:');
console.log('Input: [1, 2, 2, 3, 4, 4, 5, 5, 5]');
console.log('Output:', removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5, 5]));
console.log();

// 4. Flatten nested array
console.log('4. Flatten Array:');
console.log('Input: [1, [2, 3], [4, [5, 6]], 7]');
console.log('Output:', flattenArray([1, [2, 3], [4, [5, 6]], 7]));
console.log();

// 5. Find second largest
console.log('5. Second Largest:');
console.log('Input: [3, 7, 2, 9, 1, 9, 5]');
console.log('Output:', findSecondLargest([3, 7, 2, 9, 1, 9, 5]));
console.log();

// 6. Rotate array
console.log('6. Rotate Array by 2 positions:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output:', rotateArray([1, 2, 3, 4, 5], 2));
console.log();

// 7. Find missing number
console.log('7. Find Missing Number (1-5):');
console.log('Input: [1, 2, 4, 5]');
console.log('Output:', findMissingNumber([1, 2, 4, 5]));
console.log();

// 8. Merge sorted arrays
console.log('8. Merge Sorted Arrays:');
console.log('Input: [1, 3, 5] and [2, 4, 6]');
console.log('Output:', mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log();

// 9. Find pair with sum
console.log('9. Find Pair with Sum 10:');
console.log('Input: [2, 7, 11, 15]');
console.log('Output:', findPairWithSum([2, 7, 11, 15], 10));
console.log();

// 10. Move zeros to end
console.log('10. Move Zeros to End:');
console.log('Input: [0, 1, 0, 3, 12]');
console.log('Output:', moveZerosToEnd([0, 1, 0, 3, 12]));
console.log();

// 11. Array intersection
console.log('11. Array Intersection:');
console.log('Input: [1, 2, 3, 4] and [2, 3, 5]');
console.log('Output:', arrayIntersection([1, 2, 3, 4], [2, 3, 5]));
console.log();

// 12. Check if sorted
console.log('12. Is Array Sorted:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output:', isSorted([1, 2, 3, 4, 5]));
console.log('Input: [1, 3, 2, 4]');
console.log('Output:', isSorted([1, 3, 2, 4]));
console.log();

// 13. Most frequent element
console.log('13. Most Frequent Element:');
console.log('Input: [1, 2, 2, 3, 3, 3, 4]');
console.log('Output:', findMostFrequent([1, 2, 2, 3, 3, 3, 4]));
console.log();

// 14. Chunk array
console.log('14. Chunk Array (size 2):');
console.log('Input: [1, 2, 3, 4, 5, 6]');
console.log('Output:', chunkArray([1, 2, 3, 4, 5, 6], 2));
console.log();

// 15. Maximum subarray sum
console.log('15. Maximum Subarray Sum:');
console.log('Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]');
console.log('Output:', maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log();
