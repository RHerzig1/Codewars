// Write a function that rounds a number up to the nearest mulitple of 5.

function roundToNext5(num) {
  while (num % 5 !== 0) {
    num++;
  }

  return num;
}

console.log(roundToNext5(0), 0);
console.log(roundToNext5(1), 5);
console.log(roundToNext5(4), 5);
console.log(roundToNext5(5), 5);
console.log(roundToNext5(104), 105);
console.log(roundToNext5(-1), 0);
console.log(roundToNext5(-6), -5);

// A positive or negative integer.
// Round the number up to the nearest multiple of 5.

// Using a while loop, increment the number until it's evenly divisible by 5.
