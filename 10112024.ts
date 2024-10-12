// Maximum 69 number.

function maximum69Number(num: number): number {
  const arr = String(num).split("");

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];

    if (elem === "6") {
      arr[i] = "9";
      break;
    }
  }

  return Number(arr.join(""));
}

console.log(maximum69Number(9669), 9969);
console.log(maximum69Number(9996), 9999);
console.log(maximum69Number(9999), 9999);
// https://leetcode.com/problems/maximum-69-number/

// num: number. 1 <= num <= 10^4. Consists only of 6 and 9.
// Return the largest number possible after swapping, at most, one digit with a 6 or 9.
