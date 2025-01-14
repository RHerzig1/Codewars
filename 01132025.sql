-- Query and calculate whether three line segments can form a triangle.

SELECT
    x,
    y,
    z,
    CASE
        WHEN (x + y > z) AND (y + z > x) AND (x + z > y) THEN 'Yes'
        ELSE 'No'
    END AS triangle
FROM
    triangle;

-- https://leetcode.com/problems/triangle-judgement