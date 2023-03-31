const router = require("express").Router();
const Product = require("../models/Product");


//get products
router.get('/', async(req, res)=> {
  try {
    const sort = {'_id': -1}
    const products = await Product.find().sort(sort);
    res.status(200).json(products);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


//create product

router.post('/', async(req, res)=> {
    try {

        const {name,brand,description,price,category,defects, pictures} = req.body;
        const product = await Product.create({name,brand,description,price,category,defects,pictures});
        const products = await Product.find();
        res.status(201).json(products);
    } catch (e) {
        res.status(400).send(e.message);

        
    }
})



router.get('/:id', async(req, res)=> {
  const {id} = req.params;
  try {
    const product = await Product.findById(id);
    const related = await Product.find({category: product.category}).limit(5);
    res.status(200).json({product, related})
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.get('/category/:category', async(req,res)=> {
  const {category} = req.params;
  try {
    let products;
    const sort = {'_id': -1}
    if(category == "all"){
      products = await Product.find().sort(sort);
    } else {
      products = await Product.find({category}).sort(sort)
    }
    res.status(200).json(products)
  } catch (e) {
    res.status(400).send(e.message);
  }
})


module.exports = router;