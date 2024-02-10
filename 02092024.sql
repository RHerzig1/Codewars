-- Write a script that queries the five bestselling books at a store.

SELECT *
FROM books
ORDER BY copies_sold DESC
LIMIT 5;