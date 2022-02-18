var express = require('express');
var router = express.Router();
var petsController = require('../controllers/petsController')

router.get('/', petsController.index);

module.exports = router;