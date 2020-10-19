/* eslint-disable no-unused-vars */

function pick(source, keys) {
  var result = {};
  for (var propertyNames in source) {
    if (keys.includes(propertyNames)) {
      result[propertyNames] = source[propertyNames];
    }
  }
  for (var val in result) {
    if (result[val] === undefined) {
      delete result[val];
    }
  }
  return result;
}
