const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    const year = req.params.year;

    db.query("DELETE FROM academic_year WHERE Year = ?;", [year], (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else if (results.affectedRows === 0) {
            res.status(404).send({
                affectedRows: results.affectedRows,
                message: results.message
            });
        } else {
            res.status(200).send({
                affectedRows: results.affectedRows,
                message: results.message
            });
        }
    })
}


//