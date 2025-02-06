-- Delete duplicate email addresses except for the lowest id.

DELETE FROM
    person
WHERE
    id
NOT IN(
    SELECT
        MIN(id)
    FROM
        person
    GROUP BY
        email
);

-- https://leetcode.com/problems/delete-duplicate-emails