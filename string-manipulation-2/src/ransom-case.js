/* eslint-disable no-unused-vars */
function ransomCase(string) {
    var arr = string.toLowerCase().split('')
    for (var i = 1; i < arr.length; i= i+2) {
        arr[i] = arr[i].toUpperCase()
    }
    var finalString = arr.join('')
    return finalString
}
