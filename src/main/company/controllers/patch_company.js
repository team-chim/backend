const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let compid = req.params.compid;

    let nameEn = req.body.nameEn || req.body.nameen;
    let nameTh = req.body.nameTh || req.body.nameth;

    let compObj = {}
    if (nameEn) compObj.NameEN = nameEn;
    if (nameTh) compObj.NameTH = nameTh;

    db.query(SQL.UPDATE_COMPANY, [compObj, compid], (err, results, fields) => {
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