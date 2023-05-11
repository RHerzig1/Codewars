// Write a function that randomly sorts an array of integers.

function sortRandom(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

console.log(sortRandom([1, 2, 3, 4, 5]));

// An array of integers. May be empty.
// Return an array with the integers sorted in a random order.

// Use the sort() method and Math.random to sort randomly.
