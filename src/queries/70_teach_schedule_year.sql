SELECT * 
FROM `section_datetime` sdt NATURAL LEFT JOIN `section` sec
WHERE sec.`TeachedBy` = ? 
  AND sec.`Year` = ?;