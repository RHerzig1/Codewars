// Count vowels in string
// Write a function that accepts a string of random letters and counts the number of consecutive vowels, in order of ['a', 'e', 'i', 'o', 'u'].

function getTheVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0
  for (let letter of [...word]) {
    if (letter === vowels[count % vowels.length]) {
      count++
    }
  }
  return count
}

// The parameter is a string containing random lower-case letters.
// Return an integer, the count of vowels in the order requested.
// Declare a vowels variable equal to the vowels array.
// Declare a count variable equal to 0.
// Split the string into an array.
// Iterate through the array.
// If the current element equals vowels[count], then count++.
// At the end, return count.