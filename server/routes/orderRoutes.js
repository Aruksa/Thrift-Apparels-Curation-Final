const router = require('express').Router();
const {createorder,getorder,shiporder} = require("../controllers/order_controller")

//creating an order

router.post('/', createorder)


// getting all orders;
router.get('/',getorder)


//shipping order

router.patch('/:id/mark-shipped',shiporder)
module.exports = router;