/* exported filterOutNulls */
function filterOutNulls(values) {
  var outputArray = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      outputArray.push(values[i]);
    }
  }
  return outputArray;
}
