/**
 * EXAMPLES: Algorithm Problems
 * Demonstrating usage of common algorithms
 */

const {
    binarySearch,
    bubbleSort,
    quickSort,
    mergeSort,
    fibonacci,
    fibonacciIterative,
    factorial,
    isPrime,
    sieveOfEratosthenes,
    gcd,
    lcm,
    power,
    powerSet,
    twoSum,
    threeSum
} = require('./algorithm-problems');

console.log('=== ALGORITHM EXAMPLES ===\n');

// 1. Binary Search
console.log('1. Binary Search:');
const sortedArr = [1, 3, 5, 7, 9, 11, 13];
console.log('Input: [1, 3, 5, 7, 9, 11, 13], target: 7');
console.log('Output (index):', binarySearch(sortedArr, 7));
console.log();

// 2. Bubble Sort
console.log('2. Bubble Sort:');
console.log('Input: [64, 34, 25, 12, 22, 11, 90]');
console.log('Output:', bubbleSort([64, 34, 25, 12, 22, 11, 90]));
console.log();

// 3. Quick Sort
console.log('3. Quick Sort:');
console.log('Input: [3, 6, 8, 10, 1, 2, 1]');
console.log('Output:', quickSort([3, 6, 8, 10, 1, 2, 1]));
console.log();

// 4. Merge Sort
console.log('4. Merge Sort:');
console.log('Input: [38, 27, 43, 3, 9, 82, 10]');
console.log('Output:', mergeSort([38, 27, 43, 3, 9, 82, 10]));
console.log();

// 5. Fibonacci
console.log('5. Fibonacci (10th number):');
console.log('Output (recursive):', fibonacci(10));
console.log('Output (iterative):', fibonacciIterative(10));
console.log();

// 6. Factorial
console.log('6. Factorial of 5:');
console.log('Output:', factorial(5));
console.log();

// 7. Prime number check
console.log('7. Is Prime:');
console.log('Input: 17');
console.log('Output:', isPrime(17));
console.log('Input: 18');
console.log('Output:', isPrime(18));
console.log();

// 8. Sieve of Eratosthenes
console.log('8. Generate Primes up to 30:');
console.log('Output:', sieveOfEratosthenes(30));
console.log();

// 9. GCD
console.log('9. GCD of 48 and 18:');
console.log('Output:', gcd(48, 18));
console.log();

// 10. LCM
console.log('10. LCM of 12 and 18:');
console.log('Output:', lcm(12, 18));
console.log();

// 11. Power function
console.log('11. Power (2^10):');
console.log('Output:', power(2, 10));
console.log();

// 12. Power Set
console.log('12. Power Set of [1, 2, 3]:');
console.log('Output:', powerSet([1, 2, 3]));
console.log();

// 13. Two Sum
console.log('13. Two Sum (target 9):');
console.log('Input: [2, 7, 11, 15]');
console.log('Output (indices):', twoSum([2, 7, 11, 15], 9));
console.log();

// 14. Three Sum
console.log('14. Three Sum (target 0):');
console.log('Input: [-1, 0, 1, 2, -1, -4]');
console.log('Output:', threeSum([-1, 0, 1, 2, -1, -4]));
console.log();
