/* eslint-disable no-unused-vars */

function takeRight(array, count) {
  if (count >= array.length) {
    return [];
  }
  var finalArray = [];
  var startPosition = array.length - count;
  for (var i = startPosition; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
