/* 
 * File: delete_managementship.js
 * Author: Kris Kalavantavanich
 * Description: use to erase managementship from database (to END managementship, you are looking for `end_managementship.js`)
*/
const db = require('../database')
const SQL = require('../queries/index');

module.exports = (req, res) => {
    
    let facultyId = req.params.fid;
    let departmentId = req.params.depid;
    let teacherId = req.body.teacherId || req.body.teacherid;

    if (!teacherId) {
        res.status(422).send({
            "message": "Please specify a Teacher ID"
        })
    } else {
        db.query(SQL.FIND_MOST_RECENT_MANAGE, [facultyId, departmentId, teacherId], (err, results, fields) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else if (results.length === 0) {
                res.status(404).send({
                    message: "Cannot found management record for specified criteria",
                    teacherId: teacherId,
                    facultyId: facultyId,
                    departmentId: departmentId
                });
            } else {
                let startDate = results[0].StartDate;
                db.query(SQL.DELETE_MANAGEMENTSHIP, [facultyId, departmentId, teacherId, startDate], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else if (results.affectedRows === 0) {
                        res.status(400).send({
                            message: "Unable to delete management record"
                        });
                    } else {
                        res.status(204).send({
                            affectRows: results.affectedRows
                        });
                    }
                })
            }
        })
    }
}


//