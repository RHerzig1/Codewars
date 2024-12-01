// Count alternating color patterns in circular array.

function numberOfAlternatingGroups(colors: number[]): number {
  let count = 0;

  for (let i = 0; i < colors.length; i++) {
    const prev = colors.at(i - 1) ?? colors.at(-1);
    const curr = colors.at(i);
    const next = colors.at(i + 1) ?? colors.at(0);

    if (prev === next && prev !== curr) {
      count++;
    }
  }

  return count;
}

console.log(numberOfAlternatingGroups([1, 1, 1]), 0);
console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1]), 3);
// https://leetcode.com/problems/alternating-groups-i

// colors: number[]. 3 <= colors.length <= 100. 0 <= colors[i] <= 1.
// Return a count of 101 and 010 alternating color patterns. The array is circular, so includ the first and last elements together.
