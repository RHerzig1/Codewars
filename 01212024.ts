// Write a function that uses recursion to return the product of (num * (num - i)).

export function calcProduct(num: number, i: number = 1): number {
  if (i === num) {
    return num * num;
  }

  return (num * i) + calcProduct(num, i + 1);
}

console.log(calcProduct(3)); // (3 * 3) + (3 * (3 - 1)) + (3 * (3 - 2)) + (3 * (3 - 3)) = 9 + 6 + 3 + 0 = 18
console.log(calcProduct(5), 75);
console.log(calcProduct(6), 126);

// num: number. 0 <= num <= 100. Always a valid positive integer.
// Return the the sum of (num * num) + (num * (num - 1) + ... + (num * (num - num))).

// Use recursion.
// Base case:
// If (i === num), return 0.
// Recursive case:
// Else, return num * i + recursion(num, i + 1)
