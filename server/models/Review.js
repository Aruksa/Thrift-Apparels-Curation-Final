const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    title: {type:String,require: true},
    content: {type:String,require: true},
    reference: {type: String,require: true}

}, {minimize: false});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;