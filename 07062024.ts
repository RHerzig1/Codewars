// Calculate the score of a game with custom rules.

function calPoints(operations: string[]): number {
  const stack: string[] = [];
  let record = 0;

  for (const elem of operations) {
    const prev = Number(stack.at(-1));
    const prevPrev = Number(stack.at(-2));

    if (elem === "+") {
      stack.push(String(prev + prevPrev));
    } else if (elem === "D") {
      stack.push(String(prev * 2));
    } else if (elem === "C") {
      stack.pop();
    } else {
      stack.push(elem);
    }
  }

  return stack.reduce((a, c) => a + Number(c), 0);
}

console.log(calPoints(["5", "2", "C", "D", "+"]), 30);
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]), 27);
console.log(calPoints(["1", "C"]), 0);
// https://leetcode.com/problems/baseball-game/

// operations: string[]. 1 <= operations.length <= 1000. operations[i] may be "C", "D", "+", or a string representing an integer in the range [-3*10^4, 3*10^4]. The operations are always valid.
// Calculate the score and return the total sum.

// Use a stack.
