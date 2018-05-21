const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let year = req.params.year;
    let semester = req.params.semester;

    if (!year) {
        res.status(422).send({
            "message": "Please specify a year"
        })
    } else if (!semester) {
        db.query(SQL.FIND_SEMESTER_IN_YEAR, year, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        })
    } else {
        db.query(SQL.FIND_SEMESTER, [year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        })
    }
}