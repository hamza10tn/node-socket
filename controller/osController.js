var express = require('express');
const { osInfo, osInfo2, osCpu } = require('../service/osService');
var router = express.Router();





router.get('/', osInfo);
router.get('/cpus', osInfo2)
router.get('/cpus/:id', osCpu)


module.exports = router;
