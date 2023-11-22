// Write a function that returns the largest product using two consecutive elements.

function adjacentElementsProduct(arr) {
  let result = arr[0] * arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    result = Math.max(result, product);
  }

  return result;
}

// An array of integers. Always valid numbers. Length >= 2.
// Return the largest product possible by multiplying 2 consecutive elements.

// Declare a result array equal to null.
// Iterate through the array and calculate each product.
// If the product is larger than result, cache it.
// Return result.
