const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let subid = req.params.subid;
    let nameAbv = req.body.nameabv || req.body.nameAbv;
    let nameEn = req.body.nameen || req.body.nameEn;
    let nameTh = req.body.nameth || req.body.nameTh;
    let credit = req.body.credit || req.body.Credit;

    let subObj = {}

    if (nameAbv) subObj.NameAbv = nameAbv;
    if (nameEn) subObj.NameEN = nameEn;
    if (nameTh) subObj.NameTH = nameTh;
    if (credit) subObj.Credit = credit;

    db.query(SQL.UPDATE_SUBJECT, [subObj,subid], (err, results, fields) => {
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