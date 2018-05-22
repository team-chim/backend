const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let stuid = req.params.stuid;

    let year = req.body.year;
    let semester = req.body.semester;
    let paymentid = req.body.paymentid || req.body.paymentId;
    let paymentdate = req.body.paymentdate || req.body.paymentDate;
    let paymentstatus = req.body.paymentstatus || req.body.paymentStatus;

    let payObj = {}

    if (paymentid) payObj.PaymentID = paymentid;
    if (paymentdate) payObj.PaymentDate = paymentdate;
    if (paymentstatus) payObj.PaymentStatus = paymentstatus;

    db.query(SQL.UPDATE_PAYMENT, [payObj, stuid, year, semester], (err, results, fields) => {
        if (err) {
            console.log(err)
            res.status(400).send({
                message: err.code
            })
        } else {
            console.log(results);
            console.log(fields);
            res.sendStatus(202)
        }
    })
}