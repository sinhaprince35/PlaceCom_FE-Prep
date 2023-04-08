/*
Print Multiples of 3 - Control Flow
easy
Problem Statement
Complete the given printMultiplesOfThree function. You will be given two arguments beginNum, and endNum. Your task is to loop from beginNum to endNum, and if a number is a multiple of 3, print that number to the console.

Note: While looping through the numbers, beginNum and endNum must not be excluded.
Input
The printMultiplesOfThree function takes in two arguments, both number
Output
The printMultiplesOfThree function should print numbers to the console that lie in the range and is also a multiple of 3.
*/

// --------------Solution--------------

function printMultiplesOfThree(beginNum, endNum) {
    // write your code here
      for (let i = beginNum; i <= endNum; i++) {
      if (i % 3 === 0) {
        console.log(i);
      }
    }
  }
