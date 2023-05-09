const express = require('express');
const router = express.Router();
const ctlrMain = require('.../controllers/main');

/* GET home page. */
router.get('/', ctlrMain.index);

module.exports = router;
