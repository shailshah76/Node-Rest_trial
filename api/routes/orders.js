const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/product');

router.get('/', (req, res, next) => {
    Order.find()
    .then(row => {
        console.log(row);
        res.status(200).json({
            message: "Handling GET at /orders",
            list: row
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post('/:pid/:paid', (req, res, next) => {
    const order = new Order({
        _id: mongoose.Types.ObjectId(),
        _pid: req.params.pid,
        paid: req.params.paid
    });
    order.save()
    .then(row => {
        console.log(row);
        res.status(200).json({
            message: "Handling GET at /orders",
            list: row
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;