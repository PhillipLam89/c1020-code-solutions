/* exported countdown */
function countdown(number) {
  if (number < 0) return 'positive integers only';
  var arr = [];
  for (var i = number; i > -1; i--) {
    arr.push(i);
  }
  return arr;
}
