-- Query patients with a specific condition.

SELECT
    *
FROM
    patients
WHERE
    conditions LIKE '% DIAB1%'
    OR conditions LIKE 'DIAB1%';

-- https://leetcode.com/problems/patients-with-a-condition