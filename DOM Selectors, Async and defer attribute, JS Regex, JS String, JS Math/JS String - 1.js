/*
JS String - 1
easy
Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Implement the function numOfWords, which should take a string
and return its result as an integer which is the number of space seperated words in it (Use JS In built functions)
Input
Function will take a string as argument
Output
Function will return the number of space separated words
*/

function numOfWords(str){
    // return the output , do not use console.log here
    return str.split(' ').length
}