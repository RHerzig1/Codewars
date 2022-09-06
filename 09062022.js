// Assess blood pressure to diagnose hypertension in patients
// Count the number of slices of bread in a sandwich to return the name of the sandwich. In another function, take the name of the sandwich and return the number of slices.

function hypertensive(patients) {
  let count = 0
  for (let patient of patients) {
    let hypertensive = false
    patient = patient.map(elem => elem.split('/')).flat()
    const tests = patient.length / 2  
    let systolic = 0
    let diastolic = 0
    
    patient.forEach((elem, index)=> {
      if (index % 2 === 0) {
        systolic += Number(elem)
        if (elem >= 180 && patient[index + 1] >= 110) hypertensive = true
      }
      else {
        diastolic += Number(elem)
      }
    })
    
    if (tests >= 2 && (systolic/tests >= 140 || diastolic/tests >= 90)) hypertensive = true
    
    if (hypertensive) count++
  }

  return count
}

// The parameter is an array containing an array of blood pressure results. Each nested array represents tests conducted from one patient.
// Return an integer counting the number of patients that are diagnosed with hypertension.
// [["130/80","140/94"],["160/110"],["150/80"],["150/92","140/90","138/84"],["140/94","140/90","120/80"]] -> 1
// Use "let" to declare a count variable equal to 0.
// Use a for...of loop to iterate through the array.
// For each patient, declare a hypertensive variable equal to false.
// If there are a minimum of 2 elements, conduct the first two tests.
// If the test returns positive, reassign hypertensive to true.
// Then, conduct the last test.
// If the test returns positive, reassign hypertensive to true.
// If hypertensive is true, increment count by 1.
// After all the patients have been assessed, return count.

// Results format: systolic pressure (mmHg) over diastolic pressur (mmHg).
// Rules for diagnosing blood pressure:
// Average of all measured systolic pressures >= 140 mmHg. Must have minumum of 2 measurements.
// Average of all measured diastolic presures >= 90 mmHg. Must have minimum of 2 measurements.
// Any one measurement with systolic pressure >= 180 mmHg AND diastolic pressure >= 110 mmHg.