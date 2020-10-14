/* eslint-disable no-console */

var colors = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);
colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);
console.log('Value of colors: ', colors);

var students = ['Phil', 'Bob', 'Cody', 'John'];
var numberOfStudents = students.length;
console.log('there are ' + students.length + ' in the class.');
var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student is: ', lastStudent);
console.log('Value of students array: ', students);
