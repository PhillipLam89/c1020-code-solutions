var num1 = 10;
var num2 = 15;
var num3 = 20;
var maximumValue = Math.max(num1, num2, num3);
console.log('Max value is:', maximumValue);
var heroes = ['Spiderman', 'Superman', 'The Flash', 'Hulk'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log(randomIndex);
var randomHero = heroes[randomIndex];
console.log(randomHero);

var library = [{
  title: 'GooseBumps',
  author: 'R.L. Steins'
},
{
  title: 'Lord of the Flies',
  author: 'William Golding'
},
{
  title: '1984',
  author: 'George Orwell'
}];

console.log('original library:', library);
var lastBook = library.pop();
console.log('Last book is:', lastBook);
var firstBook = library.shift();
console.log('First book is:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
console.log(library);
library.unshift(css);
console.log('after unshift css:', library);
library.splice(1, 1);
console.log('after splice:', library);

var fullName = 'Phillip Lam';
var firstAndLastName = fullName.split(' ');
console.log('after split method:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toLocaleUpperCase();
console.log('Please say my name:', sayMyName);
