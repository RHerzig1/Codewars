// Write a function that alternates the casing of each letter of a string.

function toWeirdCase(string){
  const result = []
  let count = 0
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result.push(' ')
      count = 0
    }
    else if (count % 2 === 0) {
      result.push(string[i].toUpperCase())
      count ++
    }
    else if (count % 2 !== 0) {
      result.push(string[i].toLowerCase())
      count++
    }
  }
  
  return result.join('')
}

console.log(toWeirdCase("String"), "StRiNg")
console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe")

// A string of letters and spaces. May be uppercase or lowercase.
// Return the string with alternate casing. Each word starts with uppercase.

// Declare an empty results variable.
// Declare a count variable equal to 0.
// For each letter of the string, push uppercase or lowercase into the array. If it's a space, insert a space.
// Join and return the result array.