/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) { // words = array of string  suffix = strings
  var finalArray = [];
  for (var i = 0; i < words.length; i++) {
    finalArray.push(words[i] + suffix);
  }
  return finalArray;
}
