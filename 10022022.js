 // Fix mismatched characters and letters in string

function replaceCharacters(message) {
  const characters = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q']
  message = [...message]
  for (let i = 0; i < message.length; i++) {
    if (characters.includes(message[i])) {
      message[i] = characters.indexOf(message[i])
    }
    else if (Number(message[i])) {
      message[i] = characters[message[i]]
    }
  }
  return message.join('')
}

replaceCharacters("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")
 
 // The parameter is a non-empty string containing letters, spaces, and numbers.
 // Return the string with the mismatched characters corrected. Use the reference to know what to replace.
 // "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." -> "PRO-TIP #498: IT'S NICE TO SAY HELLO."
 // Create an array containing the mismatched letters (in order).
 // Split the parameter string into an array where each character is an element.
 // Iterate through the array using a for loop.
 // If the mismatched letters array contains the current element, replace it with it's index.
 // Else if the current element is a number, replace it with it's counterpart from the mismatched letters array.
 // Join the array and return it.