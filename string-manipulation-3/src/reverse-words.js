/* eslint-disable no-unused-vars */
function reverseWords(string) {
  var final = '';
  var a = [...string];

  var b = [];

  for (var i = 0; i < a.length; i++) {
    b.push([...a[i]]);

  }

  for (var j = 0; j < b.length; j++) {
    final += b[j];
  }

}
var a = [['w'], ['h'], ['a'], ['t'], [' '], ['i'], ['s']];
