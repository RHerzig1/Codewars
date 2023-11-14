// Write a function that takes a function and caches the result for each set of arguments.

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = String(args);
    if (Object.hasOwn(cache, key)) {
      return cache[key];
    }

    const value = fn(...args);
    cache[key] = value;
    callCount++
    return value;
  };
}

const example = memoize((a, b) => a + b);
let callCount = 0;
console.log(example(1, 2), 3);
console.log(example(1, 2), 3);
console.log(example(1, 5), 6);
console.log(callCount, 2)

// A function. Always a valid functions that will take a integer(s) and return an integer.
// Pass in integer(s). Apply them to the function. Integers are always valid and there's always the correct number.
// Return the value calculated by the provided function and integers. Cache each run and avoid increasing the counter if the parameters have already been calculated.
