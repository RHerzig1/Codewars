-- Find the prices of all products on 2019-08-16.

SELECT 
    product_id,
     FIRST_VALUE(new_price) OVER(PARTITION BY product_id ORDER BY change_date DESC) AS price 
FROM
    products
WHERE
    change_date <= '2019-08-16'
UNION
SELECT 
    DISTINCT product_id,
    10 AS price
FROM
    Products
WHERE
    product_id NOT IN (
        SELECT
            product_id
        FROM
            products
        WHERE
            change_date <= '2019-08-16'
        );

-- https://leetcode.com/problems/product-price-at-a-given-date