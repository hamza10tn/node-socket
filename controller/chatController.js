
var express = require('express')
var router = express.Router()
const { list, create, deleteChat, updateChat, chatView } = require('../service/chatService');
//const validate = require('../middleware/validation');



router.get('/list', list);
router.delete('/delete/:id', deleteChat);
router.put('/update/:id', updateChat);
router.post('/create', create);
router.get('/chat', chatView);


module.exports = router;
