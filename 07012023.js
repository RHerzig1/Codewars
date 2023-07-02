// Write a function that uses currying to chain functions.

function add(n) {
  function sum(x) {
    return add(n + x);
  }

  sum.valueOf = () => n;

  return sum;
}

console.log(add(1)(2)(3), 3);
console.log(add(1)(2)(3)(4), 10);
console.log(add(1), 1);

let addTwo = add(2);
console.log(addTwo, 2);
console.log(addTwo + 5, 7);
console.log(addTwo(3), 5);
console.log(addTwo(3)(5), 10);

// A positive integer.
// Return the sum of integers. Or just the integer if only one is passed in.