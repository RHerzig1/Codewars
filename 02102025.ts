// Join an array of numbers into the largest combination.

function largestArrangement(nums) {
  nums.sort((a, b) => sortNumbersForLargestArrangement(a, b));

  const result = nums.join(""); // No need to map to strings separately
  return result.startsWith("0") ? "0" : result; // Handle edge case where all elements are 0
}

function sortNumbersForLargestArrangement(num1, num2) {
  const order1 = `${num1}${num2}`;
  const order2 = `${num2}${num1}`;
  
  return order2.localeCompare(order1);
}

console.log(largestArrangement([1, 2, 3, 4]), 4321);
console.log(largestArrangement([0, 20, 91, 90, 93]), 939190200);
console.log(largestArrangement([0, 20, 910, 90, 93]), 9391090200);
console.log(largestArrangement([3487, 103559, 243]), 3487243103559);
console.log(largestArrangement([7, 78, 79, 72, 709, 7, 94]), 9479787772709);
console.log(largestArrangement([7, 72, 709, 7]), 7772709);
console.log(largestArrangement([8247, 824]), 8248247);

// nums: number[]. 1 <= nums.length <= 100. 0 <= nums[i] <= 99999.
// Return the largest number possible by arranging the numbers inside nums.
