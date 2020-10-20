/* eslint-disable no-unused-vars */
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript'
  }
    var finalString = word[0].toUpperCase()
    for (i=1; i<word.length; i++) {
      finalString += word[i].toLowerCase()
    }
    return finalString
}
