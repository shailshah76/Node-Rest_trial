const express = require('express');
const productRouter = require('./api/routes/products');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.use('/products' ,productRouter);

app.use((req, res, next) => {
    res.status(404).json({
        error: "Page not found"
    })
    next();
});

app.use((err, req, res, next) => {
    res.status(500).json({
        error: err
    });
});

module.exports = app;