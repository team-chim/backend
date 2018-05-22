const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let companyid = req.params.compid;
    let year = req.params.year;
    let offerid = req.params.offerid;

    db.query(SQL.FIND_SINGLE_OFFER, [companyid, year, offerid], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else if (results.length === 0) {
            res.sendStatus(404);
        } else {
            let offer = results[0];
            db.query(SQL.FIND_OFFER_TO_DEPARTMENT, [companyid, year, offerid], (err, results, fields) => {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                } else {
                    offer.wanted_departments = results;
                    res.send(offer);
                }
            })
        }
    });
}