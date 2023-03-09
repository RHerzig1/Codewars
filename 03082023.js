// Write an algorithm that converts a string into camelCase.

function toCamelCase(str){
  let result = ''
  
  for (const char of str) {
    if (char === '-') result += '_'
    else result += char
  }
  
  result = result.split('_')
  
  for (let i = 1; i < result.length; i++) {
    result[i] = result[i][0].toUpperCase() + result[i].slice(1)
  }
  
  return result.join('')
}

console.log(toCamelCase("the-stealth-warrior"), "theStealthWarrior")
console.log(toCamelCase("The_Stealth_Warrior"), "TheStealthWarrior")
console.log(toCamelCase("The_Stealth-Warrior"), "TheStealthWarrior")
console.log(toCamelCase(""), "")

// A string consisting of words seperated by "-" or "_". Only one separator will be present. String may be empty.
// Return the string with all words concatanated and the first letters capitalized. The very first letter will remain it's previous state.

// Declare an empty result string.
// Iterate through the parameter. Push each char to the result, changing "-" to "_".
// Split by "_".
// For each element besides the first, capitalize the first character.
// Join and return.
