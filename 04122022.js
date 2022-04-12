    // To square(root) or not to square(root)
    // Write a method, that will get an integer array as parameter and will process every number from this array.
    
function squareOrSquareRoot(array) {
    return array.map(a => {
        if (Math.sqrt(a) == Math.floor(Math.sqrt(a))){
            return a = Math.sqrt(a)
        }
        else {
            return a = a*a
        }
    })
}

squareOrSquareRoot([4,3,9,7,2,1])

    // P: An array of integers.
    // R: An array of integers, but each number is it's square root, if possible, else square it.
    // E: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
    // P: Take the array, use conditionals. For each element, if the square root modulus === 0, then do it, else square the element.