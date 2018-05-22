const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    // Must match DB
    let newCompany = {
        NameEN: req.body.nameen || req.body.nameEn || req.body.NameEn || req.body.NameEN,
        NameTH: req.body.nameth || req.body.nameTh || req.body.NameTh || req.body.NameTH,
    }

    if (!newCompany.NameEN) {
        res.status(422).send({
            "message": "Please specify a Company name [field = nameen]"
        })
    } else {
        db.query(SQL.CREATE_NEW_COMPANY, newCompany, (err, results, fields) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    res.status(400).send({
                        message: "Company already exists!"
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