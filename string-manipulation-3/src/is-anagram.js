/* eslint-disable no-unused-vars */
function isAnagram(firstString, secondString) {

  var firstStrNoSpaces = firstString.split(' ').join('').split('');
  var secondStrNoSpaces = secondString.split(' ').join('').split('');

  if (firstStrNoSpaces.length !== secondStrNoSpaces.length) {
    return false;
  }
  for (var j = 0; j < firstStrNoSpaces.length; j++) {
    if (!firstStrNoSpaces.includes(secondStrNoSpaces[j])) {
      return false;
    }
  }
  for (var i = 0; i < firstStrNoSpaces.length; i++) {
    if (firstStrNoSpaces.includes(secondStrNoSpaces[i])) return true;
  }
}
