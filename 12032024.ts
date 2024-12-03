// Decrypt the code to defuse the bomb.

function decrypt(code: number[], k: number): number[] {
  if (k === 0) {
    return code.fill(0);
  } else if (k < 0) {
    code.reverse();
  }

  const result: number[] = [];
  let sum = 0;
  let a = 0;
  let b = 0;

  while (result.length < code.length) {
    // Cache a pointer value
    sum += code.at((a + 1) % code.length);

    if (Math.abs(b - a) + 1 === Math.abs(k)) {
      result.push(sum);
      sum -= code.at((b + 1) % code.length);
      b++;
    }

    // Increment a pointer
    a++;
  }

  return k > 0 ? result : result.reverse();
}

console.log(decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13]);
console.log(decrypt([1, 2, 3, 4], 0), [0, 0, 0, 0]);
console.log(decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13]);

// code: number[]. 1 <= code.length <= 100. 1 <= code[i] <= 100.
// k: number. -(code.length - 1) <= k <= code.length - 1.
// Decrypt the code to defuse the bomb.
//   If k > 0, replace the ith number with the sum of the next k numbers.
//   If k < 0, replace the ith number with the sum of the previous k numbers.
//   If k == 0, replace the ith number with 0.
