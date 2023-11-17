// Write a function that takes a callback function, which can only be called a single time.

function once(fn) {
  let first = true;

  return function (...args) {
    if (first) {
      first = false;
      return fn(...args);
    }
  };
}

const example = once((...x) => x.reduce((a, c) => a + c, 0))
console.log(example(1, 2, 3, 4, 5), 15);
console.log(example(1, 2, 3, 4, 5), undefined);

// A function that takes in arguments and adds them together. Returns the sum.
// Write a function within the closure that can only run once.
// Return the sum the first run. Else return undefined.
