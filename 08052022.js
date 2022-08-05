// Count keystrokes in T9 emulation
// Flip phones used T9 (predictive text entry) software to type characters. In this system, each number on the keypad corresponded to 3 or 4 letters. The user selects a letter by pressing the same key multiple times to cycle through. Calculate the number of presses it'll take to type the provided string.

function presses(phrase) {
  const keyboard = {
    1: ['1'],
    2: ['a', 'b', 'c', '2'],
    3: ['d', 'e', 'f', '3'],
    4: ['g', 'h', 'i', '4'],
    5: ['j', 'k', 'l', '5'],
    6: ['m', 'n', 'o', '6'],
    7: ['p', 'q', 'r', 's', '7'],
    8: ['t', 'u', 'v', '8'],
    9: ['w', 'x', 'y', 'z', '9'],
    0: [' ', '0']
  }

  phrase = phrase.toLowerCase()
  let count = 0

  for (let i = 0; i < phrase.length; i++) {
      for (key in keyboard) {
        if (keyboard[key].includes(phrase[i])) {
          count += keyboard[key].indexOf(phrase[i]) + 1
          break
        }
      }
  }
  
  return count
}

// The parameter is a string of words.
// Return the total number of key presses it would take to type the parameter. Ignore punctuation and capitalized letters will require the same number of key presses as lowercase letters. Spaces count as 1 keys troke.
// "LOL" -> 9
// Create an object that maps out the keyboard. Set values to arrays.
// Convert the string to lowercase.
// Declare a count variable, set it equal to 0.
// Iterate through the parameter. For each character, find the match in the object and add the index + 1 to the count.
// After iterating, return the count.