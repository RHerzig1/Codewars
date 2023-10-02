-- Write a query that returns the a list of customers who bought at least one of every product.

SELECT
  customer_id
FROM
  customer
GROUP BY
  customer_id
HAVING
  COUNT(DISTINCT product_key) = (
    SELECT
      COUNT(product_key)
    FROM
      product
  );

/*
 Input: 
 Activity table:
 +---------+------------+---------------+---------------+
 | user_id | session_id | activity_date | activity_type |
 +---------+------------+---------------+---------------+
 | 1       | 1          | 2019-07-20    | open_session  |
 | 1       | 1          | 2019-07-20    | scroll_down   |
 | 1       | 1          | 2019-07-20    | end_session   |
 | 2       | 4          | 2019-07-20    | open_session  |
 | 2       | 4          | 2019-07-21    | send_message  |
 | 2       | 4          | 2019-07-21    | end_session   |
 | 3       | 2          | 2019-07-21    | open_session  |
 | 3       | 2          | 2019-07-21    | send_message  |
 | 3       | 2          | 2019-07-21    | end_session   |
 | 4       | 3          | 2019-06-25    | open_session  |
 | 4       | 3          | 2019-06-25    | end_session   |
 +---------+------------+---------------+---------------+
 
 Output: 
 +------------+--------------+ 
 | day        | active_users |
 +------------+--------------+ 
 | 2019-07-20 | 2            |
 | 2019-07-21 | 2            |
 +------------+--------------+ 
 
 Explanation: Note that we do not care about days with zero active users.
 */
/*
 Count the number of products in the product table.
 Compare it to the number of unique items per customer.
 */