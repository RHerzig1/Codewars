// Calculate the sum of two strings.

function addStrings(num1: string, num2: string): string {
  // Convert the strings into stacks.
  const num1Stack = [...num1].map(Number);
  const num2Stack = [...num2].map(Number);
  let result = "";
  let carryOverOne = false;

  // While either stack has value, add each digit.
  while (num1Stack.length > 0 || num2Stack.length > 0) {
      const digit1 = num1Stack.pop() || 0;
      const digit2 = num2Stack.pop() || 0;
      let sum = digit1 + digit2;

      if (carryOverOne) {
          sum += 1;
          carryOverOne = false;
      }

      if (sum >= 10) {
          sum %= 10;
          carryOverOne = true;
      }

      result += sum;
  }

  // Carry over final one, if it exists.
  if (carryOverOne) {
      result += "1";
  }

  // Return the sum.
  return [...result].reverse().join('');
};

console.log(addStrings("11", "123"), "134");
console.log(addStrings("456", "77"), "533");
console.log(addStrings("0", "0"), "0");
// https://leetcode.com/problems/add-strings/

// num1: string. 1 <= num1.length <= 10^4. Consists of only digits. No leading zeros.
// num2: string. 1 <= num2.length <= 10^4. Consists of only digits. No leading zeros.