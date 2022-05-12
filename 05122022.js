// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

function last (words) {
  return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

last('take me to semynak')

// P: A string of words
// R: An array of words, sorted alphabetically by the last letter.
// E: 'take me to semynak' -> ['take', 'me', 'semynak', 'to']
// P: 

// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript