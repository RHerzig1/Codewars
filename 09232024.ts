// Convert an integer into Roman numerals.

function highAndLow(numbers: string): string {
  const numbersArr = numbers.split(" ").map(Number);
  const high = Math.max(...numbersArr);
  const low = Math.min(...numbersArr);

  return `${high} ${low}`;
}

console.log(highAndLow("1 2 3 4 5"), "5 1");
console.log(highAndLow("1 2 -3 4 5"), "5 -3");
console.log(highAndLow("1 9 3 4 -5"), "9 -5");
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// numbers: string. Consists of numbers between -100 and 100 seperated by a space. Always contains at least two numbers.
// Return a string containing the max number and min number.