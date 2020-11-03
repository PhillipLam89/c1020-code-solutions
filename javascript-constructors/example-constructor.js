function ExampleConstructor() {

}

console.log('prototype value:', ExampleConstructor.prototype);
console.log('type of prototype property:', typeof ExampleConstructor.prototype);

var newEx = new ExampleConstructor();
console.log('new isntance of ExampleConstructor', newEx);

var instance = newEx instanceof ExampleConstructor;
console.log('is newEx instance of ExConstructor ?:', instance);
