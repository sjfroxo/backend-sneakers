import mongoose from "mongoose";

const Card = new mongoose.Schema({
    title: {type: String, required: true},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    picture: {type: String}
})

export default mongoose.model('Card', Card);