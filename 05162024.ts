// Write a function that uses binary search to calculate the slowest speed Koko can eat bananas before the guards return.

// function minEatingSpeed(piles: number[], h: number): number {
//   let speed = 0;
//   let currTime = 0;

//   while (currTime > h || currTime === 0) {
//     speed++;
//     const time = piles.reduce((a, c) => a + Math.ceil(c / speed), 0);
//     currTime = time;
//   }

//   return speed;
// }

function minEatingSpeed(piles: number[], h: number): number {
  let left = 1;
  let right = Math.max(...piles);

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const time = piles.reduce((a, c) => a + Math.ceil(c / middle), 0);

    if (time > h) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 4), 8);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5), 30);
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6), 23);
// https://leetcode.com/problems/koko-eating-bananas/

// piles: number[]. Represents stacks of bananas. 1 <= piles.length <= 10^4. 1 <= piles[i] <= 10^9.
// h: number. Reprents the amount of time to eat the bananas. piles.length <= h <= 10^9.
// Return the minimum number of bananas koko can eat before the guards return.

// Use binary search to find the slowest speed less than h.
// 1 is the slowest overall speed, and the largest pile in one hour is the fastest.
