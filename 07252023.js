// Write a function that transforms an array using the Josephus permutation.

// function josephus(arr, num) {
//   const result = [];
//   let count = 1;

//   while (arr.length > 0) {
//     for (let i = 0; i < arr.length; i++) {
//       if (count % num === 0) {
//         const [elem] = arr.splice(i, 1);
//         result.push(elem);
//         i--;
//       }
//       count++;
//     }
//   }

//   return result;
// }

function josephus(arr, num) {
  const result = [];
  let index = 0;

  while (arr.length > 0) {
    index = (--index + num) % arr.length;
    result.push(...arr.splice(index, 1));
  }

  return result;
}

console.log(
  josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);
console.log(
  josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2),
  [2, 4, 6, 8, 10, 3, 7, 1, 9, 5]
);
console.log(josephus(["C", "o", "d", "e", "W", "a", "r", "s"], 4), [
  "e",
  "s",
  "W",
  "o",
  "C",
  "d",
  "r",
  "a",
]);
console.log(josephus([], 3), []);

// An array of integers or strings. Integers are valid numbers starting at 1 and incrementing by 1. Array may be empty.
// An integer representing the size of the gap while iterating through the array.
// Apply the Josephus permutation - push each numth element into a new array until arr is empty.

// Declare a results array to push each elem into.
// Declare a count variable equal to 1.
// While arr.length > 0
// Iterate with a for loop.
// Increment count.
// If (count) % num === 0, remove elem and push into result.
// Return result.
