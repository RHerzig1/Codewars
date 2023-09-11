-- Write a script that queries the days that had a higher temperature than the previous day.

SELECT
  id
FROM
  weather w1
WHERE
  temperature > (
    SELECT
      temperature
    FROM
      weather w2
    WHERE
      w2.recordDate = DATE_SUB(w1.recordDate, INTERVAL 1 DAY)
  );

/*
 Input: 
 Weather table:
 +----+------------+-------------+
 | id | recordDate | temperature |
 +----+------------+-------------+
 | 1  | 2015-01-01 | 10          |
 | 2  | 2015-01-02 | 25          |
 | 3  | 2015-01-03 | 20          |
 | 4  | 2015-01-04 | 30          |
 +----+------------+-------------+
 
 Output: 
 +----+
 | id |
 +----+
 | 2  |
 | 4  |
 +----+
 
 Explanation: 
 In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
 In 2015-01-04, the temperature was higher than the previous day (20 -> 30).
 */
/*
 A table containing a date and temperature for the day. Dates could be ascending or descending.
 Return the ID of the dates that were hotter than the previous day.

 Select the ID column.
 Where RecordDate Temp is greater than RecordDate - 1 Temp.
 */