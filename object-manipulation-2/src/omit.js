/* eslint-disable no-unused-vars */

function omit(source, keys) {
  var result = {};
  for (var propertyNames in source) {
    if (keys.includes(propertyNames) === false) {
      result[propertyNames] = source[propertyNames];
    }
  }
  return result;
}
