const Product = require("../models/Product");
const Users = require("../models/User");
module.exports={
    getproduct: async(req, res)=> {
        try {
          const sort = {'_id': -1}
          const products = await Product.find().sort(sort);
          res.status(200).json(products);
        } catch (e) {
          res.status(400).send(e.message);
        }
      },
    createproduct: async(req, res)=> {
        try {
    
            const {name,brand,description,price,category,defects,size,keyword,pictures} = req.body;
            const product = await Product.create({name,brand,description,price,category,defects,size,keyword,pictures});
            const products = await Product.find();
            res.status(201).json(products);
        } catch (e) {
            res.status(400).send(e.message);
    
            
        }
    },
    category: async(req, res)=> {
        const {id} = req.params;
        try {
          const product = await Product.findById(id);
          const related = await Product.find({category: product.category}).limit(5);
          res.status(200).json({product, related})
        } catch (e) {
          res.status(400).send(e.message);
        }
      },
      categoryshow: async(req,res)=> {
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
      },
      addcart: async(req, res)=> {
        const {userId, productId, price} = req.body;
      
        try {
          const user = await Users.findById(userId);
          const userCart = user.cart;
          if(user.cart[productId]){
            userCart[productId] += 1;
          } else {
            userCart[productId] = 1;
          }
          userCart.count += 1;
          userCart.total = Number(userCart.total) + Number(price);
          user.cart = userCart;
          user.markModified('cart');
          await user.save();
          res.status(200).json(user);
        } catch (e) {
          res.status(400).send(e.message);
        }
      },
      removecart: async(req, res)=> {
        const {userId, productId, price} = req.body;
        try {
          const user = await Users.findById(userId);
          const userCart = user.cart;
          userCart.total -= Number(userCart[productId]) * Number(price);
          userCart.count -= userCart[productId];
          delete userCart[productId];
          user.cart = userCart;
          user.markModified('cart');
          await user.save();
          res.status(200).json(user);
        } catch (e) {
          res.status(400).send(e.message);
        }
      }
}