// Write a function that chains an array of callback functions.

function chainFunctions(functionArr) {
  return function (x) {
    for (let i = functionArr.length - 1; i >= 0; i--) {
      x = functionArr[i](x);
    }

    return x;
  };
}

const example = chainFunctions([x => x * 10, x => x + 1])
console.log(example(0), 10)
console.log(example(3), 40)

// An array of functions. 0 <= arr.length >= 1000. Always valid functions that will take an integer and return an integer.
// Pass in an integer and run it through the chain from right to left. Return the final calculation.
