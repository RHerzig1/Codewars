// Remove spaces from string

function noSpace(x){
  let result = []
  for (let letter of [...x]) {
    if (letter !== ' ') result.push(letter)
  }
  return result.join('')
}

function noSpace(x){
  return x.split(' ').join('')
 }

// The parameter is a string.
// Return the string but without any spaces.
// 'hello world!' -> 'helloworld!'
// Declare a results variable equal to an empty array.
// Spread the parameter and use a for...of loop to iterate through it.
// If the letter does not equal ' ', push it to the array.
// Return the joined array.