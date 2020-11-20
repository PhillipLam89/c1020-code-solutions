/* eslint-disable no-unused-vars */

function unique(array) {
  var finalArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!finalArr.includes(array[i])) { // this pushes the values in the final array if it DOESNT currently have that value already
      finalArr.push(array[i]);
    }
  }
  return finalArr;
}
