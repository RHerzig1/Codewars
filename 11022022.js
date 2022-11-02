// Sort string of words by last character

function last(x) {
  const result = x.split(' ').sort((a, b) => a.at(-1) >= b.at(-1) ? 1 : -1)
  return result
}

console.log(last('hello world')) // ['world', 'hello']
console.log(last('water coffee soda tea')) // ['soda', 'tea', 'coffee', 'water']

// The parameter is a string of words and spaces. All lowercase, no punctuation, nothing funny. All inputs are valid.
// Return an array where each word is an element. Sort the array in ascending order by last character. If multiple elements have the same last character, keep them in their original, relative, order.

// Create a lower-case alphabet array.
// Create an empty results array.
// Split the string into an array of words.
// Loop through the array of words and push elements into the result array if they match the alphabet array.