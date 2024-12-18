
var express = require('express')
var router = express.Router()
const { create, list, deleteHotel, updateHotel, searchHotels } = require('../service/hotelService');



router.get('/list', list);
router.delete('/delete/:id', deleteHotel);
router.put('/update/:id', updateHotel);
router.post('/create', create)
router.get('/search', searchHotels);


module.exports = router;
