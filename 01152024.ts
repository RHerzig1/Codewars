// Write an function that, given an array and integer, returns the index at which the integer should appear in the sorted array.

export function findSortedIndex(arr: number[], num: number): number {
  arr = arr.sort((a, b) => a - b);
  let index: number = 0;
  
  for (const elem of arr) {
    if (elem > num) {
      break;
    }

    index++;
  }

  return index;
}

console.log(findSortedIndex([1, 2, 3, 5], 4), 3);
console.log(findSortedIndex([5, 2, 3, 1], 4), 3);
console.log(findSortedIndex([-5, 2, 3, -1, 5, 6], 1), 2);
console.log(findSortedIndex([], 0), 0);

// arr: number[]. 0 <= arr.length <= 100. Numbers are always positive or negative integers. May be sorted in any order. Always valid.
// num: number. -999 <= number <= 999. Always an integer. Will never be in arr. Always valid.
// Return a number indicated the index where num should appear in the sorted arr.

// Sort the array.
// Declare a counter variable equal to 0.
// Iterate through the array and increment counter if the element is less than num.
// Else return the counter.
