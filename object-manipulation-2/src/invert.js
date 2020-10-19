/* eslint-disable no-unused-vars */
function invert(source) {
  var reversedObject = {};
  var keys = [];
  var values = [];

  for (var key in source) {
    keys.push(key);
    values.push(source[key]);
  }
  for (var i = 0; i < keys.length; i++) {
    reversedObject[values[i]] = keys[i];
  }
  return reversedObject;
}
