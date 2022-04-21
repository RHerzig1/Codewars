// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

function findMultiples(integer, limit) {
    let multiples = [] 
        for (let i = integer; i <= limit; i++){
            if (i % integer === 0){
                multiples.push(i)
            }
        }
    return multiples
}

findMultiples(2, 6)

// P: Two integers, a lower and upper limit
// R: Return an array containing all multiples of both numbers, including the upper limit itself if applicable.
// E: (2, 6) -> [2, 4, 6]
// P: Take the integers, create a for loop with the limit parameter as the limit, and test i % integer. If it === 0, push the value into an array. When the loop is finished, return the array.