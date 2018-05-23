SELECT s.SubjectID, s.NameAbv, s.NameEN, s.NameTH, s.Credit, c.MidtermStartDatetime, c.MidtermEndDatetime, c.FinalStartDatetime, c.FinalEndDatetime
FROM `subject` s
NATURAL JOIN `class` c
WHERE s.SubjectID = ?;