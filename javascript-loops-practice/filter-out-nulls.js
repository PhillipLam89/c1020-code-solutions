/* exported filterOutNulls */
function filterOutNulls(values) {
  var finalArray = [];
  var outputArray = [];
  for (var i = 0; i < values.length; i++) {
    finalArray.push(values[i]);
  }
  for (var j = 0; j < finalArray.length; j++) {
    if (typeof finalArray[j] === 'number' || typeof finalArray[j] === 'string') {
      outputArray.push(finalArray[j]);
    }
  }
  return outputArray;
}
