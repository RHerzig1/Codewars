// Use recursion to count the number of elements inside an array, including each sub element.

function deepCount(a){
  let count = a.length
  for (const elem of a) {
    if (Array.isArray(elem)) {
      const subArrayCount = deepCount(elem)
      count += subArrayCount
    }
  }
  return count
}

console.log(deepCount([]), 0)
console.log(deepCount([1, 2, 3]), 3)
console.log(deepCount(["x", "y", ["z"]]), 4)
console.log(deepCount([1, 2, [3, 4, [5]]]), 7)
console.log(deepCount([[[[[[[[[]]]]]]]]]), 8)

// An array containing 0 or more numbers, strings, and subarrays. Subarrays may contain 0 or more numbers, strings, or subsubarrays. Etc.
// Return a total count of elements, including all levels of subarrays and each element in all levels of subarrays.

// Declare a counter variable equal to 0.
// Iterate through the array.
// If the element is an array, call deepCount(a) on that array.
// Return the counter.