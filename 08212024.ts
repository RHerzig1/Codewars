// Complete the FizzBuzz challenge.

function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(`${i}`);
    }
  }

  return result;
}

console.log(fizzBuzz(3), ["1", "2", "Fizz"]);
console.log(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
console.log(fizzBuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
// https://leetcode.com/problems/fizz-buzz/

// n: number. 1 <= n <= 10^4.
// Return an array (string[]) to complete the FizzBuzz challenge.
