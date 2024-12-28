-- Return the average selling price across multiple dates.

SELECT p.product_id, NVL(ROUND(SUM(price * units) / SUM(units), 2), 0) AS average_price
FROM prices p
LEFT JOIN unitssold us
ON p.product_id = us.product_id
    AND purchase_date BETWEEN start_date AND end_date
GROUP BY p.product_id;

-- https://leetcode.com/problems/average-selling-price