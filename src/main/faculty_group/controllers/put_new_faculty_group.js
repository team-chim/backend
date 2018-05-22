const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB
    let newFacultyGroup = {
        FacultyGroupID:  req.body.facultyGroupId || req.body.facultygroupidd || req.body.fgid || req.body.fgID || req.body.fgId,
        NameEN:     req.body.nameEn || req.body.nameen,
        NameTH:     req.body.nameTh || req.body.nameth,
    }

    if (!newFacultyGroup.FacultyGroupID) {
        res.status(422).send({
            "message": "Please specify faculty group ID"
        })
    } if (!newFacultyGroup.NameEn) {
        res.status(422).send({
            "message": "Please specify english faculty group name"
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