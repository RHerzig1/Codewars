-- Return classes with more than 5 students.

SELECT
    class
FROM
    courses
GROUP BY
    class
HAVING
    COUNT(class) >= 5;

-- https://leetcode.com/problems/classes-more-than-5-students