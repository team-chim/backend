const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const subjectid = req.params.subid;
    const year = req.params.year;
    const semester = req.params.semester;

    if (!subjectid) {
        res.status(422).send({
            "message": "Please specify a Subject ID"
        })
    } else {
        db.query("DELETE FROM class WHERE SubjectID = ? AND Year = ? AND Semester = ?;", [subjectid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.affectedRows === 0) {
                res.status(404).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            } else {
                res.status(200).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            }
        })
    }
}


//