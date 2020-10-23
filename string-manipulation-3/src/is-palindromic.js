/* eslint-disable no-unused-vars */
function isPalindromic(string) {
  var arrayOfInput = Array.from(string);
  var array2 = Array.from(string);
  for (var i = 0; i < arrayOfInput.length; i++) {
    if (arrayOfInput[i] === ' ') {
      arrayOfInput.splice(i, 1);
    }
  }
  for (var j = 0; j < array2.length; j++) {
    if (array2[j] === ' ') {
      array2.splice(j, 1);
    }
  }
  var stringNoSpaces = array2.reverse().join('');
  var final = arrayOfInput.join('');

  if (final === stringNoSpaces) {
    return true;
  } else {
    return false;
  }
}
