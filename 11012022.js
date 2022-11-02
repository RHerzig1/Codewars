// Reverse word order and letter casing of string

function transformString(str) {
  let transformedString = str.split(' ').reverse().join(' ')
  transformesString = [...transformedString].map(char => char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase()).join('')

  return transformesString
}

console.log(transformString('Hello world')) // 'WORLD hELLO'

// The parameter is a string containing only English letters and spaces. There may be multiple consecutive spaces or tailing spaces.
// Return a new string that has been transformed: Change the case of every character. Reverse the order of the words.