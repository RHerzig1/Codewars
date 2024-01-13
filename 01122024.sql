-- Write a SQL query that returns the results of a survey.

SELECT 'Male' AS "Sex/Handedness",
  (SELECT COUNT(1) FROM survey_data WHERE sex = 'Male' AND handedness = 'Right-handed') AS "Right-handed",
  (SELECT COUNT(1) FROM survey_data WHERE sex = 'Male' AND handedness = 'Left-handed') AS "Left-handed",
  COUNT(*) AS "Total"
  FROM survey_data
  WHERE sex = 'Male'
  UNION ALL
SELECT 'Female',
  (SELECT COUNT(1) FROM survey_data WHERE sex = 'Female' AND handedness = 'Right-handed'),
  (SELECT COUNT(1) FROM survey_data WHERE sex = 'Female' AND handedness = 'Left-handed'),
  COUNT(*)
  FROM survey_data
  WHERE sex = 'Female'
  UNION ALL
SELECT 'Total',
  (SELECT COUNT(1) FROM survey_data WHERE handedness = 'Right-handed'),
  (SELECT COUNT(1) FROM survey_data WHERE handedness = 'Left-handed'),
  COUNT(*)
  FROM survey_data;