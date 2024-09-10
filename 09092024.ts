// Kids with greatest number of candies.

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  const result: boolean[] = [];

  for (const candy of candies) {
    const hasGreatestNumber = candy + extraCandies >= max;
    result.push(hasGreatestNumber);
  }

  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3), [true, true, true, false, true]);
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1), [true, false, false, false, false]);
console.log(kidsWithCandies([12, 1, 12], 10), [true, false, true]);
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

// candies: number[]. 2 <= candies.length <= 100. 1 <= candies[i] <= 100.
// extraCandies: number. 1 <= extraCandies <= 50.
// Return a boolean array indicating whether each child, after add extraCandies to their individual candy stash, would have greatest or equal to greatest number of candies among the group.
