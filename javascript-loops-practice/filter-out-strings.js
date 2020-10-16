/* exported filterOutStrings */
function filterOutStrings(values) {
  var finalArray = [];
  var outPut = [];
  for (var i = 0; i < values.length; i++) {
    finalArray.push(values[i]);
  }

  for (var j = 0; j < finalArray.length; j++) {
    if (typeof finalArray[j] !== 'string') {
      outPut.push(finalArray[j]);
    }
  }
  return outPut;
}
