-- Query the time in office per employee, per day.

SELECT
  event_day AS DAY,
  emp_id,
  SUM(out_time - in_time) AS total_time
FROM
  Employees
GROUP BY
  event_day,
  emp_id;

-- https://leetcode.com/problems/find-total-time-spent-by-each-employee