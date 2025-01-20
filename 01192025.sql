-- Swap the seat ids of every two consecutive students.

SELECT
    id,
    CASE
        WHEN MOD(id, 2) = 1 THEN lead_student
        WHEN MOD(id, 2) = 0 THEN lag_student
    END AS student
FROM
    (
        SELECT
            id,
            student,
            NVL(LEAD(student) OVER (ORDER BY id), student) AS lead_student,
            NVL(LAG(student) OVER (ORDER BY id), student) AS lag_student
        FROM
            seat
    )
ORDER BY
    id;

-- https://leetcode.com/problems/exchange-seats