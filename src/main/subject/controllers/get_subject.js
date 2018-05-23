const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    console.log(req.params);

    let subjectid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;

    // Maintain APIv1 Compatability
    if (!subjectid) subjectid = req.body.subjectid || req.query.subjectid;
    if (!year) year = req.body.year || req.query.year;
    if (!semester) semester = req.body.semester || req.query.semester;

    if (!subjectid) {
        res.status(422).send({
            message: "Please specify a Subject ID"
        })
    } else if (!year && !semester) {
        // get classes
        db.query(SQL.FIND_SUBJECT_CLASSES, [subjectid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.status(404).send({
                    message: 'Cannot find specified subject'
                })
            } else {
                let subject = results[0];
                db.query("SELECT `ReqSubjectID` FROM subject_requires WHERE `SubjectID` = ?;", subjectid, (err, requirements, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    }
                    else {
                        // Set the requirements field
                        if (requirements.length > 0){
                            subject.requirements = requirements.map(e => e.ReqSubjectID);
                        } else {
                            subject.requirements = [];
                        }

                        res.send(subject);
                    }
                })
                
            }
        })
    } else if (semester && year) {
        // get single class

        // Fetch the subject detail first
        db.query(SQL.FIND_SUBJECT_DETAILS, [subjectid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.status(404).send({
                    message: 'Cannot find specified subject'
                })
            } else {
                let subject = results[0];
                db.query("SELECT `ReqSubjectID` FROM subject_requires WHERE `SubjectID` = ?;", subjectid, (err, requirements, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    }
                    else {
                        // Set the requirements field
                        if (requirements.length > 0){
                            subject.requirements = requirements.map(e => e.ReqSubjectID);
                        } else {
                            subject.requirements = [];
                        }

                        // Then Fetch the sections
                        db.query(SQL.FIND_SUBJECT_SECTION, [subjectid, year, semester], (err, sections, fields) => {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                            } else {
                                subject.sections = sections;
                                res.send(subject);
                            }
                        });
                    }
                })
                
            }
        })
       
    } else {
        res.status(422).send({
            message: "Argument Year or Semester is missing"
        })
    }

}