const express = require('express')
const router = express.Router()

/* Faculty Groups */
router.get('/', require('../controllers/get_faculty_groups'));
router.put('/', require('../controllers/put_new_faculty_group'));
router.get('/:fgid', require('../controllers/get_faculty_groups'));
router.patch('/:fgid', require('../controllers/patch_faculty_group'));
router.delete('/:fgid', require('../controllers/delete_faculty_group'));

module.exports = router