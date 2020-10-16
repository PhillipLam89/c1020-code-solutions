/* exported oddOrEven */
function oddOrEven(numbers) {
  var finalArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      finalArray.push('even');
    } else {
      finalArray.push('odd');
    }
  }
  return finalArray;
}
