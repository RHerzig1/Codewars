// Return count of vowels in string

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return [...str].filter(elem => vowels.includes(elem)).length
}

// The parameter consists of lowercase letters and/or spaces.
// Return an integer counting the number of vowels in the string. 'y' does not count as a vowel.
// 'abcdefg' -> 2
// Declare an array of vowels.
// Split the parameter.
// Filter out each element that is contained within the vowels array.
// Return the length of the filtered array.