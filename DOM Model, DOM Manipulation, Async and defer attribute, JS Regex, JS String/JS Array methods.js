/*
JS Array methods
easy
Problem Statement
You are given an array of numbers. Use appropriate array methods to find all numbers that are greater than 5. Complete the function getNumbersGreaterThan5 that accepts an array of integers nums and returns an array of numbers that are greater than 5.
Input
An array nums of numbers
Output
An array of the numbers greater than 5 that are present in nums
*/

/*---------------Solution------------*/

function getNumbersGreaterThan5(nums) {
    return nums.filter(num => num > 5);
  }