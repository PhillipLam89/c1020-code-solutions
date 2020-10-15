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
  for (var i = 1; i < 11; i++) {
    numbers.push(currentNumber);
    currentNumber += 1;
  }
  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (var i = 2; i < 21; i = i + 2) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  for (var i = count; i < times + 1; i++) {
    repeated += ' ' + word;
    count += 1;
  }
  return repeated;
}
console.log(repeatWord('hello', 15));

function logEachCharacter(string) {
  var final = '';
  for (var i = 0; i < string.length; i++) {
    (final = string[i]);
    console.log(final);
  }
}
logEachCharacter('hDSFN');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
    doubled.push(numbers[i]);
  }
  return doubled;
}

var num1 = [2, 4, 6, 7];
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
