// Write a function that sorts characters on a string based off whether their indices are even or odd.

function sortMyString(str) {
  const arr = [...str];
  let even = arr.filter((elem, index) => index % 2 === 0).join("");
  let odd = arr.filter((elem, index) => index % 2 === 1).join("");
  return `${even} ${odd}`;
}

console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");

// A string of characters. Always upper or lowercase characters. No numbers or symbols. 0 <= length <= 100;
// Return a new string that has been sorted so all even indices are before the odd ones. Keep relative orders the same.

// Split the string into an array.
// Pair each element with it's index.
// Sort by that index.
// Remove the index, join, and return the result.
