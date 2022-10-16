const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    orderedOn: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Order", orderSchema);