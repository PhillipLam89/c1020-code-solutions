/* eslint-disable no-unused-vars */
function capitalize(word) {
  var final = '';
  for (var i = 0; i < 1; i++) {
    final += word[i].toUpperCase();
  }
  for (var j = 1; j < word.length; j++) {
    final += word[j].toLowerCase();
  }
  return final;
}
