/* eslint-disable no-unused-vars */

function chunk(array, size) {
  var finalArray = [];
  var lastValueOfArray = [];
  for (var i = 0; i < array.length; i++) {
    if (size > array.length) {
      return [];
    }
    lastValueOfArray = finalArray[finalArray.length - 1]; // this gives the last value of the outter array which would be the inner array
    if (lastValueOfArray === undefined) { // if there is no inner array, then it will push in an array
      finalArray.push([array[i]]);
    } else if (lastValueOfArray.length === size) { // if the length of the inner array is the saem as the user-given size, it will push in an array
      finalArray.push([array[i]]);
    } else lastValueOfArray.push(array[i]); // if the length of the inner array is not yet the size desired, it will push the the current value into the INNER array.
  }

  return finalArray;
}
