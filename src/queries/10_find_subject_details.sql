SELECT s.SubjectID, s.NameAbv, s.NameEN, s.NameTH, s.Credit
FROM `subject` s
WHERE s.SubjectID = ?;