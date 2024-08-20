// Guess the secret number using an API.

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let left = 0;
  let right = n;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const response = guess(middle);

    if (response === -1) {
      right = middle - 1;
    } else if (response === 1) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
}

// https://leetcode.com/problems/guess-number-higher-or-lower/

// n: number. 1 <= n <= 2^31 - 1.
// Return the secret number. Call guess() to receive one of three responses:
// -1: Parameter is larger than the secret number.
// 1: Parameter is smaller than the secret number.
// 0: Parameter is equal to the secret number.
