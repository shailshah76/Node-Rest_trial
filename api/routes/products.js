const express = require('express');
const router = express.Router();

router.get('/' , (req ,res, next) => {
    res.status(200).json({
        message: "Handling GET at /products"
    });
});

router.post('/' , (req ,res, next) => {
    res.status(200).json({
        message: "Handling POST at /products"
    });
});

router.get('/:productId' ,(req ,res ,next) => {
    const id = req.params.productId; 
    if(id === 'special'){
        res.status(200).json({
            message: "You are a Special Kind." ,
            id: id
        });    
    }else{
        res.status(200).json({
            message: "You passed a Product ID"
        })
    }
});

router.patch('/:productId' ,(req ,res ,next) => {
    res.status(200).json({
        message: "Updated Product"
    });
});

router.delete('/:productId' ,(req ,res ,next) => {
    res.status(200).json({
        message: "Deleted Product"
    });
});

module.exports = router;