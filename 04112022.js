    // Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
    // First argument is an array of numbers and the second is the divisor.
    
function divisibleBy(numbers, divisor){
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % divisor !== 0){
            numbers.splice(i, 1)
            i--
        }
    }
    return numbers
}

    // P: Two arrays, first is an array of numbers and the other is the divisor.
    // R: An array of numbers that can be evenly divided by the divisor.
    // E: ([1, 2, 3, 4, 5, 6], 2) -> [2, 4, 6]
    // P: Create a for loop to test each number using a modulus, remove the unsatisfied elements, then return the new array.