/* eslint-disable no-unused-vars */
function numVowels(string) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'A' || string[i].toUpperCase() === 'E' || string[i].toUpperCase() === 'I' || string[i].toUpperCase() === 'O' || string[i].toUpperCase() === 'U') {
      counter += 1;
    }
  }
  return counter;
}
