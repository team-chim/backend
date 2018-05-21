const db = require('../../../database');
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let studentid = req.params.stuid;

    if (!studentid) {
        res.status(423).send({
            "message": "Please specify a student ID"
        })
    } else {
        db.query(SQL.FIND_STUDENT_INTERNSHIP_OFFICIAL, [studentid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                if (results.length > 0) {
                    let official_internship = results[0];
                    db.query(SQL.FIND_STUDENT_REPORTS, [studentid], (err, reports, fields) => {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            official_internship.reports = reports;
                            res.send(official_internship);
                        }
                    })
                } else {
                    res.sendStatus(404);
                }
            }
        }) 
    }
}