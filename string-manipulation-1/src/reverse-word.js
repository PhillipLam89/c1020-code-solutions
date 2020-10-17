/* eslint-disable no-unused-vars */
function reverseWord(word) {
  var reversedString = '';
  var lastIndex = word.length - 1;
  for (var i = lastIndex; i > -1; i--) { // a backwards for loop and concatenation will automatically give a reversed string
    reversedString += word[i]; // i > -1 will make sure sure loop breaks after first index of zero
  }
  return reversedString;
}

// I cant believe it took me almost 2 hours to get this....
