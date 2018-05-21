const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB
    let newAcademicYear = {
        Year: req.body.year,
    }

    if (!newAcademicYear.Year) {
        res.status(422).send({
            "message": "Please specify year"
        })
    } else {
        db.query(SQL.CREATE_NEW_ACADEMIC_YEAR, newAcademicYear, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Academic year already exists!"
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