/* eslint-disable no-unused-vars */
function getValues(object) {
  var arr = [];
  for (var property in object) {
    arr.push(object[property]);
  }
  return arr;
}
