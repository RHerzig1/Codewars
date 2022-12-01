// Find the index of missing vowel from string

function absentVowel(x) {
  let vowels = [...'aeiou']
  vowels.forEach((elem, index) => {
    if (![...x].includes(elem)) {
      return index
    }
  })
}

// A string of words. Always containing all but 1 vowel. Ignore capitalization. Always valid entry.
// Return the index of the missing vowel. Use the reference: 'aeiou'.

// Iterate through the array of vowels.
// For each vowel, iterate through the string. If the vowel is not found, return the index of that vowel.