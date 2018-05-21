const express = require('express')
const router = express.Router()

const db = require('../database')

router.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hello from API"
    })
})

/* Uncatagorized */
router.get('/students/unpaid', require('../controllers/get_unpaid_students'));
router.get('/students/official_internships/:year', require('../controllers/get_all_official_internship_year')); 
router.get('/offers', require('../controllers/get_offers'));
router.put('/offers', require('../controllers/put_new_offer'));

/* Academic Year & Semesters */
router.use('/academic', require('./academic.v2'));

/* Students */
router.use('/students', require('./students.v2'));

/* Subjects */
router.use('/subjects', require('./subjects.v2'));

/* Teachers */
router.use('/teachers', require('./teachers.v2'));

/* Faculty & Departments */
router.use('/faculties', require('./faculties.v2'));

/* Faculty Groups */
router.use('/faculty_groups', require('./faculty_groups.v2'));

/* Company & Branches */
router.use('/companies', require('./companies.v2'));

module.exports = router