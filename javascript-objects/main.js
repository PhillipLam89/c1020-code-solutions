/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Phillip',
  lastName: 'Lam',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('The full name is: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'teacher';

console.log('Does this student live in Irvine?: ', student.livesInIrvine);
console.log("What was this student's previous job?: ", student.previousOccupation);

var vehicle = {
  make: 'Nissan',
  model: 'Rogue',
  year: 2019
};
vehicle['color'] = 'dark green';
vehicle['isConvertible'] = false;

console.log('Color of car: ', vehicle['color']);
console.log('Is it a convertible? ', vehicle['isConvertible']);
console.log('Vehicle object: ', vehicle);

var pet = {
  name: 'Woody',
  type: 'Shih Tzu mix'
};
delete pet.name;
delete pet.type;
console.log('updated pet object: ', pet);
