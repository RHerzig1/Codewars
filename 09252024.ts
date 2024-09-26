// Return a range of self dividing numbers.

function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = [];

  for (let i = left; i <= right; i++) {
    const digits = [...String(i)].map(Number);
    let isSelfDividing = true;

    for (const digit of digits) {
      if (i % digit !== 0) {
        isSelfDividing = false;
        break;
      }
    }

    if (isSelfDividing) {
      result.push(i);
    }
  }

  return result;
}

console.log(selfDividingNumbers(1, 22), [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]);
console.log(selfDividingNumbers(47, 85), [48, 55, 66, 77]);
// https://leetcode.com/problems/self-dividing-numbers/

// left: number. 1 <= left <= 10^4.
// right: number. 1 <= right <= 10^4.
// Return an array of integers that are self dividing.
// A self dividing integer has every digit dividing into it evenly.
