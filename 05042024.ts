// Write a function that returns the missing letter from an array of consecutive letters.

function findMissingLetter(array: string[]): string {
  const charCodeArray = array.map((elem) => elem.charCodeAt(0));

  let charCode = charCodeArray[0];
  let index = 0;

  while (charCodeArray[index] === charCode) {
    charCode++;
    index++;
  }

  return String.fromCharCode(charCode);
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");

// array: string[]. 2 <= array.length <= 100. array[i] is always an English letter. All uppercase or lowercase.
// Return the letter missing from the consecutive array of letters.

// Convert the array into a list of charCodes.
// Find the charcode at index 1.
// Iterate through the list and confirm that each charcode is +1 from the previous.
// When it's not, return the missing letter.
