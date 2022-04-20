// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

let capitalizedWord = word => word.charAt(0).toUpperCase() + word.slice(1)

capitalizeWord('john')

// P: A string containing a word between 1-10 characters.
// R: Return the string containing the word, but with the first letter capitalized.
// E: capitalizeWord('john') -> 'John'
// P: Take the string, split it per letter, capitalize the first letter, then rejoin and return the word.