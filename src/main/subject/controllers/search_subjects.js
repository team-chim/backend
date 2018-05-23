const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // All are optional
    let subjectid = req.query.subjectid || req.query.SubjectID;
    let subjectname = req.query.subjectname || req.query.SubjectName;
    let year = req.query.year || req.query.Year;
    let semester = req.query.semester || req.query.Semester;
    let genedtype = req.query.genedtype || req.query.GenedType;

    db.query("CALL search_subject(?, ?, ?, ?, ?)", [
        subjectid, 
        subjectname,
        genedtype,
        year, 
        semester
    ], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            let data = results[0]
            
            if (data.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(data);
            }
        }
    });

}