-- Write a query that returns a list of classes that have 5 or more students.

SELECT
  class
FROM
  courses
GROUP BY
  class
HAVING
 count(1) >= 5;

/*
Input: 
Courses table:
+---------+----------+
| student | class    |
+---------+----------+
| A       | Math     |
| B       | English  |
| C       | Math     |
| D       | Biology  |
| E       | Math     |
| F       | Computer |
| G       | Math     |
| H       | Math     |
| I       | Math     |
+---------+----------+

Output: 
+---------+
| class   |
+---------+
| Math    |
+---------+

Explanation: 
- Math has 6 students, so we include it.
- English has 1 student, so we do not include it.
- Biology has 1 student, so we do not include it.
- Computer has 1 student, so we do not include it.
 */
/*
 
 */