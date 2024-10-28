// Perform operations on a number.

function finalValueAfterOperations(operations: string[]): number {
  let num = 0;

  for (const operation of operations) {
      num = operation[1] === "+" ? num + 1 : num - 1;
  }

  return num;
};

console.log(finalValueAfterOperations(["--X","X++","X++"]), 1);
console.log(finalValueAfterOperations(["++X","++X","X++"]), 3);
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]), 0);
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

// operations: string[]. 1 <= operations.length <= 100. operations[i] will be either "++X", "X++", "--X", or "X--".
// Return the final value after performing the operations on a number. The number starts at 0.
//   "++X" and "X++" increment the number.
//   "--X" and "X--" decrement the number.