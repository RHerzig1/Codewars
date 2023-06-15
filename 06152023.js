// Write a function that takes an array of integers and calculates them as exponents.

function lastDigit(arr) {
  if (arr.length === 0) return 1;
  if (arr.length === 1) return arr[0] % 10;

  let temp = null;
  const [prev, curr] = [arr.pop(), arr.pop()];

  if (prev === 0) temp = 1;
  else if (prev === 1) temp = curr;
  else
    temp = Math.pow(
      curr < 20 ? curr : (curr % 20) + 20,
      prev < 4 ? prev : (prev % 4) + 4
    );

  arr.push(temp);
  return lastDigit(arr);
}

console.log(lastDigit([]), 1);
console.log(lastDigit([0]), 0);
console.log(lastDigit([0, 0]), 1);
console.log(lastDigit([0, 0, 0]), 0);
console.log(lastDigit([3, 4, 2]), 1);
console.log(lastDigit([12, 30, 21]), 6);

// An array containing 0 or more positive integers.
// Return the last digit of the total calculate: arr[0] ^ (arr[1] ^ (arr[2] ^ arr[...])).
