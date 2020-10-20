/* exported getStudentNames */
function getStudentNames(students) {
  var finalArray = [];
  for (var i = 0; i < students.length; i++) {
    finalArray.push(students[i].name);
  }
  return finalArray;
}
