/* exported filterOutStrings */
function filterOutStrings(values) {
  var outPut = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      outPut.push(values[i]);
    }
  }
  return outPut;
}
