const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {

    let companyid = req.params.compid;
    let year = req.query.Year || req.query.year;
    
    if (!companyid && !year) {
        db.query(SQL.FIND_ALL_OFFERS, (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        });
    } else if (companyid && !year) {
        db.query(SQL.FIND_ALL_OFFERS_COMPANY, [companyid], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        });
    } else if (!companyid && year) {
        db.query(SQL.FIND_ALL_OFFERS_YEAR, [year], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        });
    } else {
        db.query(SQL.FIND_ALL_OFFERS_COMPANY_YEAR, [companyid, year], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                res.send(results);
            }
        });
    }

}