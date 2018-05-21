SELECT s.SubjectID, s.NameEN, c.FinalStartDatetime, c.FinalEndDatetime
FROM `class` c, studies stdy, `subject` s
WHERE stdy.StudentID = ? AND
      stdy.Year = ? AND
      stdy.Semester = ? AND
	c.SubjectID = stdy.SubjectID AND
      c.Year = stdy.Year AND
      c.Semester = stdy.Semester AND
      s.SubjectID = c.SubjectID;