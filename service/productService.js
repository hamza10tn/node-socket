var products = require("../json/products.json")

function listProducts (req, res, next){
            res.json(products);
        };

function findById(req, res, next){

    res.json(products(req.params.id))

}

module.exports = {listProducts, findById }
