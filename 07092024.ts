// Create an array of days until the nearest warmer temperatures using a monotonic stack.

function dailyTemperatures(temperatures: number[]): number[] {
  // Declare the stack and result arrays. Prefill result with the default value.
  const stack: number[] = [];
  const result: number[] = new Array(temperatures.length).fill(0);

  // Iterate the dataset using a monotonic stack algorithm.
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    // While the current element is greater than the element refernced at the top of the stack.
    while (temperature > temperatures[stack.at(-1)]) {
      const index = stack.pop();

      // Reassign the value in result using the index that was stored in the stack.
      result[index] = i - index;
    }

    // Push the current index in the stack.
    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0]);

// temperatures: number[]. 1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100.
// Return an array with the number of days, after temperatures[i], until a warmer day. Or 0, if non exists.
