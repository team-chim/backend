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

/* Offers */
router.use('/internship/offers', require('../main/offer/routers/v2'));

/* Academic Year & Semesters */
router.use('/academic', require('../main/academic/routers/v2'));

/* Students */
router.use('/students', require('../main/student/routers/v2'));

/* Subjects */
router.use('/subjects', require('../main/subject/routers/v2'));

/* Teachers */
router.use('/teachers', require('../main/teacher/routers/v2'));

/* Faculty & Departments */
router.use('/faculties', require('../main/faculty/routers/v2'));

/* Faculty Groups */
router.use('/faculty_groups', require('../main/faculty_group/routers/v2'));

/* Company & Branches */
router.use('/companies', require('../main/company/routers/v2'));

module.exports = router