/*
Sum of Product of Digits of a given number
easy
Problem Statement
You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.
Input
User Task:
Since this will be a functional problem, you don't have to take input. You just have to complete the function sumOfProductOfDigits() that takes the integers n1 and n2 as a parameter.

To custom test the function, provide input in the following manner:
1st line will contain the number of test cases, let's say t
Then there will be t lines, each line having two numbers n1 and n2, separated by space

Constraints:
1 <= T <= 100
0 <= n1, n2 <= 10^6
Output
Return the sum of product of corresponding digits of n1 and n2.*/

// Code

function sumOfProductOfDigits(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
      let digit1 = n1 % 10;
      let digit2 = n2 % 10;
      sum += digit1 * digit2;
      n1 = Math.floor(n1 / 10);
      n2 = Math.floor(n2 / 10);
    }
    return sum;
  }