// Write a function that uses char codes to calculate a value from a string.

function calc(str) {
  let count = 0;

  for (const char of str) {
    const charCode = [...String(char.charCodeAt(0))];

    charCode.forEach((elem) => {
      if (elem === "7") {
        count += 6;
      }
    });
  }
  return count;
}

console.log(calc("abcdef"), 6);
console.log(calc("ifkhchlhfd"), 6);
console.log(calc("aaaaaddddr"), 30);
console.log(calc("jfmgklf8hglbe"), 6);
console.log(calc("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 96);

// A string containing uppercase or lowercase characters. Always a valid string. Never empty.
// Return the string after converting each letter to its char code and running a calculation.

// Concatenate the char code of each character in the string.
// Duplicate the total and convert 7 with 1.
// Return the sum of difference between the two totals.
