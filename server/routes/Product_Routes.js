const router = require("express").Router();
const {getproduct,createproduct,category,categoryshow,addcart,removecart} = require("../controllers/Product_Controllers");

//get products
router.get('/', getproduct)


//create product

router.post('/',createproduct)



router.get('/:id', category);

router.get('/category/:category', categoryshow),

router.post('/add-to-cart', addcart),

router.post('/remove-from-cart', removecart)

module.exports = router;