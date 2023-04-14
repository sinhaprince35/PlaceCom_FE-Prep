/*
Iterate the Object
easy
Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Complete the function solve which takes obj as a parameter which is an object.

Iterate obj using a for of and a for in loop. The for of loop should print all the values of the obj in the console and the for in loop should print the key and values of obj in the format {key}: {value}.
See the example for more clarity.

Note: Generate Expected Output section will not work for this question
Input
Input will have the object which is passed as a parameter to the function solve

You need not worry about the same, it is handled properly by the hidden pre-function code.

Example:
{"name": "John","age": "32","location": "New York"}
Output
The for of loop should print all the values of the obj object in the console
The for in loop should print the key and values of obj object in the format {key}: {value}*/

//Code

function solve(obj) {
    // Iterate over obj using a for...of loop
    for (const value of Object.values(obj)) {
      console.log(value);
    }
    
    // Iterate over obj using a for...in loop
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
  }