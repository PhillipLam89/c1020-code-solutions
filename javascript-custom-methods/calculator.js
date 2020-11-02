/* exported calculator */
var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbersArr) {
    var answer = 0;
    for (var i = 0; i < numbersArr.length; i++) {
      answer = answer + numbersArr[i];
    }
    return answer;
  },
  getAverage(numbersArr) {
    var average = 0;
    var sum = 0;
    for (var j = 0; j < numbersArr.length; j++) {
      sum = sum + numbersArr[j];
    }
    average = sum / (numbersArr.length);
    return average;
  }
};
