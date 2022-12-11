// Use divide and conquor to return index of element

const searchInsert = (arr, num) => {
  if (!arr || arr.length === 0) return -1;
  if (num < arr[0]) return 0;

  let start = 0;
  let end = arr.length;
  let mid;

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);
    if (num === arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid;
    } else {
      start = mid;
    }
  }

  if (num === arr[end]) return end;
  if (arr[end] < num) return end + 1;
  if (num === arr[start]) return start;
  return start + 1;
}

console.log(searchInsert([1, 3, 5, 6], 5), 2)
console.log(searchInsert([1, 3, 5, 6], 4), 2)
// 'start:', 0, 'end:', 3, 'guessIndex:', 1, 'target:', 4
// 'start:', 1, 'end:', 3, 'guessIndex:', 2, 'target:', 4
// 'start:', 1, 'end:', 2, 'guessIndex:', 0, 'target:', 4
console.log(searchInsert([1, 3, 5, 6], 7), 4)
console.log(searchInsert([1, 3], 2), 1)
// 'start:', 0, 'end:', 1, 'guessIndex:', 0, 'target:', 1
// 'start:', 0, 'end:', 1, 'guessIndex:', 0, 'target:', 1

// A sorted array of integers, length btwn 1 - 10**4. All values are unique and in ascending order.
// A target integer, whole number, positive or negative.
// Return the index of the target, or the index where it should be. Use O(log n) time complexity.