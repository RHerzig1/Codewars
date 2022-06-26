// Replace letters with position in alphabet

function alphabetPosition(text) {
  text = text.toLowerCase()
  let string = ''

  for (let letter in text) {
    if (text.charCodeAt(letter) >= 97 && text.charCodeAt(letter) <= 122) {
      string += text.charCodeAt(letter) - 96 + ' '
    }
  }
  return string.trim()
}

// A string containing letters and special characters.
// Return only the letters, and convert them to the number relative to their position in the alphabet.
// Make the parameter lower case.
// Filter out all characters that are not letters.
// Convert each letter into a number, callibrate the number, and concatenate into a string.
// Return the new string.