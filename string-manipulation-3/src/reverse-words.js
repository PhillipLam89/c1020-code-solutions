/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var final = '';
  var a = string.split(' ');
  var b = [];

  for (var i = 0; i < a.length; i++) {
    b.push([...a[i]]);
    b[i].reverse();

  }

  for (var j = 0; j < b.length; j++) {
    final += b[j];
  }

  return final;
}
var a = [['w'], ['h'], ['a'], ['t'], [' '], ['i'], ['s']];
