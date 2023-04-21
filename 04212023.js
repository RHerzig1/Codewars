// Write a function that returns the length of the shortest word from a string.

function findShortest(str) {
  const lengths = [];
  str.split(" ").forEach((elem) => {
    lengths.push(elem.length);
  });
  return Math.min(...lengths);
}

console.log(findShortest("hello world my friend"), 2);

// A string containing words seperated by a space.
// Return the length of the shortest word from the string.

// Declare an empty cache array.
// Split the string into an array.
// Iterate through the array. Push the length of each word into the cache.
// Use Math.min to return the smallest number of the cache.