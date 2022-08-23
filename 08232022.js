// Write a function to create classes
// Write a function that accepts an arbitrary number of arguments to output a new class.

function makeClass(...properties) {
  return function(...params) {
    for (let i = 0; i < properties.length; i++) {
      this[properties[i]] = params[i]
    }
  }
}