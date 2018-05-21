SELECT TeacherID, FacultyID, DepartmentID, StartDate
FROM managementship mg
WHERE FacultyID = ?
  AND DepartmentID = ?
  AND TeacherID = ?
ORDER BY mg.StartDate DESC
LIMIT 1