// Write an algorithm that calculates and returns the hamming distance of two strings of equal length.

function hammingDistance(stringA, stringB) {
  if (stringA.length != stringB.length) throw new Error('Strings do not have equal length')

  let distance = 0
  for (let i = 0; i < stringA.length; i++) {
    if (stringA[i].toLowerCase() != stringB[i].toLowerCase()) {
      distance++
    }
  }
  return distance
}

console.log(hammingDistance('racecar', 'racecar'), 0)
console.log(hammingDistance('racecar', 'abcdefg'), 6)
console.log(hammingDistance('abcdefg', 'abczxwy'), 4)
console.log(hammingDistance('', ''), 0)

// Two strings of equal length. May contain upper or lower case letters. No numbers, no special characters.
// Return an integer indicating the hamming distance of the two strings.
// The hamming distance is the number of characters at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

// Declare a distance variable equal to 0.
// Iterate through both strings and compare characters.
// If they're not equal, increment distance +1.
// Return distance.