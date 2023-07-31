// Write a function that checks for interesting car milages.

function isInteresting(num, arr) {
  if (num < 98) {
    return 0;
  }
  if (num === 98 || num === 99) {
    return 1;
  }

  const milages = {
    [num]: 2,
    [num + 1]: 1,
    [num + 2]: 1,
  };

  for (const milage of arr) {
    if (milages[milage]) {
      return milages[milage];
    }
  }

  for (const milage in milages) {
    if (milage % 100 === 0) {
      return milages[milage];
    }

    for (let i = 0; i < milage.length / 2; i++) {
      if (milage[i] !== milage[milage.length - i - 1]) {
        break;
      }
      if (i === Math.floor(milage.length / 2)) {
        return milages[milage];
      }
    }

    const ascending = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const descending = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
    let indexAscending = ascending.indexOf(milage[0]);
    let indexDescending = descending.indexOf(milage[0]);

    for (let i = 1; i < milage.length; i++) {
      console.log(milage, milage[i], ascending[indexAscending]);
      if (milage[i] !== ascending[++indexAscending]) {
        break;
      }

      if (i === milage.length - 1) {
        return milages[milage];
      }
    }

    for (let i = 1; i < milage.length; i++) {
      if (milage[i] !== descending[++indexDescending]) {
        break;
      }

      if (i === milage.length - 1) {
        return milages[milage];
      }
    }
  }

  return 0;
}

console.log(isInteresting(3, [1337, 256]), 0);
console.log(isInteresting(1336, [1337, 256]), 1);
console.log(isInteresting(1337, [1337, 256]), 2);
console.log(isInteresting(11208, [1337, 256]), 0);
console.log(isInteresting(11209, [1337, 256]), 1);
console.log(isInteresting(11211, [1337, 256]), 2);

// A positive integer representing the number of miles currently on the car. An array containing positive integers to add to the "interesting number" list.
// Return 2 if the currently milage is interesting, 1 if it's within two miles, or 0 if the number is not interesting.
// Interesting numbers (all are >= 100):
// Any digit followed by all zeros: 100, 90000.
// Every digit is the same number: 1111.
// The digits are sequential, incementing: 1234.
// The digits are sequential, decrementing: 4321.
// The digits are a palindrome: 1221 or 73837.
// The digits match one of the values in the awesomePhrases array.

// Create an object of milages to trigger interesting numbers ({num, num + 1, num + 2}).
// If the interesting number array contains the object, return the value.
// If num is < 98, return 0.
// If any property is dividable by 100, return the value.
// If any property is sequential, return the value.
// If the digit is a palindrome, return the value.
// Return 0.
