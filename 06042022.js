// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays. You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array. Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  let array = [...arr1, ...arr2].sort((a, b) => a - b)
  let filteredArray = []
  
  for (let element of array) {
    if (!filteredArray.includes(element)) {
      filteredArray.push(element)
    }
  }
  
  return filteredArray
}

// 2 arrays containing integers
// A single array consisting of both array parameters, combined and sorted.
// Use the spread operator to add both parameter arrays into a new array variable.
// Declare a 2nd filtered array variable.
// Iterate throught the first array.
// Using a conditional, if the filtered array does not contain an element from array, then push it in (creates a new filtered array without duplicate values)
// Return the filtered array.

// https://www.codewars.com/kata/5899642f6e1b25935d000161