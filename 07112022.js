// Add spacing to camel casing
// Add spaces to camelCased strings. Don't adjust the casing of any letters.

function solution(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) ? result += ' ' + string[i] : result += string[i]
  }
  return result
}

// The parameter is a string.
// Return the string with spaces, if applicable.
// 'javascriptIsFun' -> 'javascript Is Fun'
// 'javascriptisfun' -> 'javascriptisfun'
// Declare an empty string called result.
// Iterate through the string.
// If the element codechar is 65-91, insert ' ' + the letter, else return the letter only.
// Return the result.