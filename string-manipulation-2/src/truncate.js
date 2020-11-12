/* eslint-disable no-unused-vars */
function truncate(length, string) {
     if (string.length < length) {
     return string+'...'
   }
  var finalString = ''
  for (var i = 0; i <length; i++) {
    finalString += string[i]
  }
  finalString+= '...'

  return finalString
}
