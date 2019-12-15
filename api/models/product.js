const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    created_at: Date,
    updated_at: Date
});

module.exports = mongoose.model('Product' ,ProductSchema);

