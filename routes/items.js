const express = require('express');

const router = express.Router();

const {getAllItems} = require('../controllers/item')

router.route('/all').get(getAllItems);

module.exports = router;