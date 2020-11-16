/* eslint-disable no-unused-vars */

function flatten(array) {
  return array.concat.apply([], array); // call method allows you to use arrays as arguments.

}
