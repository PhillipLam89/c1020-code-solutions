/* eslint-disable no-unused-vars */
function zip(first, second) {
  var finalArr = [];
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      finalArr[i] = [first[i], second[i]];
    }
  } else {
    for (var j = 0; j < second.length; j++) {
      finalArr[j] = [first[j], second[j]];
    }
  }

  return finalArr;
}
