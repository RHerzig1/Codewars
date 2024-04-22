// Write a function that returns the depth of a folder directory.

function minOperations(logs: string[]): number {
  const stack: string[] = [];

  for (const elem of logs) {
      if (elem === '../') {
          stack.pop();
      } else if (elem === './') {
          continue;
      } else {
          stack.push(elem);
      }
  }

  return stack.length;
};

console.log(minOperations(["d1/","d2/","../","d21/","./"]), 2);
console.log(minOperations(["d1/","d2/","./","d3/","../","d31/"]), 3);
console.log(minOperations(["d1/","../","../","../"]), 0);

// logs: string[]. 1 <= logs.length <= 10^3. Contains './', '../', or a folder, such as 'd1/'.
// Return the depth of the folder at the end of the operation.

// Use a stack.
