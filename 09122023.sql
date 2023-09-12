-- Write a script that queries the average runtime of each machine to the 3rd decimal.

SELECT
  a1.machine_id,
  round(AVG(a2.timestamp - a1.timestamp), 3) AS processing_time
FROM
  activity a1
  JOIN activity a2 ON a1.machine_id = a2.machine_id
  AND a1.process_id = a2.process_id
  AND a1.activity_type = 'start'
  AND a2.activity_type = 'end'
GROUP BY
  a1.machine_id;

/*
 Input: 
 Activity table:
 +------------+------------+---------------+-----------+
 | machine_id | process_id | activity_type | timestamp |
 +------------+------------+---------------+-----------+
 | 0          | 0          | start         | 0.712     |
 | 0          | 0          | end           | 1.520     |
 | 0          | 1          | start         | 3.140     |
 | 0          | 1          | end           | 4.120     |
 | 1          | 0          | start         | 0.550     |
 | 1          | 0          | end           | 1.550     |
 | 1          | 1          | start         | 0.430     |
 | 1          | 1          | end           | 1.420     |
 | 2          | 0          | start         | 4.100     |
 | 2          | 0          | end           | 4.512     |
 | 2          | 1          | start         | 2.500     |
 | 2          | 1          | end           | 5.000     |
 +------------+------------+---------------+-----------+
 
 Output: 
 +------------+-----------------+
 | machine_id | processing_time |
 +------------+-----------------+
 | 0          | 0.894           |
 | 1          | 0.995           |
 | 2          | 1.456           |
 +------------+-----------------+
 
 Explanation: 
 There are 3 machines running 2 processes each.
 Machine 0's average time is ((1.520 - 0.712) + (4.120 - 3.140)) / 2 = 0.894
 Machine 1's average time is ((1.550 - 0.550) + (1.420 - 0.430)) / 2 = 0.995
 Machine 2's average time is ((4.512 - 4.100) + (5.000 - 2.500)) / 2 = 1.456
 */
/*
 A table containing machines and their activity. Each activity (on/off) has an associated timestamp.
 Return the machine_id and the total average of run time of each machine.
 
 Find the average by calculating the difference of end timestamp - start timestamp / number of machine_ids / 2.
 Return the average for each machine_id. Machine_id should only appear once in the output.
 */