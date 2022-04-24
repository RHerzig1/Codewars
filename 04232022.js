// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

function pipeFix(numbers){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i+1] - numbers[i] != 1){
            numbers.push(numbers[i])
        }
    }
    return numbers
}

pipeFix([1,3,5,6,7,8])


function pipeFix(numbers){
    let newArray = []
    for (let i = numbers[0]; i <= numbers.slice(-1); i++){
        newArray.push(i)
    }
    return newArray
}

pipeFix([1,3,5,6,7,8])

// P: An array of numbers.
// R: Return an array containing all numbers, from 1, 2, 3, ...to the maximum provided.
// E: [1,3,5,6,7,8] -> [1,2,3,4,5,6,7,8]
// P: Take the array, using a for loop, if numbers[i+1] - numbers[1] !== 1, then push numbers[i + 1]. Return the new array.
//    Or, get the maximum number of the array with numbers[-1], and use it to add a incremental integer element until that limit is reached.