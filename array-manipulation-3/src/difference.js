/* eslint-disable no-unused-vars */

function difference(first, second) {
  var finalArr = [];
  var combined = first.concat(second);

  for (var i = 0; i < combined.length; i++) {
    if (counterHelperFunction(combined, combined[i]) === 1) { // calls helper fucntion to determine amount of occurences, only push if its 1
      finalArr.push(combined[i]);
    }
  }
  return finalArr;
}

function counterHelperFunction(array, value) { // this keeps count of how many occurences of a value in an array
  var count = 0;
  for (var j = 0; j < array.length; j++) {
    if (array[j] === value) {
      count++;
    }
  }
  return count;
}
