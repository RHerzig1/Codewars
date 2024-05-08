// Write a function that converts morse code into English.

// import { MORSE_CODE } from './preloaded';

export function decodeMorse(morseCode: string): string {
  const morseCodeArr = morseCode.split('   ').map(arr => arr.split(' '));
  
  const decodeArr = morseCodeArr.map(arr => arr.map(elem => MORSE_CODE[elem]));
  
  return decodeArr.map(arr => arr.join('')).join(' ').trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE');

// morseCode: string. Consists of spaces, ".", and "-". One space indicates a new letter. Three spaces indicates a new word.
// Return the English translation of the morse code.