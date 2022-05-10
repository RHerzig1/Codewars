// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
  const updatedArr = []
  const counter = {}
  arr.forEach(function(x) {
    counter[x] = (counter[x] || 0) + 1
    if (counter[x] <= n) {
      updatedArr.push(x)
    }
  })
  return updatedArr
}

deleteNth([20,37,20,21], 1)

// P: An array of integers, and an integer (n).
// R: The array of integers, but remove duplicates after they appear n number of times.
// E: ([20,37,20,21], 1) -> [20,37,21]
// P: Inside the function, create a for loop that runs for until i = arr.length. Count the number of duplicates. Using conditionals, if duplicates < n then push it to the new array, if duplicates > n then don't. After the loop completes, return the new array.