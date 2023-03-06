// Write an algorithm that finds the missing letter of an array.

function findMissingLetter(arr) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
  if (arr[0] === arr[0].toUpperCase()) alpha = alpha.map(char => char.toUpperCase())
  
  const index = alpha.indexOf(arr[0])
  
  for (let i = 0; i < alpha.length; i++) {
    if (arr[i] != alpha[i + index]) return alpha[i + index]
  }
}

console.log(findMissingLetter(['a','b','c','d','f']), 'e')
console.log(findMissingLetter(['O','Q','R','S']), 'P')

// An array of english letters. All lowercase or uppercase. All in order except always missing a letter.
// Return the missing letter.

// Create an array of a alphabet. If the parameter is uppercase, make the alphabet uppercase as well.
// Iterate through the parameter and match it to the alphabet. When it doesn't match, return the alphabet character.