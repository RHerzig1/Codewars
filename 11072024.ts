// Decode an array using XOR.

function decode(encoded: number[], first: number): number[] {
  const decoded = [first, ...encoded];

  for (let i = 1; i < decoded.length; i++) {
    const a = decoded[i - 1];
    const b = decoded[i];
    const result = a ^ b;

    decoded[i] = result;
  }

  return decoded;
}

console.log(decode([1, 2, 3], 1), [1, 0, 2, 1]);
console.log(decode([6, 2, 7, 3], 4), [4, 2, 0, 7, 4]);
// https://leetcode.com/problems/decode-xored-array/

// encoded: number[]. 2 <= encoded.length <= 10^4. 0 <= encoded[i] <= 10^5.
// first: number. 0 <= first <= 10^5.
// Return the result of using the XOR operator on adjacent elements of the array. Start the decoded array with decoded[0] = first.
// The XOR operator is A ^ B.
