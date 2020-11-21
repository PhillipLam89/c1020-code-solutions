/* eslint-disable no-unused-vars */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) { // word[i] !== word[i].toLowerCase this takes care of all non letter strings since their capitalized version === their lowercased version
      return false;
    }
  }
  return true;
}
