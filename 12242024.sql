-- Query the number of times each student takes each exam.

SELECT st.student_id, st.student_name, su.subject_name, COUNT(ex.subject_name) AS attended_exams
FROM students st
CROSS JOIN subjects su
LEFT JOIN examinations ex
ON (ex.student_id = st.student_id AND ex.subject_name = su.subject_name)
GROUP BY st.student_id, st.student_name, su.subject_name
ORDER BY st.student_id, su.subject_name

-- https://leetcode.com/problems/students-and-examinations