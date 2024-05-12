// Write a function that processes students getting food using stacks.

function countStudents(students: number[], sandwiches: number[]): number {
  // Correct the order of the stacks so we can pop() from the end.
  students = students.reverse();
  sandwiches = sandwiches.reverse();

  let student = 0;
  let sandwich = 0;
  let rotationCount = 0;

  while (rotationCount < students.length) {
    student = students.pop()!;
    sandwich = sandwiches.at(-1);

    // The student take a matching sandwich, or moves to the back of the line.
    if (student === sandwich) {
      sandwiches.pop();
      rotationCount = 0;
    } else {
      students.unshift(student);
      rotationCount++;
    }
  }

  return students.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]), 0);
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]), 3);
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

// students: number[]. 1 <= students.length <= 100. students[i] is 0 or 1.
// sandwiches: number[]. 1 <= sandwiches.length <= 100. sandwiches[i] is 0 or 1.
// Return the number of students that won't get a sandwich. Sandwich[0] is only only taken by a matching student[0]. Otherwise, the student goes to the back of the line and the sandwich remains until a matching student is in front or a full rotation has been made.

// Remove the student from the stack if they match the sandwich.
// Track the number of rotations per sandwich. If it exceeds the number of students then the loop should end.
