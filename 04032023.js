// Write a function that solves the card challenge from the movie X plus Y.

function xPlusY(n) {
  const arr = Array.from(n).map(Number);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      arr[i] = 0;
      arr[i + 1] = arr[i + 1] === 0 ? 1 : 0;
      count++;
    }
  }

  return count;
}

console.log(xPlusY("0"), 0);
console.log(xPlusY("1"), 1);
console.log(xPlusY("011101010101"), 6);

// A string of 1s and 0s. '1' represents a card facing up, '0' represents a card facing down. Thet length of the string is random.
// Return a positive integer indicating the minimum number of turns needed to turn all the cards facing down.
// When flipping over a card, the left card must be '1'. Each flip also flips the adjacent card to the right.

// Split the string into an array of numbers.
// Declare a count variable equal to 0.
// Iterate through the array.
// If an element is '1', flip that card plus the one to the righ. Increment the count variable.
// After iterating, return count.
