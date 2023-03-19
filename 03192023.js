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

// Two arrays containing strings.
// Return sorted array1 containing only strings that are included in arr2. If no strings are included, return an empty array.

// Filter arr1 to get elements that are only present in arr2.
// Sort lexigraphically and return.