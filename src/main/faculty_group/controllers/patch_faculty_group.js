const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let fgid = req.params.fgid;

    let nameEn = req.body.nameEn || req.body.nameen;
    let nameTh = req.body.nameTh || req.body.nameth;

    let fgObj = {}
    if (nameEn) fgObj.NameEN = nameEn;
    if (nameTh) fgObj.NameTH = nameTh;

    db.query(SQL.UPDATE_FACULTY_GROUP, [fgObj, fgid], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(400).send({
                message: err.code
            })
        } else {
            res.sendStatus(202)
        }
    })


}