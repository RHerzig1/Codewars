// Create a function that takes a string and replaces each letter with the letter that occurs 13 places after. Special characters and numbers should not change.

function rot13(message){
  let result = ''
  
  for (let i = 0; i < message.length; i++) {
    let charCode = message.charCodeAt(i)
    
    // Loop through lowercase alphabet
    if (charCode >= 97 && charCode <= 122) {
      for (let i = 0; i <= 12; i++) {
        if (charCode < 122) {
          charCode += 1
        }
        else {
          charCode = 97
        }
      }
    }
    
    // Loop through uppercase alphabet
    else if (charCode >= 65 && charCode <= 90) {
      for (let i = 0; i <= 12; i++) {
        if (charCode < 90) {
          charCode += 1
        }
        else {
          charCode = 65
        }
      }
    }
    
    result += String.fromCharCode(charCode)
  }
  
  console.log(result)
  return result
}

// A string of characters. All lower case?
// A string of characters with all the letters changed, but the numbers and special characters kept the same.
// ('abc3') -> 'nop3'
// Create a for...of loop to iterate through the string.
// For each letter, take the charCode and assign it to a variable.
// If it's between xx and xx (letter charCodes)
// Using a for loop, add 1 to the charcode 13 times.
// If the charcode is more than xx, reset it to xx.
// Replace the old letter with the new letter.
// Return the completed word.