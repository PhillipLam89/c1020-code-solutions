/* eslint-disable no-unused-vars */
function firstChars(length, string) {
  if (string.length === 0) return '';
  else if (string.length < length) return string;

  var finalString = '';
  for (var i = 0; i < length; i++) {
    finalString += string[i];
  }
  return finalString;
}
