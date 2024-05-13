// Write a function that returns the smallest value from a "DI" string pattern.

function smallestNumber(pattern: string): string {
  const result: number[] = [];
  let countD = 0;

  for (let i = 0; i < pattern.length + 1; i++) {
      if (pattern[i] === "D") {
          countD++;
          continue;
      }

      if (countD > 0) {
          for (let j = i + 1; j > i - countD; j--) {
              result.push(j);
          }

          if (i !== pattern.length) {
              countD = 0;
          }
      } else {
          result.push(i + 1);
      }
  }

  return result.join('');
};

// console.log(smallestNumber("IIIDIDDD"), "123549876");
// console.log(smallestNumber("DDD"), "4321");

// pattern: string. 1 <= pattern.length <= 8. pattern[i] === "I" or "D".
// Return the smallest possible value, as a string, when converting the pattern into a number.
// If pattern[i] == 'I', then num[i] < num[i + 1].
// If pattern[i] == 'D', then num[i] > num[i + 1].