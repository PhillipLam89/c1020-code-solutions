/* eslint-disable no-unused-vars */

// function reverseWords(string) {
//   var reversedSection = '';
//   var output = '';
//   var lastIndex = string.length - 1;
//   for (var i = lastIndex; i > -1; i--) {
//     if (string[i] !== ' ') {
//       reversedSection += string[i];
//     } else {
//       output = ' ' + reversedSection + output;   // as we iterate backwards from the string, each complete word will be put in reversed form, when it hits a space,  the complete word after that will be placed IN FRONT of the previous word with a space.
//       reversedSection = '';
//     }
//   }
//   var finalString = reversedSection + output
//   return finalString
// }
