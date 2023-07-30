// Write a function that recovers a secret string from random triplets.

function recoverSecret(triplets) {
  const result = [];

  while (triplets.some((elem) => elem.length > 0)) {
    let first = [];
    let second = [];
    let third = [];
    let count = {};
    let next = "";

    for (const arr of triplets) {
      if (arr[0]) {
        first.push(arr[0]);
      }
      if (arr[1]) {
        second.push(arr[1]);
      }
      if (arr[2]) {
        third.push(arr[2]);
      }
    }

    for (const char of first) {
      count[char] = true;
    }

    for (const char of second) {
      if (count[char]) {
        count[char] = false;
      }
    }

    for (const char of third) {
      if (count[char]) {
        count[char] = false;
      }
    }

    for (const prop in count) {
      if (count[prop]) {
        next = prop;
        result.push(next);
      }
    }

    for (const arr of triplets) {
      if (arr[0] === next) {
        arr.shift();
      }
    }

    first = [];
    second = [];
    third = [];
    count = {};
  }

  return result.join("");
}

console.log(
  recoverSecret([
    ["t", "u", "p"],
    ["w", "h", "i"],
    ["t", "s", "u"],
    ["a", "t", "s"],
    ["h", "a", "p"],
    ["t", "i", "s"],
    ["w", "h", "s"],
  ]),
  "whatisup"
);

// An array of arrays. Each array contains 3 elements, which is a letter of the string in order. All valid.
// Decode the string and return it. Strings don't reuse letters.

// Declare a result array.
// Iterate through the parameter and group the first, second, and third into three arrays.
// Iterate through the first and cache each letter in an object with a count of 0.
// Iterate through the second and third and increment each count.
// Add the lowest count to the result.
// Shift() the arrays that start with that letter and repeat the process.
// Join and return the result.
