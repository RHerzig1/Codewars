// Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text.
// Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.

function stringClean(s){
    return s.split('').filter((element) => element != parseInt(element)).join('');
}

stringClean('This looks5 grea8t!')

// P: A string containing letters, numbers, and puncuation.
// R: Return a string containing just the letters and puncuation.
// E: '! !' -> '! !'
//    '123456789' -> ''
//    'This looks5 grea8t!' -> 'This looks great!'
// P: Take the string, split it into an array so that each character is an element. Filter the array testing that each element is not a number. Join the array back together and return as a string.