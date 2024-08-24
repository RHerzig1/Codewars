// Assign cookies.

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let gPointer = 0;
  let sPointer = 0;

  while (gPointer < g.length && sPointer < s.length) {
      if (g[gPointer] <= s[sPointer]) {
          gPointer++
      }

      sPointer++;
  }

  return gPointer;
};

console.log(findContentChildren([1, 2, 3], [1, 1]), 1);
console.log(findContentChildren([1, 2], [1, 2, 3]), 2);
// https://leetcode.com/problems/assign-cookies/

// g: number[]. 1 <= g.length <= 3 * 10^4. 1 <= g[i] <= 2^31 - 1. Greed level of each child.
// s: number[]. 0 <= s.length <= 3 * 10^4. 1 <= s[i] <= 2^31 - 1. Size of each cookie.
// Return the number of children who a cookie of their desired size or greater.
