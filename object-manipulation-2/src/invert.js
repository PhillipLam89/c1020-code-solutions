/* eslint-disable no-unused-vars */
function invert(source) {
  var invertedObj = {};
  var properties = [];
  var values = [];

  for (var propertyNames in source) {
    invertedObj[source[propertyNames]] = propertyNames;

    return invertedObj;
  }
}

var test = { a: 'z', b: 'y', c: 'x' };

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
