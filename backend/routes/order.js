const express = require("express");
let router = express.Router();
const Order = require("../models/order");
const User = require("../models/user");
const middleware = require('../middleware/index');

router.get('/', middleware.verifyToken, async function(req, res){
    try {
        let orders = await Order.find({buyer: req.userId}).populate("product");
        if (orders==null) {
            res.status(200).send(null)
        }
        res.status(200).send(orders);
    } catch(err) {
        res.status(500).send("Server Error");
    }
});

router.post('/', middleware.verifyToken, async function(req, res){
    try {
        let order = new Order({
            product: req.body.prodId, 
            buyer: req.userId
        });
        console.log("order", order);
        let completedOrder = await order.save();
        if (completedOrder==null) {
            res.status(200).send(null)
        }
        res.status(200).send(completedOrder);
    } catch(err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;