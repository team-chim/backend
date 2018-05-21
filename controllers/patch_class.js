const db = require('../database')
const SQL = require('../queries/index');


module.exports = (req, res) => {
    let subid = req.params.subid;
    let year = req.params.year;
    let semester = req.params.semester;

    let midtermStartDatetime = req.body.midtermStartDatetime || req.body.midtermstartdatetime;
    let midtermEndDatetime = req.body.midtermEndDatetime || req.body.midtermenddatetime;
    let finalStartDatetime = req.body.finalStartDatetime || req.body.finalstartdatetime;
    let finalEndDatetime = req.body.finalEndDatetime || req.body.finalenddatetime;

    let classObj = {};
    let classParams = ""

    if (midtermEndDatetime) classObj.MidtermEndDatetime = midtermEndDatetime;
    if (midtermStartDatetime) classObj.MidtermStartDatetime = midtermStartDatetime;
    if (finalEndDatetime) classObj.FinalEndDatetime = finalEndDatetime;
    if (finalStartDatetime) classObj.FinalStartDatetime = finalStartDatetime;


    db.query(SQL.UPDATE_CLASS, [classObj, subid, year, semester], (err, results, fields) => {
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