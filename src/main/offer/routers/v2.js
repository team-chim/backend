const express = require('express')
const router = express.Router()

router.get('/', require('../controllers/get_offers'));
router.put('/', require('../controllers/put_new_offer'));
router.patch('/', require('../controllers/patch_offer'));
router.delete('/', require('../controllers/delete_offer'));

router.get('/:compid', require('../controllers/get_offers'));

module.exports = router