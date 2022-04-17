// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

// function betterThanAverage(classPoints, yourPoints) {
//     let sumOfArray = classPoints.reduce((a, b) => a + b, 0)
//     console.log(sumOfArray)
//     let averageOfArray = sumOfArray/classPoints.length;
//     console.log(averageOfArray)
//     return (averageOfArray < yourPoints ? true : false)
// }

let betterThanAverage = (classPoints, yourPoints) => (classPoints.reduce((a, b) => a + b, 0) / classPoints.length < yourPoints) ? true : false

betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)

// P: An array of integers, and an integer.
// R: True or false.
// E: [100, 40, 34, 57, 29, 72, 57, 88], 75) -> true
// P: Take the array, use the reduce method to add each element, then divide by the length. Use a turnary operator to compare of it's high or lower than the integer variable, and return true or false respectively.