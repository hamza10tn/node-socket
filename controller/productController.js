var express = require('express')
var router = express.Router();
const { listProducts, findById} = require ("../service/productService");


router.get('/listProducts', listProducts);
router.get('/listProd/:id', findById);


module.exports = router;
