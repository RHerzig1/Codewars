    // Create a method all which takes two params:
    // 1. a sequence
    // 2. a function
    // and returns true if the function in the params returns true for every element in the sequence.
    // Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.
    
    const all = (arr, fun) => arr.every(fun)

    // P: Take in an array and a function.
    // R: Return true if the function returns true for every element, or false if it does not.
    // E: all([1, 2, 3, 4, 5], greater_than_9) -> false
    //    all([1, 2, 3, 4, 5], less_than_9)    -> True
    // P: Take the array, apply the function to each element. If all true, return true. If there are any false, return false.