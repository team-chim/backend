const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {

    let year = req.params.year;

    if (!year) {
        res.status(423).send({
            "message": "Please specify a year"
        })
    } else {
        db.query(SQL.FIND_INTERNSHIPS_OFFICIAL_YEAR, [year], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.sendStatus(404);
            } else {
                if (results.length > 0) {
                    res.send(results[0]);
                } else {
                    res.sendStatus(404);
                }
            }
        }) 
    }
}