const db = require('../../../database')
const SQL = require('../../../queries/index');


module.exports = (req, res) => {
    let compid = req.params.compid;
    let bn = req.params.brid;

    let manager = req.body.manager || req.body.Manager;
    let telNo = req.body.telno || req.body.telNo;
    let address = req.body.address || req.body.Address;
    let city = req.body.city || req.body.City;
    let state = req.body.state || req.body.state;
    let postalCode = req.body.postalcode || req.body.postalCode;
    let country = req.body.country || req.body.Country;

    let bObj = {}
    if (manager) bObj.Manager = manager;
    if (telNo) bObj.TelNo = telNo;
    if (address) bObj.Address = address;
    if (city) bObj.City = city;
    if (state) bObj.State = state;
    if (postalCode) bObj.PostalCode = postalCode;
    if (country) bObj.Country = country

    db.query(SQL.UPDATE_COMPANY_BRANCH, [bObj, compid, bn], (err, results, fields) => {
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