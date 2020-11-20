/* eslint-disable no-unused-vars */
function intersection(first, second) { // removes second duplicate
  var filteredArr = [];
  var finalArr2 = [];
  var combined = first.concat(second);

  for (var i = 0; i < combined.length; i++) {
    if (counterHelperFunction(combined, combined[i]) > 1) { // calls helper fucntion to determine amount of occurences, only push if its > 1
      filteredArr.push(combined[i]);
    }
  }
  for (var k = 0; k < filteredArr.length; k++) { // copied from "unique" problem. It will remove duplicates from filteredArr
    if (finalArr2.indexOf(filteredArr[k]) < 0) {
      finalArr2.push(filteredArr[k]);
    }
  }
  return finalArr2;
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
