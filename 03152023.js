// Write an algorithm that uses a library to decode morse code.

function decodeMorse(morseCode) {
  return morseCode.trim().split(/  | /).map(elem => MORSE_CODE[elem] || ' ').join('')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
console.log(decodeMorse('   .... . -.--   '), 'HEY')

// A string containing morse code.
// Return a string containing the converted morse code.

// Trim the parameter and split.
// Map each element through the MORSE_CODE library.
// Join and return.