// You will be given an array of objects representing data about developers who have signed up to attend the next web development meetup that you are organising. Three programming languages will be represented: Python, Ruby and JavaScript.
// Your task is to return either:
// true if the number of meetup participants representing any of the three programming languages is ** at most 2 times higher than the number of developers representing any of the remaining programming languages**; or
// false otherwise.

function isLanguageDiverse(list) {
  const js = list.filter(e => e.language === 'JavaScript').length;
  const ruby = list.filter(e => e.language === 'Ruby').length;
  const python = list.filter(e => e.language === 'Python').length;
  
  return Math.max(js, ruby, python) <= Math.min(js, ruby, python) * 2 ? true : false;
}

// An array of objects. Languages are either Python, Ruby, or JavaScript.
// Boulean. True if no one language is greater than 2x the number of other languages, otherwise false.


// https://www.codewars.com/kata/58381907f8ac48ae070000de