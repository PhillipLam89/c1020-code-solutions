/* exported findIndex */
function findIndex(array, value) { // array = array of values ,   value = number
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
