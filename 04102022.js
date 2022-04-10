    // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
    // Return your answer as a number.
    
function sumMix(x){
    let numbers = x.map((a) => parseInt(a))
    return numbers.reduce((a,b) => a + b, 0)
}

function sumMix(x){
    return x.map((a) => parseInt(a)).reduce((a,b) => a + b, 0)
}

const sumMix = x => x.map((a) => parseInt(a, 10)).reduce((a,b) => a + b, 0)
console.log(sumMix3([9, 3, '7', '3']))

// Or

let sumMix = x => x.map((a) => +a).reduce((a,b) => a + b, 0)
console.log(sumMix3([9, 3, '7', '3']))

// Or

let sumMix = x => x.map((a) => ~~a).reduce((a,b) => a + b, 0)
console.log(sumMix3([9, 3, '7', '3']))

    // P: An array of integers as strings and numbers.
    // R: Return the sum of all numbers.
    // E: [9, 3, '7', '3'] -> 22
    // P: Take the array, convert the strings to numbers (parse?), add up all the integers (reduce), then return the sum.