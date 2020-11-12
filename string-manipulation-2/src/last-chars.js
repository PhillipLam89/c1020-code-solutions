/* eslint-disable no-unused-vars */
function lastChars(length, string) {
  if (string.length === 0) return '';
  else if (string.length < length) return string;

  var finalString = '';
  var startingPosition = string.length - length;
  for (var i = startingPosition; i < string.length; i++) {
    finalString = finalString + string[i];
  }
  return finalString;
}
