    // Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
    
    const strCount = (str, letter) => str.split('').filter(element => (element === letter)).length

strCount("Hello", "o")

    // P: 2 strings, first is a word, second is a letter.
    // R: Integer
    // E: ("Hello", "o")  ->  1
    // P: Take both strings, split() the first arguement, count the number of times the second argument appears, return the number.