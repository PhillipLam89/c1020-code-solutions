/* eslint-disable no-unused-vars */
// function reverseWords(string) {
//   function reverseString(string) {
//   var final = ''
//   var lastIndex = string.length - 1
//   for (var i = lastIndex; i > -1; i--) {
//     final += string[i]
//   }
//   console.log(final)
//   return final
//   }

//  var arr = Array.from(string)
//  console.log('arr:', arr)

// }
function reverseWords(input) {
  var word = ''; var output = '';
  var lastIndex = input.length - 1;
  for (var i = lastIndex; i > -1; i--) {
    if (input[i] !== ' ') {
      word += input[i];
    } else {
      output = ' ' + word + output;
      word = '';
    }
  }
  return word + output;
}
