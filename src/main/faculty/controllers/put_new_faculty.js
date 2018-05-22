const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {


    // Must match DB
    let newFaculty = {
        FacultyID:  req.body.facultyId || req.body.fid || req.body.facultyid,
        NameEN:     req.body.nameEn || req.body.nameen,
        NameTH:     req.body.nameTh || req.body.nameth,
        TelNo:      req.body.telNo || req.body.telno,
        BelongsTo:   req.body.belongsTo || req.body.belongsto,
    }

    if (!newFaculty.FacultyID) {
        res.status(422).send({
            "message": "Please specify faculty ID"
        })
    } else if (!newFaculty.NameEN || !newFaculty.NameTH) {
        res.status(422).send({
            "message": "Please specify faculty names"
        })
    } else if (!newFaculty.TelNo) {
        res.status(422).send({
            "message": "Please specify telephone number"
        })
    } else if (!newFaculty.BelongsTo) {
        res.status(422).send({
            "message": "Please specify faculty group"
        })
    } else {
        db.query(SQL.CREATE_NEW_FACULTY, newFaculty, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Faculty already exists!"
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