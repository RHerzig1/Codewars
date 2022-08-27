// Convert Polish letters with diacritics to English equivalent

function correctPolishLetters (string) {
  const conversion = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z'
  }
  const result = []
  for (let letter of [...string]) {
    conversion.hasOwnProperty(letter) ? result.push(conversion[letter]) : result.push(letter)
  }
  return result.join('')
}

// The parameter is a string containing Polish letters with diacritics.
// Return the string but convert the letters to English alphabet.
// Create an object containing the Polish letters with the English equivalent.
// Declare an empty array.
// Split the string into an array.
// Iterate through the array.
// If the letter is contained within the object, push its corresponding value into the array.
// Else, push the letter itself into the array.
// Return the joined array.