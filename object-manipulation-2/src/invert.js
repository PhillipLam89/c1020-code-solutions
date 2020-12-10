/* eslint-disable no-unused-vars */

function invert(source) {
  const reversed = {};
  for (const prop in source) {
    const value = source[prop];
    reversed[value] = prop;
  }
  return reversed;
}
