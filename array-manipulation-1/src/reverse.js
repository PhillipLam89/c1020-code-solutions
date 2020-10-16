/* eslint-disable no-unused-vars */
function reverse(arr) {
  var final = [];
  for (var i = 0; i < arr.length; i++) {
    final.push(arr[arr.length - i - 1]); // the -i -1 is needed since i starts at 0 and array length starts at 1
  }
  return final;
}
