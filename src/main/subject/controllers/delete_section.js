///subjects/:subid/:year/:semester/sections/:sectno

const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const subjectid = req.params.subid;
    const year = req.params.year;
    const semester = req.params.semester;
    const sectno = req.params.sectno;


    if (!subjectid) {
        res.status(422).send({
            "message": "Please specify a Subject ID"
        })
    } else if (!sectno) {
        res.status(422).send({
            "message": "Please specify a Section Number"
        })
    } else {
        db.query("DELETE FROM section WHERE SubjectID = ? AND Year = ? AND Semester = ? AND SectionNo = ?;", [subjectid, year, semester, sectno], (err, results, fields) => {
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