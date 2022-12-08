// Return char count of string using reference chars

function charCount(str1, str2) {
  const charMap = {}
  let count = 0

  for (let char of str1) {
    charMap[char] = true
  }
 
  for (let char of str2) {
    if (charMap[char]) count++
  }

  return count
}

console.log(charCount('aA', 'aAAbbb'), 3)
console.log(charCount('a', 'AAbbb'), 0)
console.log(charCount('aAbB', 'aaaAAAbbbBBBcccCCCCdddDDD'), 12)

// Two parameters - strings. The first string is a reference and the second string are the chars we're counting. Lengths are > 0. English letters. Case sensitive.
// Return a count of referenced chars.

// Create a character map out of str2. Only include chars that are in str1.
// Iterate through the character map, add all values.
// Return the sum.