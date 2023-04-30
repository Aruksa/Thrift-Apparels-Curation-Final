const Review = require("../models/Review")   
module.exports = {
    getreview: async(req, res)=>{
        try{
            const reviews = await Review.find()
            res.json(reviews)
        }catch(err){

        }
    },

    addreview: async (req, res)=>{
        try{
            const {title, content,reference} = req.body
            const review = await Review.create({title, content,reference})
            res.json(review)
        }catch(err){

        }
    }
}