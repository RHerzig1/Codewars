// Abbreviate words by replacing letters with letter count
// In the provided string, replace internal letters of the word(s) with a count of the removed letters.

function abbreviate(string) {
  const results = []
  const letterTest = function(letter) {
    return letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122 || letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90 ? true : false
  }
  let letterCount = 0
  string = [...string]
  for (let i = 0; i < string.length; i++) {
    if (letterTest(string[i]) === true && letterCount === 0) {
      letterCount++
      results.push(string[i])
    }
    else if (letterTest(string[i + 1]) === false && letterCount === 0) {
      results.push(letterCount)
      letterCount = 0
    }
    else if (letterTest(string[i]) === true) {
      letterCount++
    }
  }
  return results
}

// The parameter is a string containing at least one word.
// Return a string, but convert words longer than 3 letters into "first letter" "count of interior letters" "final letter" format. Preserve capitalization and punctuation.
// "JavaScript is really fun!" -> "J8t is r4y fun!"
// Declare a result variable with a value of [].
// Declare a letterCount variable with a value of 0.
// Split the string into an array and iterate through it.
// If it's a letter and letterCount === 0, then letterCount++ and push it to the results array.
// Else if it's a letter and letterCounnt > 0, then letterCount++.
// If the next letter is 