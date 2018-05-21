const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let fgid = req.params.fgid;

    if (!fgid) {
        db.query("SELECT `FacultyGroupID`, `NameEN`, `NameTH` FROM rexchula.faculty_group;", (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.send(results);
            }
        })
    } else {
        db.query("SELECT `FacultyGroupID`, `NameEN`, `NameTH` FROM rexchula.faculty_group WHERE FacultyGroupID = ?;", fgid, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                let fg = results[0];
                db.query("SELECT `FacultyID`, `NameEN`, `NameTH`, `TelNo` FROM rexchula.faculty WHERE BelongsTo = ?;", fgid, (err, faculties, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        fg.faculties = faculties;
                        res.send(fg);
                    }
                })
            }
        })
    }
}