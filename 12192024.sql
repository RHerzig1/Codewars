-- Query the product name and price.

SELECT product_name, year, price FROM sales
LEFT JOIN product USING (product_id);

-- https://leetcode.com/problems/product-sales-analysis-i