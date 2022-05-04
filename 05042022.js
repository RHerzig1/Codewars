// Given an array of objects, create a function that tests whether the job's maxSalary is greater than the candidate's minSalary (-10% for wiggle room). Include throw errors in case one of the variables are not passed.

function match(candidate, job) {
  if (candidate.minSalary && job.maxSalary){
    return job.maxSalary >= candidate.minSalary - (candidate.minSalary * .1)
  }
  else if (!candidate.minSalary || !job.maxSalary){
    throw 'Make sure to include both variables.'
  }
}

console.log(match(120000, 140000))

// P: An array of objects.
// R: Return a boulean, or a throw error.
// E: match(120000, 140000) -> true
// P: Using conditionals, if both parameters are valid then return the salary calculation. Else, throw the error.