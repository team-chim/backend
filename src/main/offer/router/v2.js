const express = require('express')
const router = express.Router()

router.get('/', require('../controllers/get_offers'));
router.put('/', require('../controllers/put_new_offer'));

module.exports = router