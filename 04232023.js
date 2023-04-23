// Write a function that determines whether a string ends with the provided characters.

// function hasMatchingEnd(str, ending){
//   return str.slice(str.length-ending.length) === ending;
// }

function hasMatchingEnd(str, ending){
  return str.endsWith(ending);
}

console.log(hasMatchingEnd('hello', 'lo'), true)
console.log(hasMatchingEnd('hello', 'world'), false)
console.log(hasMatchingEnd('hello', ''), true)
console.log(hasMatchingEnd('', ''), true)
console.log(hasMatchingEnd('', 'world'), false)

// Two parameters. Both strings containing lowercase characters.
// Return true or false indicating whether param1 ends with param2.

// Use the endsWith() method.