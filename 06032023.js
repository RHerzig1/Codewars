// Write a function that takes two arrays and calculates the greatest length difference of elems between them

function findMaxLengthDifference(arr1, arr2) {
  arr1 = arr1.map(elem => elem.length).sort((a, b) => b - a);
  arr2 = arr2.map(elem => elem.length).sort((a, b) => b - a);

  const largest = [arr1[0], arr2[0]]
  const smallest = [arr1[arr1.length - 1], arr2[arr2.length - 1]]
  
  return Math.max(largest[0] - smallest[1], largest[1] - smallest[0]) || -1
}

console.log(findMaxLengthDifference(['a', 'aa', 'aaa'], ['bbbb', 'bbbbb']), 4)

// Two arrays containing strings.
// Return the largest difference of element lengths between the two arrays.

// Sort each array by length.
// For each array, subtract the largest length from the smallest length of the other array.
// Return the bigger difference.