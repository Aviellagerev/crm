const express = require('express');
const {Adduser} = require('../controllers/userControllers')
const router = express.Router();
router.route('/').post(Adduser)

module.exports = router;