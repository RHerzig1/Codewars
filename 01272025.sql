-- Create a pivot table for occupations.

SELECT
    doctor,
    professor,
    singer,
    actor
FROM (
    SELECT 
        name,
        occupation,
        ROW_NUMBER() OVER (PARTITION BY Occupation ORDER BY Name) AS row_number
    FROM
        OCCUPATIONS
)
PIVOT (
    MAX(name) -- Aggregate function required to select the names for each occupation
    FOR occupation IN ('Doctor' AS doctor, 'Professor' AS professor, 'Singer' AS singer, 'Actor' AS actor)
) 
ORDER BY
    row_number;

-- https://www.hackerrank.com/challenges/the-pads