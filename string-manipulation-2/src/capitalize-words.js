/* eslint-disable no-unused-vars */

function capitalizeWords(string) {
  var arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1).toLowerCase();
  }

  var finalString = arr.join(' ');
  return finalString;
}
