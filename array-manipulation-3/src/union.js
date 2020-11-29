/* eslint-disable no-unused-vars */
function union(first, second) { // skips second duplicate

  var finalArr = [];
  var combined = first.concat(second);

  for (var i = 0; i < combined.length; i++) {
    if (finalArr.indexOf(combined[i]) < 0) { // this pushes the values in the final array if it DOESNT currently have that value already
      finalArr.push(combined[i]);
    }
  }
  return finalArr;
}
