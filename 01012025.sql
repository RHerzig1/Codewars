-- Query monthly transactions per month per country.

SELECT
    TO_CHAR(trans_date, 'YYYY-MM') AS month,
    country,
    COUNT(1) AS trans_count,
    SUM(
        CASE WHEN state = 'approved'
            THEN 1
            ELSE 0
        END
    ) AS approved_count,
    SUM(amount) AS trans_total_amount,
    SUM(
        CASE WHEN state = 'approved'
            THEN amount
            ELSE 0
        END
    ) AS approved_total_amount
FROM
    transactions
GROUP BY
    TO_CHAR(trans_date, 'YYYY-MM'),
    country;

-- https://leetcode.com/problems/monthly-transactions-i