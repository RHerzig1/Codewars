// Summarize the range of values in an array.

function summaryRanges(nums: number[]): string[] {
  const summary: string[] = [];
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    const prev = nums[i - 1];
    const curr = nums[i];
    const next = nums[i + 1];

    // curr is the last value of the range
    if (next !== curr + 1) {
      // If is a range of values, format "start->curr"
      if (prev === curr - 1) {
        summary.push(`${start}->${curr}`);
      } else {
        summary.push(`${curr}`);
      }

      // Reset start
      start = next;
    }
  }

  return summary;
}

// console.log(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);
// console.log(summaryRanges([0, 2, 4, 6]), ["0", "2", "4", "6"]);
// console.log(summaryRanges([0, 1, 2, 3, 4, 5, 6]), ["0->6"]);
// console.log(summaryRanges([0, 1, 2, 4, 5, 6]), ["0->2", "4-6"]);
console.log(summaryRanges([1, 2]), ["1->2"]);
// https://leetcode.com/problems/summary-ranges/

// nums: number[]. 0 <= nums.length <= 20. -2^31 <= nums[i] <= 2^31 - 1. All values are unique. Sorted in ascending order.
// Return an array (string[]) that summarizes the range of all values in nums. Do not include values that aren't in nums.

// Iterate nums. Track whether values are incremental.
// If so, format the range.
// Else, push the number (as a string) into the summary.
