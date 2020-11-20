/* eslint-disable no-unused-vars */

function flatten(array) {
  var emptyArr = [];
  return emptyArr.concat(...array); // spread operator copies and splits the array argument into separate arguments. Concat (which can take multiple args and flattens by 1 level) will then merge that result into an emmpty array as specificed on the left.
}
