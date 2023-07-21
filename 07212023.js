// Write a function that converts a phrase into a password.

function playPass(str, num) {
  const arr = [...str];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "0" && arr[i] <= "9") {
      arr[i] = 9 - arr[i];
    }
    if ((arr[i] >= "a" && arr[i] <= "z") || (arr[i] >= "A" && arr[i] <= "Z")) {
      const isUpperCase = i % 2 === 0;
      arr[i] = isUpperCase ? arr[i].toUpperCase() : arr[i].toLowerCase();
      let charCode = arr[i].charCodeAt(0) + num;

      while (!isUpperCase && charCode > 122) {
        charCode -= 26;
      }
      while (isUpperCase && charCode > 90) {
        charCode -= 26;
      }

      arr[i] = String.fromCharCode(charCode);
    }
  }

  return arr.reverse().join("");
}

// A string containing any characters, including spaces. A number > 0.
// Return a password by manipulating the phrase.

// Increment each letter of str by num.
// Replace each digit in str with 9 - digit.
// Every odd indexed letter is lowercase.
// Every even indexed letter is uppercase.
// Reverse the end result.
