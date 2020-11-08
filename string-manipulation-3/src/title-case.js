/* eslint-disable no-unused-vars */
function titleCase(title) {

  var finalStr = '';
  var arr = title.split(' ');

  var specialWordsArr = ['a', 'an', 'and', 'at', 'or', 'by', 'to', 'the', 'as', 'per', 'nor', 'for', 'in', 'of', 'on', 'but'];

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    if (!(i === 0 || arr[i - 1].includes(':'))) {
      if (specialWordsArr.includes(word)) {
        finalStr += ' ' + word;
        continue;
      }
    }
    if (i === 0) {
      if (word.toUpperCase() === 'JAVASCRIPT:') {
        finalStr += 'JavaScript:';
        continue; // jumps over 1 iteration of loop
      } else if (word.toUpperCase() === 'API') {
        finalStr += 'API';
        continue;
      }
    } else {
      if (word.toUpperCase() === 'JAVASCRIPT:') {
        finalStr += ' ' + 'JavaScript:';
        continue;
      } else if (word.toUpperCase() === 'JAVASCRIPT') {
        finalStr += ' ' + 'JavaScript';
        continue;
      } else if (word.toUpperCase() === 'API') {
        finalStr += ' API';
        continue;
      }
    }
    if (word.includes('-')) { // slice and + will concatenate the string and capitalize any letters after -
      var dashLocation = word.indexOf('-'); // gets location of -
      word = word.slice(0, dashLocation + 1) + word.slice(dashLocation + 1, dashLocation + 2).toUpperCase() + word.slice(dashLocation + 2);
    }

    var capital = word.slice(0, 1).toUpperCase() + word.slice(1);

    if (i !== 0) {
      finalStr += ' ' + capital;
    } else {
      finalStr += capital;
    }
  }
  return finalStr;
}
