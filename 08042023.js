// Take an array of values and return the least common multiple (LCM) of the values as a formatted string.

function caculateLCM(arr) {
  let result = "";

  for (let i = 1; i <= Number.MAX_SAFE_INTEGER; i++) {
    if (arr.every((elem) => i % elem[1] === 0)) {
      arr = arr.map((elem) => {
        const multiple = i / elem[1];
        result = result + `(${elem[0] * multiple},${i})`;
      });
      break;
    }
  }

  return result;
}

console.log(
  caculateLCM([
    [1, 2],
    [1, 3],
    [1, 4],
  ]),
  "(6,12)(4,12)(3,12)"
);

// An array of arrays. Each nest array contains two integers > 0.
// Return a string formatted from the parameter. [x, y] to (x, y). All y values must be equal to their LCM. Multiply x by the LCM as well.

// Declare an empty result string.
// Count upwards until the LCM is found.
// Iterate throught the parameter to format each nested array and concatenate to the string.
// Return the result.
