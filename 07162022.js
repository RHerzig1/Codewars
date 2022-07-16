// Capitalize each letter of a string individually
// Using the lowercase string provided, return an array where each element contains a different capital letter, starting from left to right. Skip whitespaces.

function wave(str){
  const wave = []
  for (let i = 0; i <= str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      let character = str[i].toUpperCase()
      let half1 = str.slice(0, i)
      let half2 = str.slice(i + 1)
      wave.push(half1 + character + half2)
    }
  }
  return wave
}

// The parameter is a lowercase string.
// Return an array.
// 'code' -> ['Code', 'cOde', 'coDe', 'codE']
// Declare an empty array.
// Iterate throught the string.
// If the selected character is a-z, capitalize it and push that word into the array.
// Else, move onto the next word.
// Return the array.