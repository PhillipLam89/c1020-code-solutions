/* eslint-disable no-unused-vars */
function take(array, count) { // count takes in number type
  if (count > array.length) {
    return []; // takes care of empty arrays
  }
  var finalArray = [];
  for (var i = 0; i < count; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}
