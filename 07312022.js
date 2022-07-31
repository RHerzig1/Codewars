// Calculate long-term savings and depreciation
// Write a function that calculates how long it'll take before the user can afford to replace a car.

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let numberOfMonths = 0
  let totalSavings = 0
  
  while (startPriceOld + totalSavings < startPriceNew) {
    totalSavings += savingperMonth
    if (numberOfMonths % 2 === 1) {
      percentLossByMonth += .5
    }
    startPriceOld = startPriceOld - (startPriceOld * (percentLossByMonth / 100))
    startPriceNew = startPriceNew - (startPriceNew * (percentLossByMonth / 100))
    numberOfMonths++
  }

  return [numberOfMonths, Math.round(startPriceOld + totalSavings - startPriceNew)]
}

// Parameters are the price of the old car, the price of the new car, how much money goes into the car fund each month, and the devaluation rate of both cars monthly. Devaluation starts at 1.5% and increases .5% every two months.
// Return an array of two integers, the number of months until the car can be replaced, and how much money they will have left over.
// Declare numberOfMonths with a value of 0.
// Declare totalSavings with a value of 0.
// If startPriceOld is greater than startPriceNew, return 0 months and the difference in costs.
// Otherwise, calculate the math for each month. For each month:
// Increase numberOfMonths += 1.
// Increase totalSavings += savingPerMonth.
// If numberOfMonths is even, add .5 to percentLossByMonth.
// Subtract the percentage from startPriceOld and startPriceNew.
// If startPriceOld + savingperMonth <= startPriceNew, then return [numberOfMonths, the amount left over].
// Else, iterate through for another month.