SELECT stdy.SubjectID, s.NameEN, s.Credit, stdy.Year, stdy.Semester, stdy.Grade
FROM `subject` s, studies stdy
WHERE stdy.StudentID = ? AND
      s.SubjectID = stdy.SubjectID