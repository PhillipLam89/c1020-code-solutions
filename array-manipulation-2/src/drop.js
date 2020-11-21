/* eslint-disable no-unused-vars */
function drop(array, count) { // DO NOT MUTATE ORIGINAL ARRAY
  var finalArray = [];
  for (var i = count; i < array.length; i++) {
    finalArray.push(array[i]);
  }
  return finalArray;
}

// DO NOT MUTATE ORIGINAL ARRAY
