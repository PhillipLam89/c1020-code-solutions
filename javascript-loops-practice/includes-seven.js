/* exported includesSeven */
function includesSeven(array) {
  if (array.length === 0) return false;
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    arr.push(array[i]);
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] === 7) return true;
    else if (typeof arr[j] !== 'number') return false;
  }
  return arr;
}
