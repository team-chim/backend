const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    let subjectid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;
    let sectionno = req.params.sectno;

    // Maintain APIv1 Compatability
    if (!subjectid) subjectid = req.body.subjectid || req.query.subjectid;
    if (!year) year = req.body.year || req.query.year;
    if (!semester) semester = req.body.semester || req.query.semester;
    if (!sectionno) sectionno = req.body.sectionno || req.query.sectionno;

    if (!subjectid) {
        res.status(423).send({
            "message": "Please specify a subject ID"
        })
    } else if (!sectionno) {
        res.status(423).send({
            "message": "Please specify a section ID"
        })
    } else if (!year) {
        res.status(423).send({
            "message": "Please specify a year"
        })
    } else if (!semester) {
        res.status(423).send({
            "message": "Please specify a semester"
        })
    } else {
        db.query(SQL.FIND_STUDENT_IN_SECTION, [subjectid, sectionno, year, semester], (err, results, fields) => {
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