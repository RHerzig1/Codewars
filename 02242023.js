// Use recursion to return the running sum of an array.

function runningSum(nums) {
  const result = [nums[0]];

  function recursive(i) {
    if (nums.length <= i) return;
    else result.push(nums[i] + result[i - 1]);
    recursive(i + 1);
  }
  recursive(1);

  return result;
}

console.log(runningSum([1, 2, 3, 4, 5]), [1, 3, 6, 10, 15]);
console.log(runningSum([10, 5, 2]), [10, 15, 17]);

// Take an array of integers.
// Return an array of integers, where each integer is a running sum of the integers before it.

// Declare a result variable equal to an array.
// Write a function for the recursive case.
// Call the recursive function.
// Return the resulting array.