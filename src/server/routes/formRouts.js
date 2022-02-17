const express = require('express');
const {addForm} = require('../controllers/faultController')

const router = express.Router();
router.route('/').post(addForm)
module.exports = router;