// Convert a string into pig latin.

function pigIt(str){
  const arr = str.split(' ')

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != '!' && arr[i] != '.' && arr[i] != '?') {
      arr[i] = arr[i].slice(1) + arr[i][0] + 'ay'
    }
  }

  return arr.join(' ')
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('Hello world !'), 'elloHay orldway !')

// A string containing words, spaces, and puncuation.
// Return the string modified for pig latin. Move the first letter to the end and add "ay". Leave puncuation and casing unmodified.

// Split the string into an array of seperate words.
// Iterate through thte array.
// If the element length > 1, then replace the string with the word after applying pig latin rules.
// Return the string.