// Count the number of jewels.

function numJewelsInStones(jewels: string, stones: string): number {
  // Convert jewels to a set.
  const jewelsSet = new Set<string>([...jewels]);

  // Iterate stones. If it's also a jewel, increment the counter.
  let count = 0;

  for (const stone of stones) {
      if (jewelsSet.has(stone)) {
          count++;
      }
  }

  return count;
};

// console.log(numJewelsInStones("aA", "aAAbbbb"), 3); // "a", "A", and "A"
// console.log(numJewelsInStones("z", "ZZ"), 0);

// jewels: string. 1 <= jewels.length <= 50. Constists of uppercase and lowercase English letters. All unique.
// stones: string. 1 <= stones.length <= 50. Constists of uppercase and lowercase English letters.
// Return the number of stones that are also jewels.