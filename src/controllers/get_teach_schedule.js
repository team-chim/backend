const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    let teacherid = req.params.tid;
    let year = req.params.year;
    let semester = req.params.semester;
    

    if (!teacherid) {
        res.status(423).send({
            "message": "Please specify a teacher ID"
        })
    } else if (!year) {
        res.status(423).send({
            "message": "Please specify a year"
        })
    } else if (!semester) {
        res.status(423).send({
            "message": "Please specify a semester"
        })
    } else {
        db.query(SQL.FIND_TEACH_SCHEDULE, [teacherid, year, semester], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.status(404).send(results);
            } else {
                res.send(results);
            }
        })
       
    }


}