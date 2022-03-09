const express = require('express');
const {addContact} = require('../controllers/contactController')
const {getContact}= require('../controllers/contactController')
const router = express.Router();
router.route('/').post(addContact).get(getContact)

module.exports = router;