const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB
    year = req.params.year
    let newAcademicSemester = {
        Year: year,
        Semester:               req.body.semester || req.body.Semester,
        SemesterStartDate:      req.body.semesterStartDate || req.body.SemesterStartDate,
        SemesterEndDate:        req.body.semesterEndDate || req.body.SemesterEndDate,
        RegisterStartDate:      req.body.registerStartDate || req.body.RegisterStartDate,
        RegisterEndDate:        req.body.registerEndDate || req.body.RegisterEndDate,
        AddingStartDate:        req.body.addingStartDate || req.body.AddingStartDate,
        AddingEndDate:          req.body.addingEndDate || req.body.AddingEndDate,
        DroppingStartDate:      req.body.droppingStartDate || req.body.DroppingStartDate,
        DroppingEndDate:        req.body.droppingEndDate || req.body.DroppingEndDate,
        WithdrawStartDate:      req.body.withdrawStartDate || req.body.WithdrawStartDate,
        WithdrawEndDate:        req.body.withdrawEndDate || req.body.WithdrawEndDate,
    }

    if (!newAcademicSemester.Semester) {
        res.status(422).send({
            "message": "Please specify semester"
        })
    } else if (!newAcademicSemester.Year ||
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