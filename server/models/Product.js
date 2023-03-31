const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    defects: {
        type: String,
        required: true
    },
    
    pictures: {
        type: Array,
        required: true
    }
});

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
