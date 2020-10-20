/* eslint-disable no-unused-vars */

function compact(array) {
  var final = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      final.push(array[i]);
    }
  }
  return final;
}
