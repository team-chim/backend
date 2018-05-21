const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    // Must match DB
    let newFacultyGroup = {
        FacultyGroupID:  req.body.facultyGroupId,
        NameEN:     req.body.nameEn,
        NameTH:     req.body.nameTh,
    }

    if (!newFacultyGroup.FacultyGroupID) {
        res.status(422).send({
            "message": "Please specify faculty group ID"
        })
    } else {
        db.query(SQL.CREATE_NEW_FACULTY_GROUP, newFacultyGroup, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Faculty group already exists!"
                    });
                } else {
                    console.log(err);
                    res.sendStatus(500);
                }
            } else {
                res.sendStatus(202);
            }
        })
    }
}