// Write a function that returns the last number of very large exponents without using BigInt.

function lastDigit(a, b) {
  if (b === "0") {
    return 1;
  }

  [a, b] = [a.slice(-1), b.slice(-2) % 4 || 4];
  return a ** b % 10;
}

console.log(lastDigit("4", "1"), "4");
console.log(lastDigit("4", "2"), "6");
console.log(lastDigit("4", "3"), "4");
console.log(lastDigit("160693804425", "903423984230322"), "5");
console.log(lastDigit("43249234i023", "323049239048234"), "9");

// Two integers as strings. Greater than 0. Value may be extremely large.
// Return the last digit of a^b.

// Use the shortcut:
// a = it's last digit.
// b = the last two digits mod 4. If mod 4 === 0, change to 4.
// Calculate the power of a ** b and return the last digit.
