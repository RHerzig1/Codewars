-- Calculate the type of triangle for each row.

SELECT
    CASE
        WHEN a + b <= c THEN 'Not A Triangle'
        WHEN b + c <= a THEN 'Not A Triangle'
        WHEN c + a <= b THEN 'Not A Triangle'
        WHEN a = b AND b = c THEN 'Equilateral'
        WHEN a = b OR b = c OR c = a THEN 'Isosceles'
        ELSE 'Scalene'
    END AS type
FROM
    triangles;

-- https://www.hackerrank.com/challenges/what-type-of-triangle/