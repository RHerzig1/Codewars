// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising. Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form.

function orderFood(list) {
  const foodCount = {}
  
  for (key of list) {
    if (foodCount.hasOwnProperty(key.meal)) {
      foodCount[key.meal] += 1
    }
    else {
      foodCount[key.meal] = 1
    }
  }
  return foodCount
}

// An array of objects.
// An object containing a count of food options seleected in the form.
// Assign a new variable to hold the foodCount. Iterate through the list to count each meal type. Check if the meal already exists. If so, add 1 to the count. If not, create a new property in the foodCount object and set the count to 1.

// https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript