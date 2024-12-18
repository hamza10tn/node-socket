
var express = require('express')
var router = express.Router()
const { list, create, deleteUser, updateUser } = require('../service/userService');
const validate = require('../middleware/validation');



router.get('/list',list);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
router.post('/create/:age',validate, create)


module.exports = router;
