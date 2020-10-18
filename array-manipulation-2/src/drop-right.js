/* eslint-disable no-unused-vars */
function dropRight(array, count) {
  var finalArray = [];
  var stoppingPoint = array.length - count;
  for (var i = 0; i < stoppingPoint; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
