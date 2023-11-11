// Write a function that returns the length of the parameter provided.

function argumentLength(...args) {
  return args.length;
}

console.log(argumentLength(1, 2, 3, 4, 5), 5);
console.log(argumentLength(10, 20, 30), 3);
console.log(argumentLength(), 0);

// A collection of integers. 0 <= collection >= 1000. Always valid integers.
// Return a count of the number of integers that were passed into the function.
