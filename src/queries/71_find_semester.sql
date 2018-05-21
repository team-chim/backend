SELECT `Year`, `Semester`, `SemesterStartDate`, `SemesterEndDate`, 
        `RegisterStartDate`, `RegisterEndDate`, `AddingStartDate`, `AddingEndDate`, 
        `DroppingStartDate`, `DroppingEndDate`, `WithdrawStartDate`, `WithdrawEndDate`
FROM `rexchula`.`semester`
WHERE `Year` = ?
  AND `Semester` = ?;