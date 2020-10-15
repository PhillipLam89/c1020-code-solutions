/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}
console.log('numbers 1 to 10', getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('Even numbers 2 to 20', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += ' ' + word;
    count += 1;
  }
  return repeated;
}
console.log('Repeat function:', repeatWord('JAVASCRIPTTT', 7));

function logEachCharacter(string) {
  var final = '';
  for (var i = 0; i < string.length; i++) {
    final = string[i];
    console.log('Log each char of string:', final);
  }
}
logEachCharacter('hDSFN');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2); // this will NOT mutate orignal array :)
  }
  return doubled;
}

var num1 = [2, 4, 6, 7];
console.log('original array:', num1);
console.log('doubled array:', doubleAll(num1));

var object = { aa: 113, zz: 'boo', bb: '33' };
function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
console.log('get keys:', getKeys(object));

function getValues(object) {
  var values = [];

  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
console.log('get values:', getValues(object));
