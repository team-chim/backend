const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let year = req.params.year;
    let semester = req.params.semester;

    let semesterStartDate=      req.body.semesterStartDate || req.body.SemesterStartDate;
    let semesterEndDate=        req.body.semesterEndDate || req.body.SemesterEndDate;
    let registerStartDate=      req.body.registerStartDate || req.body.RegisterStartDate;
    let registerEndDate=        req.body.registerEndDate || req.body.RegisterEndDate;
    let addingStartDate=        req.body.addingStartDate || req.body.AddingStartDate;
    let addingEndDate=          req.body.addingEndDate || req.body.AddingEndDate;
    let droppingStartDate=      req.body.droppingStartDate || req.body.DroppingStartDate;
    let droppingEndDate=        req.body.droppingEndDate || req.body.DroppingEndDate;
    let withdrawStartDate=      req.body.withdrawStartDate || req.body.WithdrawStartDate;
    let withdrawEndDate=        req.body.withdrawEndDate || req.body.WithdrawEndDate;

    let semObj = {}
    if (semesterStartDate) semObj.SemesterStartDate = semesterStartDate;
    if (semesterEndDate) semObj.SemesterEndDate = semesterEndDate;
    if (registerStartDate) semObj.RegisterStartDate = registerStartDate;
    if (registerEndDate) semObj.RegisterEndDate = registerEndDate;
    if (addingStartDate) semObj.AddingStartDate = addingStartDate;
    if (addingEndDate) semObj.AddingEndDate = addingEndDate;
    if (droppingStartDate) semObj.DroppingStartDate = droppingStartDate;
    if (droppingEndDate) semObj.DroppingEndDate = droppingEndDate;
    if (withdrawStartDate) semObj.WithdrawStartDate = withdrawStartDate
    if (withdrawEndDate) semObj.WithdrawEndDate = withdrawEndDate;

    db.query(SQL.UPDATE_ACADEMIC_SEMESTER, [semObj, year, semester], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(400).send({
                message: err.code
            })
        } else {
            res.sendStatus(202)
        }
    })


}