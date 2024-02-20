// Write a function that calculates an expression in a Reverse Polish Notation.

function evalRPN(tokens: string[]): number {
  const stack: string[] = [];

  type OperatorFunction = (a: number, b: number) => number;
  const operators: Map<string, OperatorFunction> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => Math.trunc(a / b)],
  ]);

  for (const char of tokens) {
    if (operators.has(char)) {
      const b = Number(stack.pop());
      const a = Number(stack.pop());
      const result = String(operators.get(char)!(a, b));
      stack.push(result);
    } else {
      stack.push(char);
    }
  }

  return Number(stack[0]);
}

console.log(evalRPN(["2", "1", "+", "3", "*"]), 9); // ((2 + 1) * 3) = 9
console.log(evalRPN(["4", "13", "5", "/", "+"]), 6);
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]), 22);

// ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]     9 + 3
// ["10", "6", "12", "-11", "*", "/", "*", "17", "+", "5", "+"]              12 * -11
// ["10", "6", "-132", "/", "*", "17", "+", "5", "+"]                        6 / -132
// ["10", "0", "*", "17", "+", "5", "+"]                                     10 * 0
// ["0", "17", "+", "5", "+"]                                                17 + 0
// ["17", "5", "+"]                                                          17 + 5 = 22

// tokens: string[]. 1 <= tokens.length <= 10^4. tokens[i] will be an operator: "+", "-", "*", or "/" or integer in the range [-200, 200].
// Return a number indicating the result of the expression.

// Declare a stack.
// Iterate through the array. If an element is a number, push it into the stack.
// Else, if it's an operator, then pop() the top two numbers from the stack and calculate the result. Push back into the stack.
// Return the final outcome.
