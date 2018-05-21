const db = require('../../../database')
const SQL = require('../../../queries/index');

module.exports = (req, res) => {
    console.log(db);
    db.query(SQL.FIND_STUDENTS_ALL, (err, results, fields) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    })

}