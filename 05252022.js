// Create a function that takes an array of letters, and combines them into words in a sentence.

function arrAdder(arr) {
  let string = ''
  for (let i = 0; i < arr[0].length; i++) {
    for (array of arr) {
        string += array[i]
    }
    string += (' ')
  }
  return string.trim()
}

// An array of arrays.
// A string of words.
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ] -> "Just Live Life Man"
// Create an empty string to hold the characters.
// Use a for loop to get the value of [i]. This will be used to select the element.
// Use a for...of to iterate through the arrays. Combine with [i] above to iterate through index[0] of each array, for example.
// Concatenate the character from each index into the string.
// Finish the loop be concatenating a space (' ')
// After the for loop iterates throught the whole array, trim the string and return it.

// https://www.codewars.com/kata/59778cb1b061e877c50000cc