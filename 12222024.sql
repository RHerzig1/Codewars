-- Calcuate the average process time per machine.

SELECT a1.machine_id, ROUND(AVG(a2.timestamp - a1.timestamp), 3) AS processing_time
FROM activity a1
LEFT JOIN activity a2
ON (
    a1.machine_id = a2.machine_id AND
    a1.process_id = a2.process_id AND
    a1.activity_type = 'start' AND
    a2.activity_type = 'end'
)
GROUP BY a1.machine_id;

-- https://leetcode.com/problems/average-time-of-process-per-machine