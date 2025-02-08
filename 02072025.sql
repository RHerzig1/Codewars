-- Query the number of products and their names for each date.

WITH cte AS (
    SELECT
        sell_date,
        product
    FROM
        activities
    GROUP BY
        sell_date,
        product
)

SELECT
    TO_CHAR(sell_date) AS sell_date,
    COUNT(product) AS num_sold,
    LISTAGG(product, ',') WITHIN GROUP (ORDER BY product) AS products
FROM
    cte
GROUP BY
    sell_date
ORDER BY
    sell_date;

-- https://leetcode.com/problems/group-sold-products-by-the-date