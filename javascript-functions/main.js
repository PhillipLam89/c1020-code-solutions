function convertMinutesToSeconds(minutes) {
  return (minutes * 60);
}
console.log('2 Mins is equal to: ', convertMinutesToSeconds(2) + ' seconds.');

function greet(name) {
  return 'Hey, ' + name;
}
console.log('Greeting: ', greet('Cody') + '.');

function getArea(width, height) {
  return (width * height);
}
console.log('Area is equal to: ', getArea(17, 42) + ' units squared.');
var person = {
  firstName: 'Phillip',
  lastName: 'Lam'
};
function getFirstName(person) {
  return (person.firstName);
}
console.log('First name is: ', getFirstName(person));

var array = ['propane', 'and', 'propane', 'accessories'];

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return (array[lastIndex]);
}
console.log('The value of the last array index is:', getLastElement(array));
