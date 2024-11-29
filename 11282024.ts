// Return the k closest elements to x.

function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;

  // Narrow the range using binary search
  while (right - left >= k) {
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }

  // The closest `k` elements are now in the range [left, right]
  return arr.slice(left, left + k);
}

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4]);
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1), [1, 1, 2, 3]);
console.log(findClosestElements([3, 5, 6, 8, 10, 12, 15], 3, 9), [6, 8, 10]);
console.log(findClosestElements([1, 2, 3, 8, 10, 12, 15], 3, 9), [8, 10, 12]);
console.log(findClosestElements([-2, -1, 1, 2, 3, 4, 5], 7, 3), [-2, -1, 1, 2, 3, 4, 5]);
// https://leetcode.com/problems/find-k-closest-elements

// arr: number[]. 1 <= arr.length <= 10^4. -10^4 <= arr[i] <= 10^4. Nondescending order. Contains duplicates.
// k: number. 1 <= k <= arr.length. Length of subarray.
// x: number. -10^4 <= x <= 10^4. Target number.
// Return the k closest elements to x.
//   Integer a is closer than integer b if:
//   (|a - x| < |b - x|) or (|a - x| == |b - x| and a < b)
