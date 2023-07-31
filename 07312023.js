// Write a function that converts written numbers into integers.

function parseInt(str) {
  const values = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const multipliers = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  let result = 0;
  const arr = str.split(/[ \-]/);

  for (const elem of arr) {
    if (values[elem]) {
      result += values[elem];
    } else if (multipliers[elem]) {
      result +=
        multipliers[elem] * (result % multipliers[elem]) -
        (result % multipliers[elem]);
    }
  }

  return result;
}

console.log(parseInt("one"), 1);
console.log(parseInt("twenty"), 20);
console.log(parseInt("two hundred forty-six"), 246);
console.log(
  parseInt("twenty-six thousand three hundred and fifty-nine"),
  26359
);
console.log(parseInt("two hundred thousand"), 200000);

// A string containing a written number between 0 and 1,000,000. Always valid.
// Return the number represented by the string.

// Create an object of written numbers and their value.
// Declare a result to an empty array.
// Split the string into an array of words.
// Iterate through the array.
// For each word, test if it's included in the object. If so, push that value to the array.
// Join the array and return.
