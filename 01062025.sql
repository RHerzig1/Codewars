-- For every product, query the quantity sold and price for the first year.

WITH cte AS (
    SELECT
        product_id,
        YEAR,
        quantity,
        price,
        CASE
            YEAR
            WHEN MIN(YEAR) OVER(PARTITION BY product_id) THEN 'Y'
            ELSE 'N'
        END AS is_first
    FROM
        sales
)
SELECT
    product_id,
    YEAR AS first_year,
    quantity,
    price
FROM
    cte
WHERE
    is_first = 'Y';

-- https://leetcode.com/problems/product-sales-analysis-iii