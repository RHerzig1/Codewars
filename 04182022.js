// Write a function that returns a string in which firstname is swapped with last name.

// function nameShuffler(str){
//     let arrayFirstLast = str.split(' ')
//     let arrayLastFirst = arrayFirstLast.reverse()
//     let stringLastFirst = arrayLastFirst.join(' ')
//     return stringLastFirst
// }

// function nameShuffler(str){
//     let arrayFirstLast = str.split(' ')
//     return arrayFirstLast[1] + ' ' + arrayFirstLast[0]
// }

const nameShuffler = str => str.split(' ').reverse().join(' ')

nameShuffler('john McClane')

// P: A string containing a first and last name, seperated by a space.
// R: A string with the first and last names swapped, seperated by a space.
// E: nameShuffler('john McClane') -> 'McClane john'
// P: Take the string, split it into an array with two parts, use the reverse method, rejoing them, then return the result.