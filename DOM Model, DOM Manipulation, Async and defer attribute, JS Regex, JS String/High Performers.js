/*
High Performers
easy
Problem Statement
You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.

The array of objects that you will return should have the keys "name" and "average" which should contain the name and the average marks of the student if his average marks is greater than 90.
Input
The highPerformers function takes an array of objects as argument
Output
Return an array of objects containing only the students who have an average score above 90. The objects in the array should have the keys "name" and "average" which should contain the name and the average marks of the student if his average score is greater than 90.*/

/*------------Solutions-----------*/

function highPerformers(students) {
    return students
      .map(student => {
        const average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
        return { name: student.name, average: average };
      })
      .filter(student => student.average > 90);
  }