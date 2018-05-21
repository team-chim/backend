// /student/:stuid/payments

const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    
    const studentid = req.params.stuid;
    const year = req.body.year;
    const semester = req.body.semester;

    if (!year || !semester) {
        res.status(422).send({
            "message": "Please specify a Year and Semester"
        })
    } else {
        db.query("DELETE FROM payment WHERE StudentID = ? && Year = ? && Semester = ?;", [studentid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.affectedRows > 0) {
                res.status(204).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            } else {
                res.status(404).send({
                    affectedRows: results.affectedRows,
                    message: results.message
                });
            }
        })
    }
}


//