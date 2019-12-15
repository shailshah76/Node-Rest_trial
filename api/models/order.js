const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    _pid: mongoose.Schema.Types.ObjectId,
    paid: Boolean
});

module.exports = mongoose.model('Order', orderSchema);