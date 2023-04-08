/*
Number of primes
easy
asked in interviews by 1 company
Time Limit: 20 sec
Memory Limit: 128000 kB
Problem Statement
Given a number n find the number of prime numbers less than equal to that number.
Input
There is only one integer containing value of n.

Constraints:-
1 <= n <= 10000000
Output
Return number of primes less than or equal to n
*/

// -------------Solution--------------

// You need to return the count of Primes less than equal to N
function numberOfPrimes(n)
{// Initialize an array of boolean values indicating whether each index is a prime number
  const isPrime = new Array(n + 1).fill(true);
  // 0 and 1 are not prime numbers
  isPrime[0] = false;
  isPrime[1] = false;

  // Mark all multiples of each prime number as composite
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Count the number of primes in the array
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  return count;
}