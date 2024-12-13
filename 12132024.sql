-- Select customer names who weren't referred by customer_id 2.

SELECT name FROM customer
WHERE referee_id <> 2
OR referee_id IS NULL;

-- https://leetcode.com/problems/find-customer-referee