/* eslint-disable no-unused-vars */
function equal(first, second) { // arguments are []
  var value1 = '';
  var value2 = '';
  for (var i = 0; i < first.length; i++) {
    value1 += first[i];
  }
  for (var j = 0; j < first.length; j++) {
    value2 += second[j];
  }

  if (value1 === value2) {
    return true;
  }
  return false;
}
