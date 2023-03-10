// Write an algorithm that deciphers the secret string.

function decipherString(str) {
  const result = str.split(" ");

  for (let i = 0; i < result.length; i++) {
    const zero = String.fromCharCode(parseFloat(result[i]));
    const letters = result[i].replace(/\d+/g, "");

    if (letters.length === 0) {
      result[i] = zero;
      continue;
    }

    if (letters.length === 1) {
      result[i] = zero + letters;
      continue;
    }

    const one = letters[letters.length - 1];
    const last = letters[0];

    result[i] = zero + one + letters.slice(1, letters.length - 1) + last;
  }

  return result.join(" ");
}

console.log(decipherString("72olle 103doo 100ya"), "Hello good day");
console.log(decipherString("82yade 115te 103o"), "Ready set go");
console.log(decipherString(""), "");

// A string containing deciphered words seperated by a space. All letters are lowercase.
// Correct and return the string. For each string, convert the character code to it's character value and swap the 2nd and last characters.

// Split the string into an array of words.
// Iterate through the array.
// Decipher the code.
// Join and return the string.
