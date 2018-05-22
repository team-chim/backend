const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB
    year = req.params.year
    let newAcademicSemester = {
        Year: year,
        Semester:               req.body.semester || req.body.Semester,
        SemesterStartDate:      req.body.semesterStartDate || req.body.SemesterStartDate || req.body.semesterstartdate,
        SemesterEndDate:        req.body.semesterEndDate || req.body.SemesterEndDate || req.body.semesterenddate,
        RegisterStartDate:      req.body.registerStartDate || req.body.RegisterStartDate || req.body.registerstartdate,
        RegisterEndDate:        req.body.registerEndDate || req.body.RegisterEndDate || req.body.registerenddate,
        AddingStartDate:        req.body.addingStartDate || req.body.AddingStartDate || req.body.addingstartdate,
        AddingEndDate:          req.body.addingEndDate || req.body.AddingEndDate || req.body.addingenddate,
        DroppingStartDate:      req.body.droppingStartDate || req.body.DroppingStartDate || req.body.droppingstartdate,
        DroppingEndDate:        req.body.droppingEndDate || req.body.DroppingEndDate || req.body.droppingenddate,
        WithdrawStartDate:      req.body.withdrawStartDate || req.body.WithdrawStartDate || req.body.withdrawstartdate,
        WithdrawEndDate:        req.body.withdrawEndDate || req.body.WithdrawEndDate || req.body.withdrawenddate,
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