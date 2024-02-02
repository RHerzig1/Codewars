// Write a function that returns the numbers whos product equals the sum of the others in O(n) time complexity.

function removeNb(num: number): number[][] {
  const totalSum = (num * (num + 1)) / 2;
  const result: number[][] = [];

  for (let i = 1; i <= num - 1; i++) {
    const difference = totalSum - i;
    const j = difference / (i + 1);

    if (Number.isInteger(j) && j <= num) {
      const sum = totalSum - i - j;
      const product = i * j; 

      if (sum === product) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

console.log(removeNb(26), [[15,21],[21,15]]);
console.log(removeNb(101), [[55,91],[91,55]]);
console.log(removeNb(102), [[70,73],[73,70]]);
console.log(removeNb(110), [[70,85],[85,70]]);

// num: number. 0 > num. Always an integer and valid number. Num may be a very large number.
// Return: number[][]. Each inner-array contains the pair of numbers whos product equals the sum of the rest.

// Calculate the sum of all the numbers.
// Create a results array.
// Iterate two pointers and calculate whether they pass the conditions. If so, push them into the array.
// Return the result.
