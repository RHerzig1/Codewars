// Write a function that solves the missing digit problem from the ACMICPC-Northwest regional programming contest.

function solveExpression(str) {
  const numbers = [...Array(10).keys()];
  const [arr, operation] = splitExpression(str);

  for (const elem of numbers) {
    const number = numbers.indexOf(elem);

    if (str.includes(number)) {
      numbers[number] = false;
      continue;
    }

    if (number === 0 && arr.some((elem) => elem.length > 1 && elem.replace(/-/g, "").indexOf("?") === 0)) {
      numbers[number] = false;
      continue;
    }

    const expression = arr.map((elem) => elem.replace(/\?/g, number));
    const answer = Number(expression.pop());
    let calculation = null;

    if (operation === "multiply") {
      calculation = parseInt(expression[0]) * parseInt(expression[1]);
    } else if (operation === "add") {
      calculation = parseInt(expression[0]) + parseInt(expression[1]);
    } else {
      calculation = parseInt(expression[0]) - parseInt(expression[1]);
    }

    numbers[number] = answer === calculation;
  }

  return numbers.indexOf(true);
}

function splitExpression(str) {
  let operation = null;

  if (str.includes("*")) {
    operation = "multiply";
  } else if (str.includes("+")) {
    operation = "add";
  } else {
    operation = "subtract";
  }

  str = str.replace(/--/g, " -");
  str = str.replace(/(\d|\?)-/g, "$1 ");
  const arr = str.split(/[^0-9?-]+/);
  return [arr, operation];
}

console.log(solveExpression("1+1=?"), 2);
console.log(solveExpression("123*45?=5?088"), 6);
console.log(solveExpression("-5?*-1=5?"), 0);
console.log(solveExpression("19--45=5?"), -1);
console.log(solveExpression("??*??=302?"), 5);
console.log(solveExpression("?*11=??"), 2);
console.log(solveExpression("?280?9-445554=182515"), 6);
console.log(solveExpression("?1014?-140795=669353"), 8);

// A string indicating a mathimatical expression. One number (0-9) has been replaced by a question mark.
// Return the missing number. If multiple answers exist, return the lowest. If none exists, return -1.

// Format the string into an array of the three values.
// Cache the mathematical operation.
// Cache of 0-9 and set all to true.
// Iterate through the array and set all existing numbers to false, in the cache.
