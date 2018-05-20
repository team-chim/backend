const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    // Must match DB
    year = req.params.year
    let newAcademicSemester = {
        Year: year,
        Semester:               req.body.semester,
        SemesterStartDate:      req.body.semesterStartDate,
        SemesterEndDate:        req.body.semesterEndDate,
        RegisterStartDate:      req.body.registerStartDate,
        RegisterEndDate:        req.body.registerEndDate,
        AddingStartDate:        req.body.addingStartDate,
        AddingEndDate:          req.body.addingEndDate,
        DroppingStartDate:      req.body.droppingStartDate,
        DroppingEndDate:        req.body.droppingEndDate,
        WithdrawStartDate:      req.body.withdrawStartDate,
        WithdrawEndDate:        req.body.withdrawEndDate,

    }

    if (!newAcademicSemester.Year) {
        res.status(422).send({
            "message": "Please specify year"
        })
    } if (!newAcademicSemester.Year) {
        res.status(422).send({
            "message": "Please specify semester"
        })
    } 
    if (!newAcademicSemester.Year ||
        !newAcademicSemester.AddingEndDate ||
        !newAcademicSemester.AddingStartDate ||
        !newAcademicSemester.DroppingEndDate ||
        !newAcademicSemester.DroppingStartDate ||
        !newAcademicSemester.RegisterEndDate ||
        !newAcademicSemester.RegisterStartDate ||
        !newAcademicSemester.WithdrawEndDate ||
        !newAcademicSemester.WithdrawStartDate
    ) {
        res.status(422).send({
            "message": "Please specify all dates"
        })
    } else {
        db.query(SQL.CREATE_NEW_ACADEMIC_SEMESTER, newAcademicSemester, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Academic semester already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(202);
            }
        })
    }
}