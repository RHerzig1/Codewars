// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n. They overlap, but never out of order.

const eachCons = (arr, n) => {
    let result = []
    for (let i = 0; i <= arr.length - n; i++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(arr[i + j])
        }
        result.push(temp)
    }
    return result
}

// P: An array and a number.
// R: Return an array containing a series of arrays, each starting with 1, 2, 3..., with the total length of the arrays per n.
// E: ([1,2,3,4], 2) -> [[1,2], [2,3], [3,4]]
//    ([1,2,3,4], 3) -> [[1,2,3], [2,3,4]]   
// P: Take the array, using a for loop, for each i, add ++1 and push it to the array n number of times. Then push each completed array to a new one, which is returned.