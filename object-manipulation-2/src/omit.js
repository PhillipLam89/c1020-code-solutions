/* eslint-disable no-unused-vars */

// pick
// function pick(source, keys) {
//   var result = {}
//   for (propertyNames in source) {
//     if (keys.includes(propertyNames)) {
//       result[propertyNames] = source[propertyNames];
//     }
//   }
//   for (propertyNames in result) {
//     if (result[propertyNames] === undefined) {
//       delete result[propertyNames]
//     }
//   }
//   return result;
// }

// omit
function omit(source, keys) {
  var result = {};
  for (var propertyNames in source) {
    if (keys.includes(propertyNames) === false) {
      result[propertyNames] = source[propertyNames];
    }
  }
  return result;
}
