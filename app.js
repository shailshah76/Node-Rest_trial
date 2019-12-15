const express = require('express');
const productRouter = require('./api/routes/products');
const orderRouter = require('./api/routes/orders');

//Dev
const morgan = require('morgan');
const bodyParser = require('body-parser');

//database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://node-rest-shop:' + 
    process.env.MONGODB_AT_PASS + 
    '@node-rest-shop-yupou.mongodb.net/test?retryWrites=true&w=majority');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/products' ,productRouter);
app.use('/orders' ,orderRouter);

app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status(404);
    next(error);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message
    });
});

module.exports = app;