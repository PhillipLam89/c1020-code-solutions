/* exported sumAll */
function sumAll(numbers) {
  var finalSum = 0;
  for (var i = 0; i < numbers.length; i++) {
    finalSum += numbers[i];
  }
  return finalSum;
}
