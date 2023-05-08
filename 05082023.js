// Write a function that removes commented text from a string.

function removeCommentedText(input, markers) {
  const arr = input.split('\n')
  const result = []
  let line = ''
  
  for (const elem of arr) {
    for (const char of elem) {
      if (markers.includes(char)) {
        break
      }
      line = line + char
    }
    line = line.trimEnd()
    result.push(line)
    line = ''
  }
  
  return result.join('\n')
};

console.log(removeCommentedText("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "apples, plums\npears\noranges")

// A string of English characters. Split into lines using \n.
// An array of commenting characters.
// Return the string with the commented text removed.

// Split input into an array of lines.
// Declare an empty string line variable.
// Declare an empty array result variable.
// Iterate through each line.
// Iterate through each character. If the markers contains that character, break. Else, push into line.
// Trim and push line into the result array and reset to an empty string.
// After iterating through the array, join and return result.