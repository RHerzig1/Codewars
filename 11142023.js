// Write a function that takes two promises and adds the numbers that they return.

async function addTwoPromises(promise1, promise2) {
  const [value1, value2] = await Promise.all([promise1, promise2]);
  return value1 + value2;
}

const example = chainFunctions([x => x * 10, x => x + 1])
console.log(example(0), 10)
console.log(example(3), 40)

// An array of functions. 0 <= arr.length >= 1000. Always valid functions that will take an integer and return an integer.
// Pass in an integer and run it through the chain from right to left. Return the final calculation.
