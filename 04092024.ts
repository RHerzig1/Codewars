// Write a function that returns the result of scoring a game.

function calPoints(operations: string[]): number {
  const stack = [];

  for (const elem of operations) {
    const number = Number(elem);

    if (Number.isInteger(number)) {
      stack.push(number);
    } else if (elem === "C") {
      stack.pop();
    } else if (elem === "D") {
      stack.push(2 * stack.at(-1));
    } else {
      stack.push(stack.at(-1) + stack.at(-2));
    }
  }

  return stack.reduce((a, c) => a + c, 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]), 30);
console.log(calPoints(["5","-2","4","C","D","9","+","+"]), 27);
console.log(calPoints(["1","C"]), 0);

// operations: string[]. 1 <= operations.length <= 1000. operations[i] = "C", "D", "+", or a string integer [-3 * 10^4, 3 * 10^4].
// Return a number representing the end result of the calculation.

// An integer x: Record a new score of x.
// '+': Record a new score that is the sum of the previous two scores.
// 'D': Record a new score that is the double of the previous score.
// 'C': Invalidate the previous score, removing it from the record.
