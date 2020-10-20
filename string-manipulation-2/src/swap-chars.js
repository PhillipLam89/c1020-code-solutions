/* eslint-disable no-unused-vars */
function swapChars(firstIndex, secondIndex, string) {
  var arr = string.split('');
  var firstPlaceholder = string[firstIndex];

  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = firstPlaceholder;

  var finalString = arr.join('');
  return finalString;

}
