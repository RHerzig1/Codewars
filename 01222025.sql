-- Query students with higher than 75 marks.

SELECT
    name
FROM
    students
WHERE
    marks > 75
ORDER BY
    SUBSTR(name, LENGTH(name) - 2, 3),
    ID;

-- https://www.hackerrank.com/challenges/more-than-75-marks