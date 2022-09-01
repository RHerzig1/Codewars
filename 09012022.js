// Sort string by last letter, preserving original order if letters match

function last (words) {
  return words.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))
}

// The parameter will be a string words seperated by spaces. No punctuation or numbers.
// Return an array containing all the words in the string, but sorted by their last letter. If there are matching letters in the array, preserve the original order among them.
// Split the string into an array where each word is an element.
// Use the sort method with a compare function.
// Compare the last letters of both parameters to sort by last letter.
// Return the result.