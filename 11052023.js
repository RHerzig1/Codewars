// Write a function that compares values and throws an error if they're not equal.

function expect(val1) {
  return {
    toBe: (val2) => {
      if (val1 !== val2) {
        throw new Error("Not Equal");
      }
      return true;
    },
    notToBe: (val2) => {
      if (val1 === val2) {
        throw new Error("Equal");
      }
      return true;
    },
  };
}

console.log(expect(5).toBe(5), true);
// console.log(expect(10).toBe(5), new Error);
// console.log(expect('hello').notToBe('hello'), new Error);
console.log(expect("hello").notToBe("world"), true);
