// Write an optimized algorithm that checks if a str1 can be rearranged to create str2.

function scramble(str1, str2) {
  const charMap = new Map()
  for (const char of str1) {
    charMap.set(char, charMap.get(char) + 1 || 1)
  }
  
  for (const char of str2) {
    if (charMap.get(char) > 0) charMap.set(char, charMap.get(char) - 1)
    else return false
  }

  return true
}

console.log(scramble('rkqodlw', 'world'), true)
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true)
console.log(scramble('katas', 'steak'), false)

// Two strings of lowercase characters. No puncutation. Never empty.
// Return Boolean indicating whether a portion the characters from the first string can create the second string.

// Create a charMap for str1 to count all characters.
// Iterate through str2, for each char, remove 1 from charMap.
// If charmap value goes below 0, return false.
// After iterating, return true.