// Return an array containing the index of the vowels in the provided word.

function vowelIndices(word){
  word = word.toLowerCase().split('')
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  const vowelIndexes = []
  word.forEach((letter, index) => {
    if (vowels.includes(letter)) {
      vowelIndexes.push(index + 1)
    }
  })
  return vowelIndexes
}

// A string containing a single word.
// Return an array of the indexes of every vowel. The array is 1st-indexed.
// 'super' -> [2, 4]
// 'canada' -> [2, 4, 6]
// 'computer' -> [2, 5, 7]
// Split word so that each letter is an element of an array.
// Declare a new variable vowelIndexes = []
// Use the forEach method and the findIndex method to iterate throught the array and identify the indexes for all the vowels.
// Push each index + 1 to the vowelIndexes array.
// Return the array


// https://www.codewars.com/kata/5a1ee4dfffe75f0fcb000145