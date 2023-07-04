// Write Regex that tests whether a password is valid.

function test(str, expected) {
  const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

  console.log(REGEXP.test(str) === expected);
}

test("fjd3IR9", true);
test("ghdfj32", false);
test("DSJKHD23", false);
test("dsF43", false);
test("4fdg5Fj3", true);
test("DHSJdhjsU", false);
test("fjd3IR9.;", false);
test("fjd3  IR9", false);
test("djI38D55", true);
test("djI3_8D55", false);
test("djI38D55@@", false);

// A string containing letters, numbers, and puncuation.
// Return true or false indicated whether the string could be a valid password. The criteria include:
// At least six characters long.
// contains a lowercase letter.
// contains an uppercase letter.
// contains a digit.
// only contains alphanumeric characters.

//^ - matches the beginning of the string
//(?=.*[a-z]) - a positive lookahead that matches any character zero or more times, followed by a lowercase letter. This ensures that the password contains at least one lowercase letter.
//(?=.*[A-Z]) - a positive lookahead that matches any character zero or more times, followed by an uppercase letter. This ensures that the password contains at least one uppercase letter.
//(?=.*\d) - a positive lookahead that matches any character zero or more times, followed by a digit. This ensures that the password contains at least one digit.
//[a-zA-Z\d]{6,} - matches any alphanumeric character (excluding '_') six or more times. This ensures that the password is at least six characters long and only contains alphanumeric characters.
//$ - matches the end of the string.
