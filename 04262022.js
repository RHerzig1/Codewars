// Given an integer of human years, convert it into cat years and dog years, then return the array.

const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0
    let dogYears = 0
    
    for (let i = 1; i <= humanYears; i++) {
      if (i === 1) {
        catYears += 15
        dogYears += 15
      }
      else if (i === 2) {
        catYears += 9
        dogYears += 9
      }
      else {
        catYears += 4
        dogYears += 5
      }
    }
    return [humanYears,catYears,dogYears]
  }

humanYearsCatYearsDogYears(10)

// P: An integer representing human years.
// R: Return an array containing 3 integers: [humanYears, catYears, dogYears]
// E: (10) -> [10, 56, 64]
// P: Create variables catYears and dogYears, then conditionals to calculate the total. Return each value inside an array.

// Cat years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that

// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that