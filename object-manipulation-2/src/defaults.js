/* eslint-disable no-unused-vars */
function defaults(target, source) {

  var sourcePropertyNames = [];
  var sourceValues = [];
  var targetPropertyNames = [];
  var targetValues = [];

  for (var key in source) {
    sourcePropertyNames.push(key);
    sourceValues.push(source[key]);
  }
  for (var key2 in target) {
    targetPropertyNames.push(key2);
    targetValues.push(target[key2]);
  }

  for (var i = 0; i < sourcePropertyNames.length; i++) {
    target[sourcePropertyNames[i]] = sourceValues[i]; // copying key value pairs from the source FIRST will prevent over-writing of existing key/value pairs
  }

  for (var j = 0; j < targetPropertyNames.length; j++) { // any duplicate key/value pairs will be replaced with the source object's value
    target[targetPropertyNames[j]] = targetValues[j];
  }

  return target;
}
