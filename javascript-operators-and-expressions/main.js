/* eslint-disable no-console */

var width = 10;
var height = 12;

var area = width * height;
console.log('The value of area is: ', area);
console.log('The type of area is: ', typeof area);

var bill = 500;
var payment = 700;
var change = payment - bill;
console.log('The value of change is: ', change);
console.log('The type of change is: ', typeof change);

var quizzes = 88;
var midterm = 75;
var final = 90;
var grade = (quizzes + midterm + final) / 3;
console.log('The value of grade is: ', grade);
console.log('The type of grade is: ', typeof grade);

var firstName = 'Phillip';
var lastName = 'Lam';
var fullName = firstName + ' ' + lastName;
console.log('The value of fullName is: ', fullName);
console.log('The type of fullName is: ', typeof fullName);

var pH = 10;
var isAcidic = pH < 7;
console.log('The value of isAcidic is: ', isAcidic);
console.log('The type of isAcidic is: ', typeof isAcidic);

var headCount = 10;
var isSparta = headCount === 300;
console.log('The value of isSparta is: ', isSparta);
console.log('The type of isSparta is: ', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';
console.log('The value of motto is: ', motto);
console.log('The type of motto is: ', typeof motto);
