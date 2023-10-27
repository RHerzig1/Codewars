// Write a function that changes the casing of every other letter of a string.

function uglifyWord(str) {
  let result = "";
  let flag = true;

  for (let i = 0; i < str.length; i++) {
    if (/^[a-zA-Z]$/.test(str[i]) && flag) {
      result += str[i].toUpperCase();
      flag = !flag;
    } else if (/^[a-zA-Z]$/.test(str[i])) {
      result += str[i].toLowerCase();
      flag = !flag;
    } else {
      result += str[i];
      flag = true;
    }
  }

  return result;
}

console.log(uglifyWord("AAAA"), "AaAa");
console.log(uglifyWord("A-A-A-A"), "A-A-A-A");
console.log(uglifyWord("ababA-b"), "AbAbA-B");

// A string containing letters and symbols. Letters may be uppercase or lowercase. String will never be empty.
// Return the string with the casing modified. The first letter will always be uppercase. Every other increment is lowercase. Nonletter characters reset this count.

// Declare a result string and flag.
// Loop through the parameter. Convert each char and reset the flag as needed.
// Return the result.
