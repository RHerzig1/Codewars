// Write a function that returns the length of the largest palindrome in a string.

function longestPalindrome(str) {
  const arr = str
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(" ");
  let length = 0;

  for (const word of arr) {
    if (word.length <= length) {
      continue;
    }

    const reverse = word.split("").reverse().join("");
    if (word === reverse) {
      length = word.length;
    }
  }

  return length;
}

console.log(longestPalindrome("The racecar was faster than the kayak."), 7);

// A string containing words separated by spaces. Length >= 0.
// Return a number representing the length of the longest palindrome, or 0 if none exist. Ignore casing.

// Declare a length variable equal to 0.
// Split the string.
// Iterate through it.
// If the elem is a palidrome with a length greater than the count, reassign the count.
// Return the count.
