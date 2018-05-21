const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let fid = req.params.fid;

    let nameEn = req.body.nameEn || req.body.nameen;
    let nameTh = req.body.nameTh || req.body.nameth;
    let telNo = req.body.telNo || req.body.telno;
    let belongsTo = req.body.belongsTo || req.body.belongsto;

    let facultyObj = {}
    if (nameEn) facultyObj.NameEN = nameEn;
    if (nameTh) facultyObj.NameTH = nameTh;
    if (telNo) facultyObj.TelNo = telNo;
    if (belongsTo) facultyObj.BelongsTo = belongsTo;

    db.query(SQL.UPDATE_FACULTY, [facultyObj, fid], (err, results, fields) => {
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