// Write a function that splits a string of digits into chunks and performs calculations on each chunk.

function revrot(str, n) {
  if (n <= 0) {
    return "";
  }

  if (n >= str.length) {
    return "";
  }

  const strArr = str.split("");
  const chunks = [];

  while (strArr.length >= n) {
    let chunk = strArr.splice(0, n).map(Number);
    chunks.push(chunk);
  }

  const cubeSums = [];

  for (const chunk of chunks) {
    const cubeSum = chunk.reduce((a, c) => a + c ** 3);
    cubeSums.push(cubeSum);
  }

  for (let i = 0; i < chunks.length; i++) {
    if (cubeSums[i] % 2 === 0) {
      chunks[i] = chunks[i].reverse();
    } else {
      chunks[i].push(chunks[i].shift());
    }
  }

  return chunks.flat().join("");
}

console.log(revrot("733049910872815764", 5), "330479108928157")
console.log(revrot("66443875", 4), "44668753")
console.log(revrot("1234", 0), "")
console.log(revrot("", 0), "")
console.log(revrot("1234", 5), "")

// A string of digits. May be empty.
// A positive integer as a number.
// Return a string of the result of splitting the string into chunks and rearranging them.

// Split the string into n sized chunks. Discard any leftover elements.
// Iterate through the chunks.
// Add the cube of each digit.
// If the sum is even, reverse the chunk.
// Else, rotate it to the left by one position.
// Join the chunks and return the string.
