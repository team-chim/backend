SELECT f.`FacultyID`, f.`NameEN` AS FacultyNameEN, f.`NameTH` AS FacultyNameTH, d.`DepartmentID`, d.`NameEN` AS DepartmentNameEN, d.`NameTH` AS DepartmentNameTH
FROM rexchula.internship_to_department itd
JOIN faculty f 
ON f.FacultyID = itd.FacultyID
JOIN department d
ON d.DepartmentID = itd.DepartmentID AND d.FacultyID = itd.FacultyID
WHERE itd.CompanyID = ? 
  AND itd.`Year` = ?
  AND itd.`OfferID` = ?;