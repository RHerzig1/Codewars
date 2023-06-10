// Write a function that converts Roman numerals into decimal numbers.

function romanToDec(str) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < str.length; i++) {
    const [cur, next = 0] = [romanNumerals[str[i]], romanNumerals[str[i + 1]]];
    total += Math.max(cur, next);

    if (cur < next) {
      total -= cur;
      i++;
    }
  }

  return total;
}

console.log(romanToDec("X"), 10);
console.log(romanToDec("MDCLXVI"), 1666);
console.log(romanToDec("MCMXCIX"), 1999);

// A valid string containing Roman number characters. No spaces. All uppercase.
// Return the decimal value of the Roman numerals.

// Create a Roman to decimal object.
// Iterate through the parameter.
// If the next number is lower, subtract it from the current number and add it to the total.
// Else, add the total.
// Return the total.
