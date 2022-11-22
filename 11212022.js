// Remove consecutive duplicate words from string

function removeConsecutiveDuplicates(string) {
  return string.split(' ').filter((elem, index, arr) => elem != arr[index + 1]).join(' ')
}

console.log(removeConsecutiveDuplicates('a b c d')) // 'a b c d'
console.log(removeConsecutiveDuplicates('a a b b c c d d')) // 'a b c d'
console.log(removeConsecutiveDuplicates('a a a b c c c d')) // 'a b c d'
console.log(removeConsecutiveDuplicates('a a b b c c d d c c b b a a')) // 'a b c d c b a'

// A string containing words seperated by a space. All lowercase. Always a string with at least 1 word.
// Return a string with the consecutive duplicate words removed.

// Split string into array.
// Create new array by filtering elements where elem + 1 != elem.
// Join and return.