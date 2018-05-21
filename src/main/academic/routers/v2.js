const express = require('express')
const router = express.Router()

/* Academic Years */
router.get('/years', require('../controllers/get_academic_years'));
router.put('/years', require('../controllers/put_new_academic_year'));
router.get('/years/:year', require('../controllers/get_academic_years'));
router.delete('/years/:year', require('../controllers/delete_academic_year'));

/* Academic Semesters */
router.get('/years/:year/semesters', require('../controllers/get_academic_semesters'));
router.put('/years/:year/semesters', require('../controllers/put_new_academic_semester'));
router.get('/years/:year/semesters/:semester', require('../controllers/get_academic_semesters'));
router.delete('/years/:year/semesters/:semester', require('../controllers/delete_academic_semester'));

module.exports = router