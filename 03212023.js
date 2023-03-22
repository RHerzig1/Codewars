// Write a function that parses a deadfish string. 

function parseDeadfish(data) {
  const result = []
  let count = 0
  
  for (const char of data) {
    if (char === 'i') count += 1
    if (char === 'd') count -= 1
    if (char === 's') count *= count
    if (char === 'o') result.push(count)
  }
  
  return result
}

console.log(parseDeadfish("iiisdoso"), [ 8, 64 ])

// A string containing lowercase letters. No spaces.
// Use the commands to convert the string into an array:
  // i increments the value (initially 0)
  // d decrements the value
  // s squares the value
  // o outputs the value into the return array
// Return the array.

// Declare a result and count variable.
// Iterate through the string. For each character, run the command.
// Return result.