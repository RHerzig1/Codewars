// Count the employees who worked target hours or more.

function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  // Declare pointers.
  let left = 0;
  let right = hours.length - 1;
  hours = hours.sort((a, b) => a - b);

  // Binary search.
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (hours[middle] < target) {
        left = middle + 1;
    } else if (hours[middle] >= target) {
        right = middle - 1;
    }
  }

  return hours.length - left;
}

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2), 3);
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 1), 4);
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 3), 2);
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 2, 3, 4], 2), 4);
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6), 0);
// https://leetcode.com/problems/number-of-employees-who-met-the-target/

// hours: number[]. Hours worked, per employee. 1 <= hours.length <= 50. 0 <= hours[i] <= 10^5.
// target: number. Target number of hours. 0 <= target <= 10^5.
// Return a count of employees who worked at least target number of hours.
