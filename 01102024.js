// Write a function that returns whether every element of an array is another array.

const containsOnlyArrays = (arr) => arr.every((elem) => Array.isArray(elem) === true);

console.log(containsOnlyArrays([[1, 2], [3, 4], [5]]), true);
console.log(containsOnlyArrays([[1, 2], [3, 4], 5]), false);
console.log(containsOnlyArrays([[1, 2], [3, 4], { 5: true }]), false);
console.log(containsOnlyArrays([1, 2, 3, 4, 5]), false);
console.log(containsOnlyArrays([]), true);
