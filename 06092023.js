// Write a function that transforms a string into alternate uppercase and lowercase letters.

function alternateCasing(str) {
  const odd = [...str].map((char, index) => index % 2 === 1 ? char.toUpperCase() : char).join("");
  const even = [...str].map((char, index) => index % 2 === 0 ? char.toUpperCase() : char).join("");

  return [even, odd];
}

console.log(alternateCasing('hello'), ['HeLlO', 'hElLo'])

// A string of lower case letters. No spaces, numbers or other characters. Never empty.
// Return an array containing the string in alternate uppercase and lowercase letters, then another string that is lowercase and uppercase.

// Split the string and iterate through it, changing the case for check even and odd index.
// Return both resultsas an array.