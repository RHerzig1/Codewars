// Abbreviate words by replacing letters with letter count
// In the provided string, replace internal letters of the word(s) with a count of the removed letters.

function abbreviate(string) {
  return string.replace(/\w{4,}/g, word => {
    return word[0] + (word.length - 2) + word.slice(-1)
  })
}

// The parameter is a string containing at least one word.
// Return a string, but convert words longer than 3 letters into "first letter" "count of interior letters" "final letter" format. Preserve capitalization and punctuation.
// "JavaScript is really fun!" -> "J8t is r4y fun!"