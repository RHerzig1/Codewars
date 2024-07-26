// Return whether an array includes a value and it's double.

function checkIfExist(arr: number[]): boolean {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    const num1 = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      const num2 = arr[j];

      if (num1 > 0 && num1 * 2 === num2) {
        return true;
      }

      if (num1 < 0 && num1 / 2 === num2) {
        return true;
      }
    }
  }

  return false;
}

console.log(checkIfExist([10, 2, 5, 3]), true); // [2, 3, 5, 10]
console.log(checkIfExist([3, 1, 7, 11]), false);
console.log(checkIfExist([-10, 12, -20, -8, 15]), true); // [-20, -10, -8, 12, 15]
// https://leetcode.com/problems/check-if-n-and-its-double-exist/

// arr: number[]. 2 <= arr.length <= 500. -10^3 <= arr[i] <= 10^3.
// Return true or false whether arr has a value, in which the double also exists in arr.
