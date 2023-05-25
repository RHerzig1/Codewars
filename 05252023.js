// Write a function that returns different possible combinations of a keypad passcode.

function getPINs(observed) {
  const nums = [];

  for (const char of observed) {
    let elem = [char];

    if (char === "0") {
      elem.push("8");
    }
    if ("456789".includes(char)) {
      elem.push(String(Number(char) - 3));
    }
    if ("124578".includes(char)) {
      elem.push(String(Number(char) + 1));
    }
    if ("123456".includes(char)) {
      elem.push(String(Number(char) + 3));
    }
    if (char === "8") {
      elem.push("0");
    }
    if ("235689".includes(char)) {
      elem.push(String(Number(char) - 1));
    }

    nums.push(elem.join(""));
  }

  const counts = nums.map((num) => num.length);
  const countTotal = counts.reduce((acc, count) => acc * count, 1);
  const result = [];

  for (let count = 0; count < countTotal; count++) {
    const elem = [];

    for (let i = 0; i < nums.length; i++) {
      const index =
        Math.floor(
          count / counts.slice(i + 1).reduce((acc, count) => acc * count, 1)
        ) % counts[i];
      elem.push(nums[i][index]);
    }

    result.push(elem.join(""));
  }

  return result;
}

console.log(getPINs("8"), ["5", "7", "8", "9", "0"]);
console.log(getPINs("11"), [
  "11",
  "22",
  "44",
  "12",
  "21",
  "14",
  "41",
  "24",
  "42",
]);
console.log(getPINs("369"), [
  "339",
  "366",
  "399",
  "658",
  "636",
  "258",
  "268",
  "669",
  "668",
  "266",
  "369",
  "398",
  "256",
  "296",
  "259",
  "368",
  "638",
  "396",
  "238",
  "356",
  "659",
  "639",
  "666",
  "359",
  "336",
  "299",
  "338",
  "696",
  "269",
  "358",
  "656",
  "698",
  "699",
  "298",
  "236",
  "239",
]);

// A string of positive numbers 0 >= num <= 9. No spaces. Length of at least one.
// Return an array of strings of all possible combinations of the numbers if we allow each number to move up or down one space on a keypad.

// Declare a num array.
// Declare a results array.
// For each number in the string, push the possible numbers into num.
// Iterate through num. For each elem, increase the index.
// Push each possible combination into results.
// Return results.
