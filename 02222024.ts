// Write a function that uses a stack to record the of the number of days until it gets warmer.

// O(n^2) time complexity:

// function dailyTemperatures(temperatures: number[]): number[] {
//   const result: number[] = [];

//   for (let i = 0; i < temperatures.length; i++) {
//     const target = temperatures[i];
//     let days = 0;

//     for (let j = i; j < temperatures.length; j++) {
//       if (temperatures[j] > target) {
//         days = j - i;
//         break;
//       }
//     }

//     result.push(days);
//   }

//   return result;
// }

function dailyTemperatures(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    const curTemperature = temperatures[i];

    while (stack.length > 0 && curTemperature > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      result[index] = i - index;
    }

    stack.push(i);
  }

  return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]);
console.log(dailyTemperatures([30, 40, 50, 60]), [1, 1, 1, 0]);
console.log(dailyTemperatures([30, 60, 90]), [1, 1, 0]);

// temperatures: number[]. 1 <= temperatures.length <= 10^5. 30 <= temperatures[i] <= 100;
// Return number[] where each element represents the number of days until the temperature is greater than [i] tempturature.

// https://www.youtube.com/watch?v=cTBiBSnjO3c