const router = require("express").Router();
const Product = require("../models/Product");


//product ano

router.get('/', async(res)=> {
    try {
      const products = await Product.findOne();
      res.status(200).json(products);
    } catch (e) {
      res.status(400).send(e.message);
    }
})

//create product

router.post('/', async(req, res)=> {
    try {

        const {name,brand,description,price,category,defects,images: pictures} = req.body;
        const product = await Product.create({name,brand,description,price,category,defects,pictures});
        const products = await Product.findOne();
        res.status(201).json(products);
    } catch (e) {
        res.status(400).send(e.message);

        
    }
})


module.exports = router;