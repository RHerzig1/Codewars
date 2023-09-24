-- Write a query that returns the percentage of orders from first time buyers that are same-day deliveries.

SELECT
  ROUND(AVG(order_date = customer_pref_delivery_date) * 100, 2) AS immediate_percentage
FROM
  delivery
WHERE
  (customer_id, order_date) IN (
    SELECT
      customer_id,
      MIN(order_date)
    FROM
      delivery
    GROUP BY
      customer_id
  );

/*
 Input: 
 Delivery table:
 +-------------+-------------+------------+-----------------------------+
 | delivery_id | customer_id | order_date | customer_pref_delivery_date |
 +-------------+-------------+------------+-----------------------------+
 | 1           | 1           | 2019-08-01 | 2019-08-02                  |
 | 2           | 2           | 2019-08-02 | 2019-08-02                  |
 | 3           | 1           | 2019-08-11 | 2019-08-12                  |
 | 4           | 3           | 2019-08-24 | 2019-08-24                  |
 | 5           | 3           | 2019-08-21 | 2019-08-22                  |
 | 6           | 2           | 2019-08-11 | 2019-08-13                  |
 | 7           | 4           | 2019-08-09 | 2019-08-09                  |
 +-------------+-------------+------------+-----------------------------+

 Output: 
 +----------------------+
 | immediate_percentage |
 +----------------------+
 | 50.00                |
 +----------------------+

 Explanation: 
 The customer id 1 has a first order with delivery id 1 and it is scheduled.
 The customer id 2 has a first order with delivery id 2 and it is immediate.
 The customer id 3 has a first order with delivery id 5 and it is scheduled.
 The customer id 4 has a first order with delivery id 7 and it is immediate.
 Hence, half the customers have immediate first orders.
 */
/*
 Return a single record.
 Average of multiple records.
 All customers, but only the first order (MIN(ORDER_DATE)).
 */