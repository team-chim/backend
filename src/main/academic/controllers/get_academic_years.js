const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let year = req.params.year;

    if (!year) {
        db.query("SELECT `Year` FROM rexchula.academic_year;", (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })
    } else {
        db.query("SELECT `Year` FROM rexchula.academic_year WHERE `Year` = ?;", year, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                let academic_year = results[0];
                db.query(SQL.FIND_SEMESTER_IN_YEAR, year, (err, semesters, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        academic_year.semesters = semesters;
                        res.send(academic_year);
                    }
                })
            }
        })
    }
}