// Find the maximum sum of a contiguous subsequence in an array of integers.

var maxSequence = function(arr) {
  let max_so_far = arr[0];
  let curr_max = arr[0];

  for (let i = 1; i < arr.length; i++) {
      curr_max = Math.max(arr[i], curr_max+arr[i]);
      max_so_far = Math.max(max_so_far, curr_max);
  }

  return max_so_far > 0 ? max_so_far : 0;
}

// An array containing positive and negative integers.
// Return the maximum sum of a contiguous subsequence in an array of integers (aka the largest possible sum adding up concurrent elements).
// ([-2, -3, 4, -1, -2, 1, 5, -3]) -> 7 (4 + -1 + -2 + 1 + 5)
// ([]) -> 0
// ([-1, -2, -3]) -> 0
// Use Kadane’s algorithm to calculate the return.